const {Users, Products, Orders, Carts, ProductsInCart, ProductsInOrder} = require('./index');

const initModels = () => {
  Products.belongsTo(Users, {as: 'vendor', foreignKey: 'user_id'});
  Users.hasMany(Products, {as: 'products', foreignKey: 'user_id'});

  Orders.belongsTo(Users, {as: 'buyer', foreignKey: 'user_id'});
  Users.hasMany(Orders, {as: 'orders', foreignKey: 'user_id'});

  Carts.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
  Users.hasOne(Carts,{as: 'cart', foreignKey: 'user_id'});
  
  ProductsInCart.belongsTo(Carts, {as: 'cart', foreignKey: 'cart_id'});
  Carts.hasMany(ProductsInCart, {as: 'products', foreignKey: 'cart_id'});

  ProductsInCart.belongsTo(Products, {as: 'product', foreignKey: 'product_id'});
  Products.hasMany(ProductsInCart, {as: 'carts', foreignKey: 'product_id'});

  ProductsInOrder.belongsTo(Orders, {as: 'order', foreignKey: 'order_id'});
  Orders.hasMany(ProductsInOrder, {as: 'products', foreignKey: 'order_id'});

  ProductsInOrder.belongsTo(Products, {as: 'product', foreignKey: 'product_id'})
  Products.hasMany(ProductsInOrder, {as: 'orders', foreignKey: 'product_id'});
};

module.exports = initModels;