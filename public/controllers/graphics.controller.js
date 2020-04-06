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
        $scope.showGraphicsBrowser = false;
        $scope.showGraphicsSheet = true;
        $scope.graphicsArray = [];
        $scope.result = "";
        $scope.chosenGraphic;
        $scope.graphicSource = './graphics/Dolgoldur.jpg'
        $scope.image ="";

        $scope.toggleGraphicsBrowser = function(){
            $scope.showGraphicsBrowser = !$scope.showGraphicsBrowser;
            $scope.showGraphicsSheet = !$scope.showGraphicsSheet;
            console.log($scope.chosenGraphic)
        }

        $scope.selectGraphic = function(){
            $scope.graphicSource = './graphics/'+$scope.chosenGraphic; 
            let image = document.getElementById('images');
            image.src = "./graphics/"+$scope.chosenGraphic;
            $scope.displayGraphic();
            $scope.showGraphicsBrowser = false;
            $scope.showGraphicsSheet = true;
            console.log($scope.chosenGraphic);
            console.log($scope.graphicSource);
        }

        $scope.displayGraphic = function(image){
            window.open($scope.graphicSource);
            image.load();
        }

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