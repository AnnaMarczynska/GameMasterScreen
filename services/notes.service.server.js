const express = require('express');
const router = express.Router();

var notesModel = require("../models/notes.model.server.js")();

router.get('/view/notes', (req, res) => {
    return res.status(200).json(notesModel.viewNotes())
});

module.exports = router;