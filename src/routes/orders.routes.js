const {Router} = require('express');
const router = Router();

router.post('/order', createOrderWhitProducts);

module.exports = router;