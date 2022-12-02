const createOrderWhitProducts = (req, res, next) => {
  try {
    const {id} = req.dataUser;
    const userId = id;
    const product = req.body;
    const result = await OrdersServices.create(userId, product);
  
  } catch (error) {
    
  }
}

module.exports = {
  createOrderWhitProducts
}