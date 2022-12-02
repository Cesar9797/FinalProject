const Users =  require('./users.models');
const Products = require('./products.models');
const Orders = require('./order.models');
const Carts = require('./cart.models');
const ProductsInCart = require('./productsInCart.models');
const ProductsInOrder = require('./productsInOrder.models');

module.exports = {
  Users, Products, Orders, Carts, ProductsInCart, ProductsInOrder
};