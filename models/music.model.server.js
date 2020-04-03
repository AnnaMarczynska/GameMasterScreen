var fs = require('fs');
const path = require('path');

module.exports = function (){

    var api = {
        browseMusic: browseMusic
    }

    return api;

    function browseMusic(){
        const musicFolder = './public/music/';
        const songs = []

        fs.readdirSync(musicFolder).forEach(file => {
            console.log(file);
            songs.push(file);
          });

        return songs;
    }
}