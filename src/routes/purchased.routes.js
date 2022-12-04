const {Router} = require('express');
const router = Router();
const {changeToPurchased} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware')

/**
 * @openapi
 * /api/v1/purchases:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      summary: Buy cart and finished order
 *      tags: [purchases]
 *      responses:
 *        200:
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status: 
 *                    type: string
 *                    example: success
 *                  message:
 *                    type: string
 *                    example: Purchases cart
 */

router.post('/purchases', authenticate, changeToPurchased);

module.exports = router;