const express = require('express');
const router = express.Router();

var characterSheetModel = require('../models/characterSheet.model.server.js')();

router.get('/view/:charactersName', (req, res) => {
    characterSheetModel.viewCharacterSheet(req.params.charactersName)
        .then(function (result) {
            return res.status(200).json(result)
        });
});

router.get('/view', (req, res) => {
    characterSheetModel.getAllCharacters()
        .then(function (result) {
            return res.status(200).json(result)
        });
});

module.exports = router;