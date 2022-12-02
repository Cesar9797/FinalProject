const {Products} = require('../models');

class ProductsServices {
  static async create(newProduct){
    try {
      const result = await Products.create(newProduct);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Products.findAll();
      const allProducts = result.map(product => {
         if(product.availableQty > 0){
          return product
         }
      });
      return allProducts;
    } catch (error) {
      throw error;
    }
  }

  // static async getByUserId(userId) {
  //   try {
  //     const productsByUser = Products.findAll({
  //       where: {userId},
  //     });
  //     const {availableQty} = productsByUser;
  //     if(availableQty > 0){
  //       return productsByUser;
  //     } else {
  //       return {message: "No disponible por el momento"}
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

module.exports = ProductsServices;