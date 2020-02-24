const express = require('express');
const router = express.Router();

var PinupsModel = require("../models/pinups.model.server")();

router.get('/view/pinups', (req, res) => {
    return res.status(200).json(PinupsModel.viewPinups())
});

module.exports = router;