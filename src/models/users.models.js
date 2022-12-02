const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * @openapi
 * components:
 *  schemas:
 *    users:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        username: 
 *          type: string
 *          example: Cesar Adrian Lara
 *        email:
 *          type: string
 *          example: cesar@gmail.com
 *        password:
 *          type: string
 *          example: "123"
 *        createdAt: 
 *          type: string
 *          example: 2022-11-24T00:50:00.611Z
 *    register:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: Cesar Adrian Lara Cavazos
 *        email:
 *          type: string
 *          example: cesar@gmail.com
 *        password:
 *          type: string
 *          example: "123"
 *    login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          example: cesar@gmail.com
 *        password: 
 *          type: string
 *          example: 123
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT    
 *    
 * 
 */

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  hooks: {
    beforeCreate: (user, options) => {
      const {password} = user;
      const hash = bcrypt.hashSync(password, 8);
      user.password = hash;
    }
  }
});

module.exports = Users;