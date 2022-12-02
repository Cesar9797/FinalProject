const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availableQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'available_qty'
  },
  status: {
    type: DataTypes.ENUM('available', 'not_available'),
    defaultValue: 'available'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "user_id"
  }
},
{
  timestamps: true,
  updatedAt: false
});

module.exports = Products;