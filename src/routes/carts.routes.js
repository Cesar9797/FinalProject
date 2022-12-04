const {Router} = require('express');
const router = Router();
const authenticate = require('../middlewares/auth.middleware');
const {addProductToCart, getProductsInCart} = require('../controllers');

/**
 * @openapi
 * /api/v1/cart:
 *   post:
 *      security:
 *          - bearerAuth: []
 *      summary: Add product to cart and create order
 *      requestBody:
 *        description: To add product in cart you need productId, quantity, price
 *        required: true
 *        content: 
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/addProductIntoCart"
 *      tags: [cart]
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
 *                    example: Product add to cart
 * /api/v1/cart/products:
 *   get:
 *      security:
 *          - bearerAuth: []
 *      summary: Get Products in cart
 *      tags: [cart]
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
 *                  cart: 
 *                    type: object
 *                    properties:
 *                      id: 
 *                        type: integer,
 *                        example: 5
 *                      userId:
 *                        type: integer
 *                        example: 5
 *                      status:
 *                        type: string
 *                        example: active
 *                      products: 
 *                        type: array
 *                        items:
 *                          $ref : "#/components/schemas/getProductsIntoCart"

 */

router.post('/cart', authenticate, addProductToCart);
router.get('/cart/products', authenticate, getProductsInCart);

module.exports = router;