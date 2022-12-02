const {Router} = require('express');
const router = Router();
const {userRegister, getAllUsers} = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *      summary: Register a new user into the app
 *      requestBody: 
 *        description: To register a new user you need the firstname, lastname, email, phone and password
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/register"
 *      tags: [users]
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
 *                    example: User created
 *   get:
 *      security:
 *        - bearerAuth: []
 *      summary: Obtain the users in the app
 *      tags: [users]
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
 *                  data:
 *                    type: array
 *                    items: 
 *                       $ref: "#/components/schemas/users"
 * /api/v1/authenticate:
 *   post:
 *      summary: Login user
 *      requestBody:
 *        description: To login need email, password
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/login"
 *      tags: [users]
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
 *                    example: OK
 *                  token: 
 *                    type: string
 *                    example: eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCY2hvbjIiLCJlbWFpbCI6ImyZCI6IiQyYiQwOCRyeU5yWOTk3fQ.myrFTDcJu-xHQMvHF_lCybOTEKp4B_wxdy_qhcpkfCG6Q6RtxTRgH2VLV51H8hWP8cfAqstp9aIM8Q2knb5nJA
                   
 * 
 * 
 * 
 */     


router.post('/users', userRegister);
router.get('/users', authenticate, getAllUsers);

module.exports = router;