var mongoose = require('mongoose');

var weaponsSchema = new mongoose.Schema({
    name: String,
    type: String,
    DR: Number,
    DK: Number
}, {
    collection: "weapons"
});

var weaponsModel = mongoose.model('weaponsModel', weaponsSchema);

module.exports = function () {
    var api = {
        viewWeapons: viewWeapons,
        getWeaponsList: getWeaponsList,
        getMongooseModel: getMongooseModel
    }
    return api;

    function viewWeapons(name) {
        return weaponsModel.aggregate([
            { $match: { name: name } }
        ], function (err, docs) {
            return docs
        });
    }

    function getWeaponsList() {
        return weaponsModel.find();
    }

    function getMongooseModel() {
        return weaponsModel;
    }
}
