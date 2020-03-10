const express = require('express');
const router = express.Router();

var weaponsModel = require("../models/weapons.model.server.js")();

router.get('/view/:name', (req, res) => {
    weaponsModel.viewWeapons(req.params.name)
    .then(function(result){
        return res.status(200).json(result);
    });
});

router.get('/view', (req, res) =>{
    weaponsModel.getWeaponsList()
    .then(function (result){
        return res.status(200).json(result)
    })
});

module.exports = router;