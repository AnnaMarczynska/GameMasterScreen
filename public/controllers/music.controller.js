(function () {

    angular
        .module("GMS")
        .factory("MusicService", MusicService);

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

        $scope.toggleMusicBrowser = function () {
            $scope.showMusicBrowser = !$scope.showMusicBrowser;
            $scope.showMusicSheet = !$scope.showMusicSheet;
            console.log($scope.chosenSong)
        }
        $scope.browseMusic = function () {
            MusicService
                .browseMusic()
                .then(
                    function (response) {
                        console.log(response)
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
})();