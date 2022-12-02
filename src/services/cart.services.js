const {Carts, ProductsInCart, Products} = require('../models');

class CartServices {
  static async addProduct (newProduct, userId) {
    try {
      const data = {...newProduct, userId};
      const {productId} = newProduct;
      const resultProducts = await Products.findOne({
        where: {id: productId}
      });
      // if(resultProducts.availableQty > 0){
        
      // }
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
      } else {
        const cartId = existCart.id;
        const resultAdd = await ProductsInCart.create({...data, cartId});
        return resultAdd;
      }
      console.log(resultAdd);
      // return {message: 'pendiente'}
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;