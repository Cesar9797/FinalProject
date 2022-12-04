const {OrdersServices} = require('../services');

const getOrders = async (req, res, next) => {
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
      message: "Fallo en la petición de las ordenes"
    })
  }
};

module.exports = {getOrders};