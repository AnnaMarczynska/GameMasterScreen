const express = require('express');
const router = express.Router();

var characterSheetModel = require('../models/characterSheet.model.server.js')();

router.get('/view/characterSheet', (req, res) => {
    return res.status(200).json(characterSheetModel.viewCharacterSheet())
});

module.exports = router;