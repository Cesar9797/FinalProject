const {CartServices} = require('../services');

const addProductToCart = async (req, res, next) => {
  try {
    const newProduct = req.body;
    const {id} = req.dataUser;
    const userId = id;
    const result = await CartServices.addProduct(newProduct, userId);
    const resultOrder = await CartServices.createOrder(userId, newProduct)
    res.json({
      status: "success",
      message: "Product added to cart"
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Fallo al agregar el producto al carrito'
    })
  }
}

const getProductsInCart = async (req, res, next) => {
  try {
    const {id} = req.dataUser;
    const userId = id;
    const result = await CartServices.getAllProducts(userId);
    res.json({
      status: "succes",
      cart: result
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Fallo en la petición'
    })
  }
}

module.exports = {
  addProductToCart,
  getProductsInCart   
}