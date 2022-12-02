const {OrdersServices} = require('../services');

const createOrderWhitProducts = async (req, res, next) => {
  try {
    console.log("Mensaje para ver si estoy llegando hasta controllers")
    const {id} = req.dataUser;
    const userId = id;
    const product = req.body;
    const result = await OrdersServices.create(userId, product);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Fallo al agregar producto a la orden"
    })
  }
}

const getAllOrders = async (req, res, next) => {
  try {
    const {id} = req.dataUser;
    const userId = id;
    const orders = await OrdersServices.getAll(userId);
    res.json({
      status: "success",
      orders
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "No se pudo obtener las ordenes"
    })
  }
}

module.exports = {
  createOrderWhitProducts,
  getAllOrders
}