const {Carts, ProductsInCart, Products, Users} = require('../models');

class CartServices {
  static async addProduct (newProduct, userId) {
    try {
      const data = {...newProduct};
      const {productId} = newProduct;
      const resultProducts = await Products.findOne({
        where: {id: productId}
      });
      if(resultProducts.availableQty > 0){
        resultProducts.availableQty = resultProducts.availableQty - data.quantity;
        resultProducts.save();
        const existCart = await Carts.findOne({
          where: {userId}
        });
        if(!existCart){
          const result = await Carts.create({
            userId
          });
          const cartId = result.id;
          const resultAdd = await ProductsInCart.create({...data, cartId
          });
          return resultAdd;
        } else if (existCart && existCart.status === "active") {
          const cartId = existCart.id;
          const resultAdd = await ProductsInCart.create({...data, cartId});
          return resultAdd;
        } else if (existCart && existCart.status === "purshased"){
          const result = await Carts.create({
            userId
          });
          const cartId = result.id;
          const resultAdd = await ProductsInCart.create({...data, cartId});
          return resultAdd
        }
        // return {message: 'pendiente'} 
      }
    } catch (error) {
      throw error;
    }
  }

  static async getAllProducts(userId){
    try {
      const products = await Carts.findOne({
        where: {userId, status: 'active'},
        attributes: ['id', 'userId', 'status'],
        include: [
          {
            model: ProductsInCart,
            as: 'products',
            attributes: ['id', 'cartId', 'productId', 'quantity', 'price', 'status'],
            include: {
              model: Products,
              as: "product",
              attributes: ['id', 'name', 'price']
            }
          },
        ]
        
      });
      return products;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;