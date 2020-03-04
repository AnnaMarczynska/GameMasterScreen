var mongoose = require('mongoose');

var characterSheetSchema = new mongoose.Schema({
    charactersName: String,
    playersName: String,
    proffesion: String,
    age: Number,
    advantages: String,
    disadvantages: String,
    notes: String,
    HP: Number,
    armor: Number,
    STR: Number,
    CON: Number,
    DEX: Number,
    INT: Number,
    WIS: Number,
    CHA: Number    
}, {
    collection: "characterSheet"
});

var characterSheetModel = mongoose.model('characterSheetModel', characterSheetSchema);
module.exports = function () {
    var api = {
        viewCharacterSheet: viewCharacterSheet,
        getAllCharacters: getAllCharacters,
        getMongooseModel: getMongooseModel
    }

    return api;

    function viewCharacterSheet(charactersName) {
        return characterSheetModel.aggregate([
            {$match: {charactersName: charactersName}}
        ], function(err, docs){
            console.log(docs)
            return docs
        });        
    }

    function getAllCharacters(){
        console.log("MODEL")
        return characterSheetModel.find();
    }

    function getMongooseModel() {
        return characterSheetModel;
    }
}