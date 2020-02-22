(function () {

    angular
        .module("GMS")
        .factory("NameService", EnemyService);

    function NameService($http) {
        var api = {
            generateName: generateName
        };
        return api;

        function generateName() {
            console.log()
            return $http.get('/name/generate')
        }
    }

    angular
        .module("GMS")
        .controller("NameCtrl", NameCtrl);

    function NameCtrl($scope, NameService) {
        $scope.generateName = function () {
            NameService
                .generateName()
                .then(
                    function (response) {
                        //coś
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }

})();