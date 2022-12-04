const {Router} = require('express');
const router = Router();
const {getOrders} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

/**
 * @openapi
 * /api/v1/orders:
 *   get:
 *      summary: "Obtain all orders"
 *      security:
 *        - bearerAuth: []
 *      tags: [orders]
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
 *                  orders:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/allOrders"
 *                
 */

router.get('/orders', authenticate, getOrders);

module.exports = router;