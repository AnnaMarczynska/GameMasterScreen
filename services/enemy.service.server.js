const express = require('express');
const router = express.Router();

//selecting model
var enemyModel = require("../models/enemy.model.server.js")();

router.get('/generate/:level', (req, res) => {
    return res.status(200).json(enemyModel.generateEnemy(req.params.level))
} );

//exporting so app.js can see it 
module.exports = router;