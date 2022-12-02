const db = require('../utils/database');
const {DataTypes} = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *      addProductIntoCart:
 *        type: object
 *        properties:
 *          productId:
 *            type: integer
 *            example: 1
 *          quantity:
 *            type: integer
 *            example: 5
 *          price: 
 *            type: integer
 *            example: 4500
 *      getProductsIntoCart:
 *        type: object
 *        properties:
 *          id: 
 *            type: integer
 *            example: 7
 *          cartId: 
 *            type: integer
 *            example: 5
 *          productId: 
 *            type: integer
 *            example: 3
 *          quantity:
 *            type: integer
 *            example: 5
 *          price:
 *            type: integer
 *            example: 24500
 *          status: 
 *            type: string
 *            example: selected
 *          product:
 *            type: object
 *            properties:
 *              id: 
 *                type: integer
 *                example: 3
 *              name:
 *                type: string
 *                example: Laptop Lenovo Ideapad 3
 *              price:
 *                type: integer
 *                example: 9000
 *           
 */


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