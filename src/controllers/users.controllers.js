const {UserServices} = require('../services/index');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.json(result);
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
    res.json(users);
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

