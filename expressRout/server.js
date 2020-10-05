const express = require('express');

const users = require('./routers/users');
const products = require('./routers/products');
const errorHandler = require('./middleware/error');

const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.json());

app.use('/api/v1/users', users);
app.use('/api/v1/products', products);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
