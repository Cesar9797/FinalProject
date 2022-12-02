
const {Carts, ProductsInCart, Products} = require('../models');

class PurchasesServices {
  static async change(userId) {
   try {
    const result = await Carts.findOne({
      where: {userId}
    });
    result.status = "active";
    await result.save();
    const changeProductInCart = await ProductsInCart.findAll({
      where: {cartId: result.id},
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
    });
    console.log(changeProductInCart);
    changeProductInCart.forEach(productincart => {
      productincart.status = "selected";
      productincart.save();
    });
   } catch (error) {
    throw error;
   }
  }
};

module.exports = PurchasesServices;