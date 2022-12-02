const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Carts = db.define('carts', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    field: "total_price"
  },
  status: {
    type: DataTypes.ENUM('active', 'purshased'),
    defaultValue: 'active',
    allowNull: false
  }
});

module.exports = Carts