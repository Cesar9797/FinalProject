const {userRegister, getAllUsers} = require('./users.controllers');
const {createProducts, /*getProductsByUserId*/ getAllProducts} = require('./products.controllers');
const {addProductToCart} = require('./cart.controllers');
const {authenticateUser} = require('./auth.controllers');
const {changeToPurchased} = require('./purchased.controllers');

module.exports = {
  userRegister, getAllUsers,
  createProducts, /*getProductsByUserId*/
  addProductToCart,
  authenticateUser,
  getAllProducts,
  changeToPurchased
}