const express = require('express');
const router = express.Router();

var sessionPlanModel = require("../models/sessionPlan.model.server")();

router.get('/view', (req, res) => {
    sessionPlanModel.viewSessionPlan()
    .then(function(result){
        return res.status(200).json(result);
    });
});

module.exports = router;