const express = require('express');
const router = express.Router();

var weaponsModel = require("../models/weapons.model.server.js")();

router.get('/view/:name/:type/:DR/:DK', (req, res) => {
    weaponsModel.viewWeapons(req.params.name, req.params.type, req.params.DR, req.params.DK)
    .then(function(result){
        return res.status(200).json(result['name']);
    });
});

module.exports = router;