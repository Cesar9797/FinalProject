const {Router} = require('express');
const router = Router();
const {changeToPurchased} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

router.post('/purchases', authenticate, changeToPurchased);

module.exports = router;