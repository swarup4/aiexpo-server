const express = require('express');
const app = express();

const ping = require('./ping/controller');
const user = require('./user/controller');

app.use('/ping', ping);
app.use('/user', user);

module.exports = app;