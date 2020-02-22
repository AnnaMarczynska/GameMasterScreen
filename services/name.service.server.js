const express = require('express');
const router = express.Router();

var nameModel = require("./name.service.server.js")();

router.get('/generate/:name', (req, res) => {
    return res.status(200).json(nameModel.generateName())
});

module.exports = router;