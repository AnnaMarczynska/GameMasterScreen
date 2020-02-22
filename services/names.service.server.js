const express = require('express');
const router = express.Router();

var nameModel = require("../models/names.model.server.js")();

router.get('/generate/:gender/:category', (req, res) => {
    nameModel.generateName(req.params.gender, req.params.category)
    .then(function (result) {
        return res.status(200).json(result[0]['value']);
    });
});

module.exports = router;