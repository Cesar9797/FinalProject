const {Router} = require('express');
const router = Router();
const {createOrderWhitProducts, getAllOrders} = require('../controllers');
const  authenticate  = require('../middlewares/auth.middleware');

/**
 * @openapi
 * /api/v1/order:
 *   post:
 *      summary: Add to order products
 *      security:
 *        -bearerAuth: []
 *      tags: [orders]
 *      requestBody:
 *        required: true
 *        description: To add product to order you need productId, price, quantity
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                productId:
 *                  type: integer
 *                  example: 3
 *                quantity:
 *                  type: integer
 *                  example: 1
 *                price: 
 *                  type: integer
 *                  example: 9000
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
 *                  response: 
 *                    type: string
 *                    example: Order created and product added
 *   get:
 *      security:
 *        - bearerAuth: []
 *      summary: Get all orders of user
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
 *                       $ref: "#/components/schemas/allOrders"
      
 */

router.post('/order', authenticate, createOrderWhitProducts);
router.get('/order', authenticate, getAllOrders);

module.exports = router;