(function () {

    angular
        .module("GMS")
        .factory("MusicService", MusicService);

    angular.module('GMS')
        .filter('trustUrl', function ($sce) {
            return function (url) {
                return $sce.trustAsResourceUrl(url);
            };
        });

    function MusicService($http) {
        var api = {
            browseMusic: browseMusic
        };
        return api;

        function browseMusic() {
            return $http.get('/music/browse')
        }
    }

    angular
        .module("GMS")
        .controller("MusicCtrl", MusicCtrl);

    function MusicCtrl($scope, MusicService) {
        $scope.showMusicBrowser = false;
        $scope.showMusicSheet = true;
        $scope.result = "";
        $scope.songsArray = [];
        $scope.chosenSong;
        $scope.songSource = './music/Assassin.mp3';

        $scope.toggleMusicBrowser = function () {
            $scope.showMusicBrowser = !$scope.showMusicBrowser;
            $scope.showMusicSheet = !$scope.showMusicSheet;
            console.log($scope.chosenSong)
        }

        $scope.selectSong = function(){
            $scope.songSource = './music/'+$scope.chosenSong; 
            $scope.showMusicBrowser = false;
            $scope.showMusicSheet = true;
            console.log($scope.chosenSong);
            console.log($scope.songSource);
        }

        $scope.browseMusic = function () {
            MusicService
                .browseMusic()
                .then(
                    function (response) {
                        $scope.songsArray = response.data;
                        console.log(response.data);
                    }
                )
        }
    }
})();