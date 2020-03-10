(function () {

    angular
        .module("GMS")
        .factory("WeaponsService", WeaponsService);

    function WeaponsService($http) {
        var api = {
            viewWeapons: viewWeapons,
            getWeaponsList: getWeaponsList
        };
        return api;

        function getWeaponsList() {
            return $http.get('weapons/view')
        }

        function viewWeapons(name) {
            return $http.get('/view/weapons/' + name)
        }
    }

    angular
        .module("GMS")
        .controller("WeaponsCtrl", WeaponsCtrl);

    function WeaponsCtrl($scope, WeaponsService) {
        $scope.result = ""
        $scope.weaponsArray = [];
        $scope.chosenWeapon;
        /*$scope.viewWeapons = function () {
            WeaponsService
                .viewWeapons($scope.name, $scope.type)
                .then(
                    function (response) {
                        $scope.result = response.data
                    },
                    function (err) {
                        $scope.error = err
                    }
                )
        }*/
        $scope.getWeaponsList = function () {
            WeaponsService.getWeaponsList()
                .then(
                    function (response) {
                        $scope.weaponsArray = response.data;
                    }
                )
        }
    }
})();