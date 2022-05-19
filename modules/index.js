const express = require('express');
const app = express();

const ping = require('./ping/controller');
const user = require('./user/controller');
const product = require('./product/controller');

app.use('/ping', ping);
app.use('/user', user);
app.use('/product', product);

module.exports = app;