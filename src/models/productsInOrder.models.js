const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const ProductsInOrder = db.define('productsinorder', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'order_id'
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('on hold', 'purshased'),
    defaultValue: 'on hold'
  }
},
{
  hooks: {
    beforeCreate: (product, options) => {
      const price = product.price;
      const quantity = product.quantity;
      const totalPrice = price * quantity;
      product.price = totalPrice;
    }
  }
});

module.exports = ProductsInOrder;