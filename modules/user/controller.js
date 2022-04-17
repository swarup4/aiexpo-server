const express = require('express');
const jwt = require("jsonwebtoken");
// const aws = require('../../config/awsConfig');
const router = express.Router();
const User = require('./models');

router.get("/", (req, res) => {
    // const id = req.params.id;
    User.Auth.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

router.post("/signup", (req, res) => {
    console.log(req.body);
    let model = new User.Auth(req.body);
    model.save((err, user) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(user);
        }
    });
});

router.post("/login", (req, res) => {
    User.Auth.findOne(req, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            if (data == null) {
                res.status(401).json({ error: "Username & password is not Valid" });
            } else {
                let obj = { id: data._id, email: data.email };
                let token = jwt.sign(obj, process.env.SecrateKey, {
                    expiresIn: 1800 // expires in 30 minuit
                });

                res.json({
                    id: data._id,
                    email: data.email,
                    token: token
                });
            }
        }
    });
});

module.exports = router;