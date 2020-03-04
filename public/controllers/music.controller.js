(function () {

    angular
        .module("GMS")
        .factory("MusicService", MusicService);

    function MusicService($http) {
        var api = {
            playMusic: playMusic
        };
        return api;

        function playMusic() {
            console.log("La La Laaa!")
            return $http.get('/play/music')
        }
    }

    angular
        .module("GMS")
        .controller("MusicCtrl", MusicCtrl);

    function MusicCtrl($scope, DiceService) {
        $scope.playMusic = function () {
            MusicService
                .playMusic()
                .then(
                    function (response) {
                        /// nie wiem
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
})();