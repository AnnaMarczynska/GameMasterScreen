(function () {

    angular
        .module("GMS")
        .factory("NamesService", NamesService);

    function NamesService($http) {
        var api = {
            generateName: generateName
        };
        return api;

        function generateName(gender, category) {
            console.log()
            return $http.get('/names/generate/'+gender+'/'+category)
        }
    }

    angular
        .module("GMS")
        .controller("NameCtrl", NameCtrl);

    function NameCtrl($scope, NamesService) {
        $scope.result = ""
        $scope.generateName = function () {
            NamesService
                .generateName($scope.gender, $scope.category)
                .then(
                    function (response) {
                        $scope.result = response.data
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }

})();