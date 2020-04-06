const express = require('express');
const router = express.Router();

var pinupsModel = require("../models/pinups.model.server.js")();

router.get('/view/:value', (req, res) => {
    pinupsModel.viewPinups(req.params.value)
        .then(function (result) {
            return res.status(200).json(result);
        });
});

router.get('/view', (req, res) => {
    pinupsModel.getPinupsList()
    .then(function (result) {
        return res.status(200).json(result)
        })
});

module.exports = router;