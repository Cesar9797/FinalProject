
const {Carts, ProductsInCart, Products, ProductsInOrder, Orders} = require('../models');

class PurchasesServices {
  static async changeCart(userId) {
   try {
    const result = await Carts.findOne({
      where: {userId}
    });
    result.status = "purshased";
    await result.save();
    const changeProductInCart = await ProductsInCart.findAll({
      where: {cartId: result.id},
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
    });
    console.log(changeProductInCart);
    changeProductInCart.forEach(productincart => {
      productincart.status = "purshased";
      productincart.save();
    });
   } catch (error) {
    throw error;
   }
  }


  static async changeOrder(userId){
    try {
      const result = await Orders.findAll({
        where: {userId, status: "open"},
        include: {
          model: ProductsInOrder,
          as: 'products'
        }
      });
      if(result){
        result.forEach(order => {
          order.status = "finished";
          order.products.forEach(product => {
            product.status = "purshased";
            product.save();
          });
          order.save();
        })
      }
    } catch (error) {
      throw error;
    }
  }
};

module.exports = PurchasesServices;