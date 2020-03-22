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