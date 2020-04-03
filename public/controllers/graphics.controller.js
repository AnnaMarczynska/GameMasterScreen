(function () {

    angular
        .module("GMS")
        .factory("GraphicsService", GraphicsService);

    angular.module('GMS')
        .filter('trustUrl', function ($sce) {
            return function (url) {
                return $sce.trustAsResourceUrl(url);
            };
        });

    function GraphicsService($http) {
        var api = {
            getAllGraphics: getAllGraphics
        };
        return api;

        function getAllGraphics() {
            return $http.get('/graphics/view')
        }
    }

    angular
        .module("GMS")
        .controller("GraphicsCtrl", GraphicsCtrl)

    function GraphicsCtrl($scope, GraphicsService) {
        $scope.graphicsArray = [];
        $scope.result = "";
        $scope.chosenGraphic;

        /*$scope.viewGraphics = function () {
            GraphicsService
                .viewGraphics()
                .then(
                    function (response) {

                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }*/

        $scope.getAllGraphics = function () {
            GraphicsService
                .getAllGraphics()
                .then(
                    function (response) {
                        $scope.graphicsArray = response.data;
                        console.log(response.data);
                    }
                )
        }
    }
})();