const express = require('express');
const upload = require('../../helper/fileUpload');

const router = express.Router();

router.post('/upload', upload.array('image', 1), (req, res) => {
    res.send({ image: req.file });
});

module.exports = router;