const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const ProductsInCart = db.define('productsincart', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "cart_id"
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "product_id"
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('selected', 'purshased'),
    defaultValue: 'selected'
  }
})

module.exports = ProductsInCart