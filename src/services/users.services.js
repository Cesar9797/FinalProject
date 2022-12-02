const {Users, Carts} = require('../models');

class UserServices {
  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const users = Users.findAll({
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      });
      return users;  
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;