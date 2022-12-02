const usersRoutes = require('./users.routes');
const productsRoutes = require('./products.routes');
const productsInCartRoutes = require('./carts.routes');
const authenticateRoute = require('./auth.routes');
const purchasedRoute = require('./purchased.routes');

module.exports = {
  usersRoutes,
  productsRoutes,
  productsInCartRoutes,
  authenticateRoute,
  purchasedRoute
};