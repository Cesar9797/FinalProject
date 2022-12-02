const {Router} = require('express');
const router = Router();
const {userRegister, getAllUsers} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');


router.post('/users', userRegister);
router.get('/users', authenticate, getAllUsers);

module.exports = router;