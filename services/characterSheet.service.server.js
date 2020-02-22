const express = require('express');
const router = express.Router();

var characterSheetModel = require('./characterSheet.service.server')();

router.get('/view/characterSheet', (req, res) => {
    return res.status(200).json(characterSheetModel.viewCharacterSheet())
});

module.exports = router;