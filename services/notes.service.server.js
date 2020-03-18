const express = require('express');
const router = express.Router();

var notesModel = require("../models/notes.model.server.js")();

router.get('/view/:title', (req, res) => {
    notesModel.viewNotes(req.params.title)
    .then(function (result) {
        return res.status(200).json(result)
    });
});

router.get('/view', (req, res) => {
    notesModel.getAllNotes()
    .then(function (result) {
        return res.status(200).json(result)
    });
});

module.exports = router;