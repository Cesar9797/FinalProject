const {Orders, ProductsInOrder, Users, Products} = require('../models');

class OrdersServices{
  static async getAll(userId){
    try {
      const orders = await Orders.findAll({
        where: {userId},
        attributes: {
          exclude: ['user_id', 'updatedAt']
        },
        include: {
          model: ProductsInOrder,
          as: 'products',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'order_id', 'product_id']
          },
          include: {
            model: Products,
            as: 'product',
            attributes: {
              exclude: ['user_id', 'createdAt']
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