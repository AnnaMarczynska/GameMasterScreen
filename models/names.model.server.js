var mongoose = require('mongoose');


module.exports = function () {

    var namesSchema = new mongoose.Schema({
        category: String,
        gender: String,
        value: String
    }, {
        collection: "names"
    });

    var namesModel = mongoose.model('namesModel', namesSchema);

    var api = {
        generateName: generateName,
        getNamesModel: getNamesModel
    }
    return api;

    function generateName(gender, category) {
        return namesModel.aggregate([
            { $match: {gender: gender, category: category}},
            { $sample: {size: 1}}
        
        ],function(err, docs){
                console.log(docs)
                return docs
            });
    }

    function getNamesModel(){
        return namesModel;
    }
}

