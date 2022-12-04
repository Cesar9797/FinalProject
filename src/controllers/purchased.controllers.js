const {PurchasesServices} = require('../services');
const transporter = require('../utils/nodemailer');

const changeToPurchased = async (req, res, next) => {
  try {
    const {id} = req.dataUser;
    const userId = id;
    const {email} = req.dataUser;
    const infoUser = req.body;
    const resultChangeCart = await PurchasesServices.changeCart(userId);
    const resultChangeOrder = await PurchasesServices.changeOrder(userId);
    res.json(infoUser);
    transporter.sendMail({
      from: "<cesar.lararaya@gmail.com",
      to: email,
      subject: "Gracias por comprar en E-Commerce.com, te esperamos pronto",
      text: "Tu compra fue realizada con éxito",
      html: `<h3>Compra realizada</h3>`
    });

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: 'pendiente'
    })
  }
};

module.exports = {
  changeToPurchased
}