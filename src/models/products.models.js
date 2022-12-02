const db = require('../utils/database');
const {DataTypes} = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *      create:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: SANSUI SMX43T1UA 43PULG ULTRA HD
 *          imageUrl:
 *            type: string
 *            example: https://m.media-amazon.com/images/I/71LvDk20UNL._AC_SX450_.jpg
 *          price:
 *            type: integer
 *            example: 5200
 *          availableQty:
 *            type: integer
 *            example: 100
 *          status: 
 *            type: string
 *            example: available or not_available
 *          userId:
 *            type: integer
 *            example: 1
 *      getProducts:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: SANSUI SMX43T1UA 43PULG ULTRA HD
 *          imageUrl:
 *            type: string
 *            example: https://m.media-amazon.com/images/I/71LvDk20UNL._AC_SX450_.jpg
 *          price:
 *            type: integer
 *            example: 5200
 *          availableQty:
 *            type: integer
 *            example: 100
 *          status: 
 *            type: string
 *            example: available or not_available
 *          userId:
 *            type: integer
 *            example: 1
 *          createdAt: 
 *            type: string
 *            example: 2022-12-02T14:51:01.808Z

 *          
 * 
 * 
 * 
 */    

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