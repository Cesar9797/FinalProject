const {Router} = require('express');
const router = Router();
const {authenticateUser} = require('../controllers');

router.post('/authenticate', authenticateUser);

module.exports = router;