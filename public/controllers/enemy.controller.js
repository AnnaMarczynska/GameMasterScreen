(function () {

    //interface
    angular
        .module("GMS")
        .factory("EnemyService", EnemyService);

    function EnemyService($http) {
        var api = {
            generateEnemy: generateEnemy
        };
        return api;

        function generateEnemy(level) {
            console.log(level)
            return $http.get('/enemy/generate/' + level)
        }
    }

    //connecting interface to view
    angular
        .module("GMS")
        .controller("EnemyCtrl", EnemyCtrl);

    function EnemyCtrl($scope, EnemyService) {
        $scope.generateEnemy = function () {
            EnemyService
                .generateEnemy($scope.level)
                .then(
                    function (response) {
                        $scope.hp = response.data.hp;
                        $scope.str = response.data.str;
                        $scope.armor = response.data.armor;
                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
}
)();