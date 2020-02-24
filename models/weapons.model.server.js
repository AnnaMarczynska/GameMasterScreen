var mongoose = require('mongoose');

module.exports = function(){

    var weaponsSchema = new mongoose.Schema({
        name: String, 
        type: String,
        DR: Number,
        DK: Number
    }, {
        collection: "weapons"
    });

    var weaponsModel = mongoose.model('weaponsModel', weaponsSchema);

    var api = {
        viewWeapons: viewWeapons,
        getWeaponsModel: getWeaponsModel
    }
    return api;

    function viewWeapons(name, type, DR, DK){
        return weaponsModel.aggregate([
            {$match: {name: name/*, type: type, DR: DR, DK: DK*/}},
            {$out: name},
            {$sort: 1}

        ], function(err, docs){
            console.log(docs)
            return docs
        });
    }

    function getWeaponsModel(){
        return weaponsModel;
    }

}