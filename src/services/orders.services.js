const {Orders, ProductsInOrder, Products} = require('../models');

class OrdersServices{

  static async create(userId, product){
    try {
      console.log("Mensaje para ver si estoy llegando hasta services")
      const order = await Orders.findOne({
        where: {userId}
      });
      if(order && order.status === "open"){
        const orderId = order.id
        const addProduct = await ProductsInOrder.create({
          ...product, orderId
        });
        return {message: 'Producto anadido a la orden'}
      } else if (!order) {
        const createOrder = await Orders.create({
          userId
        });
        const orderId = createOrder.id;
        const addProduct = await ProductsInOrder.create({
          ...product, orderId
        });
        return {message: "Orden creada y producto anadido"}
      } else if (order && order.status === "finished"){
        const createOrder = await Orders.create({
          userId
        });
        const orderId = createOrder.id;
        const addProduct = await ProductsInOrder.create({
          ...product, orderId
        });
        return {message: "Nueva orden creada y producto anadido"}
      }
    } catch (error) {
      throw error;
    }
  }


  static async getAll(userId){
    try {
      const orders = await Orders.findAll({
        where: {userId},
        include: {
          model: ProductsInOrder,
          as: 'products',
          attributes: {
            exclude: ['updatedAt', 'order_id', 'product_id']
          },
          include: {
            model: Products,
            as: "product",
            attributes: {
              exclude: ['createdAt', 'user_id', 'userId', 'status']
            }
          }
        }
      });
      return orders;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = OrdersServices;