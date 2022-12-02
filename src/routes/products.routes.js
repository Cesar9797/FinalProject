const {Router} = require('express');
const router = Router();
const {createProducts, /*getProductsByUserId*/ getAllProducts } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

/**
 * @openapi
 * /api/v1/products:
 *   post:
 *      security:
 *        - bearerAuth: []
 *      summary: Create new product
 *      requestBody:
 *        description: To create a new product you need name, imageUrl, price, availableQty, status, userId
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/create"
 *      tags: [products]
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
 *                    example: Product created
 *   get:
 *      summary: Get All Products
 *      tags: [products]
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
 *                  products:
 *                    type: array
 *                    items:
 *                      $ref: "#/components/schemas/getProducts"
 *                    
 */

router.post('/products', authenticate, createProducts);
router.get('/products', getAllProducts);
// router.get('/:userId/products', authenticate ,getProductsByUserId);

module.exports = router;