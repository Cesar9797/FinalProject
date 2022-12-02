const {ProductsServices} = require('../services');

const createProducts = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const result = await ProductsServices.create(newProduct);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Error to create new product, verify the data send'
    })
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await ProductsServices.getAll();
    res.json(allProducts);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      messages: 'Fallo en la petición de los productos'
    })
  }
}

// const getProductsByUserId = async (req, res, next) => {
//   try {
//     const {userId} = req.params;
//     const productsByUser = await ProductsServices.getByUserId(userId);
//     res.json(productsByUser);
//   } catch (error) {
//     next({
//       status: 400,
//       errorContent: error,
//       message: "pendiente"
//     })
//   }
// }

module.exports = {
  createProducts,
  // getProductsByUserId
  getAllProducts
}