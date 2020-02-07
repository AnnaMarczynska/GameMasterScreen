(function () {

    angular
        .module("GMS")
        .factory("DiceService", DiceService);

    function DiceService($http) {
        var api = {
            rollDice: rollDice
        };
        return api;

        function rollDice(dt, dr, dk) {
            console.log(dt, dr, dk)
            return $http.get('/dice/roll/'+dt+'/'+dr+'/'+dk)
        }
    }


    angular
        .module("GMS")
        .controller("DiceCtrl", DiceCtrl);

    function DiceCtrl($scope, DiceService) {
        $scope.rollDice = function() {
            DiceService
                .rollDice($scope.dt, $scope.dr, $scope.dk)
                .then(
                    function (response) {
                        $scope.result = response.data;
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
})();