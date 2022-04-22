require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const controller = require('./modules');
const app = express();
// const port = 3000;

mongoose.connect('mongodb+srv://aiexpo:aiexpo1991@cluster0.0xizd.mongodb.net/aiexpo?retryWrites=true&w=majority', {
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

// app.listen(port, () => {
//     console.log("Server is running in ", port);
// });

module.exports = app;