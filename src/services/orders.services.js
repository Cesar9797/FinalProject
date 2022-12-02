const {Orders, ProductsInOrder} = require('../models');

class OrdersServices{

  static async create(userId, product){
    try {
      const order = await Orders.findOne({
        where: {userId}
      });
      if(order){
        const orderId = order.id
        const addProduct = await ProductsInOrder.create({
          ...product, orderId
        });
        return {message: 'Producto anadido a la orden'}
      } else {
        const createOrder = await Orders.create({
          userId
        });
        const orderId = createOrder.id;
        const addProduct = await ProductsInOrder.create({
          ...product, orderId
        });
        return {message: "Orden creada y producto anadido"}
      }
    } catch (error) {
      throw error;
    }
  }
}