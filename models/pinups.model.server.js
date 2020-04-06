var mongoose = require('mongoose');

var pinupsSchema = new mongoose.Schema({
    value: String,
    diff: String,
    HP: Number,
    STR: Number,
    Armor: Number,
    WeaponName: String,
    WeaponType: String,
    DR: Number,
    DK: Number,
    NoteTitle: String,
    NoteText: String
}, {
    collection: "pinups"
});

var pinupsModel = mongoose.model('pinupsModel', pinupsSchema);
module.exports = function () {
    var api = {
        viewPinups: viewPinups,
        getPinupsList: getPinupsList,
        getMongooseModel: getMongooseModel
    }

    return api;

    function viewPinups(value) {
        return pinupsModel.aggregate([
            { match: { value: value } }
        ], function (err, docs) {
            return docs;
        });
    }

    function getPinupsList() {
        return pinupsModel.find();
    }

    function getMongooseModel() {
        return pinupsModel;
    }
}