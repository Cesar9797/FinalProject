const {UserServices} = require('../services/index');
const transporter = require('../utils/nodemailer');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.json({
      status: "success",
      response: "User created"
    });
    transporter.sendMail({
      from: "<cesar.lararaya@gmail.com",
      to: result.email,
      subject: "Bienvenido a e-commerce.com",
      text: `Hola ${result.username} bienvenido a la mejor aplicación de comercio electrónico`,
      html: `<h1>Bienvenido</h1>`
    })
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

