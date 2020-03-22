const express = require('express');
const router = express.Router();

var musicPlayerModel = require("../models/music.model.server.js")();

router.get('/browse', (req, res) => {
    return res.status(200).json(musicPlayerModel.browseMusic());
});

module.exports = router;