const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const db = require('./utils/database');
const handleError = require('./middlewares/error.middleware');
const initModels = require('./models/initModels');
const {usersRoutes, productsRoutes, 
  productsInCartRoutes, authenticateRoute, purchasedRoute,
  ordersRoutes
  } = require('./routes');

initModels();


db.authenticate()
  .then(() => console.log('Auntenticación exitosa'))
  .catch(error => console.log(error));

db.sync({force: false})
  .then(() => console.log('Base de datos sincronizada'))
  .catch(error => console.log(error));

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// app.use('/', (req, res) => {
//   console.log('Bienvenidos')
// });


app.use('/api/v1', usersRoutes);
app.use('/api/v1', productsRoutes);
app.use('/api/v1', productsInCartRoutes);
app.use('/api/v1', authenticateRoute);
app.use('/api/v1/', purchasedRoute);
app.use('/api/v1/', ordersRoutes);


app.use(handleError);

module.exports = app;