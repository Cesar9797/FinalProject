const {Router} = require('express');
const router = Router();
const {createProducts, /*getProductsByUserId*/ getAllProducts } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


router.post('/products', authenticate, createProducts);
router.get('/products', getAllProducts);
// router.get('/:userId/products', authenticate ,getProductsByUserId);

module.exports = router;