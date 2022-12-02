const {Users} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();

class AuthenticationServices {

  static async authenticate (email, password) {
    try {
      const result = await Users.findOne({
        where: {email}
      });
      console.log(result.password);
      if(result){
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? {isValid, result} : isValid
      } else {
        return result;
      }
    } catch (error) {
      throw error
    }
  }

  static genToken(data){
    try {
      const token = jwt.sign(data, process.env.SECRET, {
        expiresIn: '2d',
        algorithm: 'HS512'
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = AuthenticationServices;