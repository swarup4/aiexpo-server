const express = require('express');
// const aws = require('../../config/awsConfig');
const router = express.Router();

router.get("/", (req, res) => {
    console.log("API is triggering");
    res.send("API is working");
});

module.exports = router;