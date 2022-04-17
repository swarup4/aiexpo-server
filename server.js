require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const controller = require('./modules');
const app = express();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database has Connected");
}).catch(err => {
    console.log("Error : " + err);
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(controller);

app.listen(process.env.PORT, () => {
    console.log("Server is running in ", process.env.PORT);
});