const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", // standar open Api que estamos usando
    info: {
      title: "Ecommerce API",
      version: "1.0.0",
      description: "API que sirve para poder realizar un ecommerce",
    },
  },
  apis: [
    "./src/routes/users.routes.js",
    "./src/models/users.models.js",
    "./src/routes/products.routes.js",
    "./src/models/products.models.js",
    "./src/routes/carts.routes.js",
    "./src/models/cart.models.js",
    "./src/routes/purchased.routes.js",
    "./src/routes/orders.routes.js",
    "./src/models/order.models.js"
  ],
};

const swaggerSpec = swaggerJSDoc(options);

// función para configruar la documentación
// dos parametros --> app expres, port donde se ejecuta
const swaggerDocs = (app, port) => {
  // manejador para la ruta de nuestra documentación
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // podemos definir nuestra documentación en formato json
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  //
  console.log(
    `Documentación disponible en localhost:${port}/api/v1/docs/`
  );
};

module.exports = swaggerDocs; // donde iniciamos nuestro servidor
// app.listen, que es en server