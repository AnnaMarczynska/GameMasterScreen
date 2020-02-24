(function () {

    angular
        .module("GMS")
        .factory("GraphicsService", GraphicsService);

    function GraphicsService($http) {
        var api = {
            viewGraphics: viewGraphics
        };
        return api;

        function viewGraphics() {
            return $http.get('graphics/view')
        }
    }

    angular
        .module("GMS")
        .contoller("GraphicsCtrl", GraphicsCtrl)

    function GraphicsCtrl($scope, GraphicsService) {
        $scope.viewGraphics = function () {
            GraphicsService
                .viewGraphics()
                .then(
                    function (response) {

                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
})();