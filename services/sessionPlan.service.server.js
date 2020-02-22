const express = require('express');
const router = express.Router();

var sessionPlanModel = require("./sessionPlan.service.server")();

router.get('/view/sessionPlan', (req, res) => {
    return res.status(200).json(sessionPlanModel.viewSessionPlan())
});

module.exports = router;