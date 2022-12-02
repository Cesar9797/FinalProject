const {PurchasesServices} = require('../services');

const changeToPurchased = async (req, res, next) => {
  try {
    const {id} = req.dataUser;
    const userId = id;
    const infoUser = req.body;
    const result = await PurchasesServices.change(userId);
    res.json(infoUser);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'pendiente'
    })
  }
};

module.exports = {
  changeToPurchased
}