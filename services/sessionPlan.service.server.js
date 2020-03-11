const express = require('express');
const router = express.Router();

var sessionPlanModel = require("../models/sessionPlan.model.server")();

router.get('/view/:title', (req, res) => {
    sessionPlanModel.viewSessionPlan(req.params.title)
    .then(function(result){
        return res.status(200).json(result);
    });
});

router.get('/view', (req, res) => {
    sessionPlanModel.getAllSessionPlans()
    .then(function (result){
        return res.status(200).json(result)
    });
});

module.exports = router;