var mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
    title: String,
    notes: String,
    date: String
}, {
    collation: "notes"
});

var notesModel = mongoose.model('notesModel', notesSchema);
module.exports = function () {

    var api = {
        viewNotes: viewNotes,
        getMongooseModel: getMongooseModel
    }
    return api;

    function viewNotes() {
        notesModel.find();
    }

    function getMongooseModel(){
        return notesModel;
    }
}