const express = require('express');
const router = express.Router();

var diceModel = require("../models/dice.model.server.js")();

router.get('/roll/:dt/:dr/:dk', (req, res) => {
    return res.status(200).json(diceModel.rollDice(req.params.dt, req.params.dr, req.params.dk));
}
);

module.exports = router;