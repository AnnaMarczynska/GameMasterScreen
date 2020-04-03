var fs = require('fs');
const path = require('path');

module.exports = function () {

    var api = {
        getAllGraphics: getAllGraphics
    }
    return api;

    function getAllGraphics() {
        const graphicsFolder = './public/graphics/';
        const pictures = []

        fs.readdirSync(graphicsFolder).forEach(file => {
            console.log(file);
            pictures.push(file);
        });

        return pictures;
    }

}