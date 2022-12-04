const db = require('../utils/database');
const {DataTypes} = require('sequelize');

/**
 * @openapi
 * components:
  *  schemas:
  *    allOrders:
  *      type: object
  *      properties:
  *        id:
  *          type: integer
  *          example: 4
  *        totalPrice:
  *          type: integer
  *          example: 27000
  *        userId:
  *          type: integer
  *          example: 10
  *        status:
  *          type: string
  *          example: open
  *        createdAt:
  *          type: string
  *          example: 2022-12-02T22:08:35.615Z
  *        products:
  *          type: array
  *          items:
  *            type: object
  *            properties:
  *              id:
  *                type: integer
  *                example: 4
  *              orderId:
  *                type: integer
  *                example: 4
  *              productId:
  *                type: integer
  *                example: 3
  *              quantity:
  *                type: integer
  *                example: 3
  *              price:
  *                type: integer
  *                example: 27000
  *              status:
  *                type: string
  *                example: on hold
  *              createdAt:
  *                type: string
  *                example: 2022-12-02T22:08:35.626Z
  *              product:
  *                type: object
  *                properties:
  *                  id: 
  *                    type: integer
  *                    example: 3
  *                  name:
  *                    type: string
  *                    example: Laptop Lenovo Ideapad 3
  *                  imageUrl:
  *                    type: string
  *                    example: https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTstbxw7AgZmitAnaxt0luWi0C7T7PfUpy5Xs03pMOYosEw7mDUxt06VGd8BdkYPiT0gbfVZWl-cw&usqp=CAc
  *                  price:
  *                    type: integer
  *                    example: 9000
  *                  availableQty:
  *                    type: integer
  *                    example: 91
  *                  userId:
  *                    type: integer
  *                    example: 1
  *                      
 */

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