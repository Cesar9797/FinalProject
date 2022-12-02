const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Orders = db.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    // allowNull: false,
    field: 'total_price'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
  },
  status: {
    type: DataTypes.ENUM('open', 'finished'),
    defaultValue: 'open'
  }
});

module.exports = Orders