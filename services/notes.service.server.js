const express = require('express');
const router = express.Router();

var notesModel = require("./notes.service.server")();

router.get('/view/notes', (req, res) => {
    return res.status(200).json(notesModel.viewNotes())
});

module.exports = router;