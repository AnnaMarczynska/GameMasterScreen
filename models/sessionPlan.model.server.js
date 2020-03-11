var mongoose = require('mongoose');

var sessionPlanSchema = new mongoose.Schema({
    title: String,
    notes: String,
    date: String
}, {
    collection: "sessionPlan"
});

var sessionPlanModel = mongoose.model('sessionPlanModel', sessionPlanSchema);
module.exports = function () {
    var api = {
        viewSessionPlan: viewSessionPlan,
        getAllSessionPlans: getAllSessionPlans,
        getMongooseModel: getMongooseModel
    }

    return api;

    function viewSessionPlan(title) {
        return sessionPlanModel.aggregate([
            {match: {title: title}}
        ], function(err, docs){
                return docs;
        });
    }

    function getAllSessionPlans(){
        return sessionPlanModel.find();
    }

    function getMongooseModel() {
        return sessionPlanModel;
    }
}