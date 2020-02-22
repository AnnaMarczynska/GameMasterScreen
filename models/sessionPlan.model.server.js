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
        getMongooseModel: getMongooseModel
    }

    return api;

    function viewSessionPlan() {
        return sessionPlanModel.find(
            function(err, docs){
                return docs;
            }
        );
    }

    function getMongooseModel() {
        return sessionPlanModel;
    }
}