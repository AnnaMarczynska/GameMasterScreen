var mongoose = require('mongoose');

var notesSchema = new mongoose.Schema({
    title: String,
    notes: String,
    date: String
}, {
    collection: "notes"
});

var notesModel = mongoose.model('notesModel', notesSchema);
module.exports = function () {

    var api = {
        viewNotes: viewNotes,
        getAllNotes: getAllNotes,
        getMongooseModel: getMongooseModel
    }
    return api;

    function viewNotes(title) {
        return notesModel.aggregate([
            { $match: { title: title } }
        ], function (err, docs) {
            return docs
        });
    }

    function getAllNotes() {
        return notesModel.find();
    }

    function getMongooseModel() {
        return notesModel;
    }
}