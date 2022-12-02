const {Router} = require('express');
const router = Router();
const authenticate = require('../middlewares/auth.middleware');
const {addProductToCart} = require('../controllers');

router.post('/cart', authenticate, addProductToCart);

module.exports = router;