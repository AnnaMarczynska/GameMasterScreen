const express = require('express');
const router = express.Router();

var musicPlayerModel = require("../models/music.model.server.js")();

router.get('/playMusic', (req, res) => {
    return res.status(200).json(musicPlayerModel.playMusic());
});

module.exports = router;