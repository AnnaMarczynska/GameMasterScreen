var mongoose = require('mongoose');

var charcterSheetSchema = new mongoose.Schema({
    name: String,
    playersName: String,
    age: Number,
    proffesion: String,
    STR: Number,
    CON: Number,
    DEX: Number,
    INT: Number,
    WIS: Number,
    CHA: Number,
    HP: Number,
    armor: Number,
    notes: String
}, {
    collection: "characterSheets"
});

var characterSheetModel = mongoose.model('characterSheetModel', characterSheetSchema;
module.exports = function () {
    var api = {
        viewCharacterSheet: viewCharacterSheet,
        getMongooseModel: getMongooseModel
    }

    return api;

    function viewCharacterSheet() {
        viewCharacterSheet.find();
    }

    function getMongooseModel() {
        return characterSheetModel;
    }
}