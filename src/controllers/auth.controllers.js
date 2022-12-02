const {AuthenticationServices} = require('../services');

const authenticateUser = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const result = await AuthenticationServices.authenticate(email, password);
    if (result) {
      const {id, username, email, password} = result.result;
      const user = {id, username, email, password};
      const token = AuthenticationServices.genToken(user);
      user.token = token;
      res.json({
        status: "OK",
        token
      });
    } else {
      res.json({message: 'Invalid info'})
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: ""
    })
  }
};

module.exports = {
  authenticateUser
}