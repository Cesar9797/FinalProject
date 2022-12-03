const {Carts, ProductsInCart, Products, Orders, ProductsInOrder} = require('../models');

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

  static async createOrder(userId, newProduct) {
    try {
     const order = await Orders.findOne({
      where: {
        userId
      }
     });
     console.log(order);
     if(order.id === undefined || null){
      console.log(order.id);
      const newOrder = await Orders.create({
        userId
      });
      const orderId = newOrder.id;
      const products = await ProductsInOrder.create({
        ...newProduct, orderId
      });
      return {message: "No se encontro orden y se creo"}
     } else if (order && order.status === "open"){
      const orderId = order.id;
      const products = await ProductsInOrder.create({
        ...newProduct, orderId
      });
      return {message: "Se encontro una orden y se agrego el producto a esa orden"}
     } else if (order && order.status === "finished"){
      const order = await Orders.create({
        userId
      });
      const orderId = order.id;
      const products = await ProductsInOrder.create({
        ...newProduct, orderId
      });
      return {message: "Se encontro una orden pero estaba finalizada asi que se crea una nueva"}
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