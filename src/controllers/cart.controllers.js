const {CartServices} = require('../services');

const addProductToCart = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const {id} = req.dataUser;
    const userId = id;
    console.log(id); // eliminar 
    const result = await CartServices.addProduct(newProduct, userId);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Hola'
    })
  }
}

module.exports = {
  addProductToCart
}