const {UserServices} = require('../services/index');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.json({
      status: "success",
      response: "User created"
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Fallo al crear al usuario, verificar los datos que se estan enviando'
    })
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserServices.getAll();
    res.json({
      status: "success",
      users
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'Algo salió mal durante la obtención de los usuarios'
    })
  }
}

module.exports = {
  userRegister,
  getAllUsers
}

