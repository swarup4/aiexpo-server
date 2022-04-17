const express = require('express');
// const aws = require('../../config/awsConfig');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("API is working");
});

module.exports = router;