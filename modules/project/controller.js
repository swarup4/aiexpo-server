const express = require('express');
const upload = require('../../helper/fileUpload');
const Project = require('./models');

const router = express.Router();

router.get('/:type', (req, res) => {
    let type = req.params.type;
    Project.find({type: type}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
});

router.post("/addProject", (req, res) => {
    let model = new Project(req.body);
    model.save((err, user) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(user);
        }
    });
});

router.put("/editProject/:id", (req, res) => {
    let id = req.params.id;

    Project.findOneAndUpdate({ _id: id }, req.body, {
        timestamps: { createdAt: false, updatedAt: true }
    }, (err, project) => {
        if (err) {
            res.send(err);
        } else {
            res.json(project);
        }
    })
});

router.post('/upload', upload.array('image', 1), (req, res) => {
    res.send({ image: req.file });
});

module.exports = router;