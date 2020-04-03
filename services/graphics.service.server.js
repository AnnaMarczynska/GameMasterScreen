const express = require('express');
const router = express.Router();

var graphicsModel = require("../models/graphics.model.server.js")();

router.get('/view', (req, res) => {
    return res.status(200).json(graphicsModel.getAllGraphics());
});

module.exports = router;