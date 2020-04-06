(function () {

    angular
        .module("GMS")
        .factory("PinupsService", PinupsService);

    function PinupsService($http) {
        var api = {
            viewPinups: viewPinups,
            getPinupsList: getPinupsList
        };
        return api;

        function viewPinups(value) {
            return $http.get('view/pinups' + value)
        }


        function getPinupsList() {
            return $http.get('pinups/view')
        }
    }

    angular
        .module("GMS")
        .controller("PinupsCtrl", PinupsCtrl);

    function PinupsCtrl($scope, PinupsService) {
        $scope.showPinupsBrowser = false;
        $scope.showPinupsSheet = true;
        $scope.result = "";
        $scope.pinupsArray = [];
        $scope.chosenPinup;

        $scope.togglePinupsBrowser = function () {
            $scope.showPinupsBrowser = !$scope.showPinupsBrowser;
            $scope.showPinupsSheet = !$scope.showPinupsSheet;
            console.log($scope.chosenPinup)
        }

        $scope.getPinupsList = function () {
            PinupsService.getPinupsList()
                .then(
                    function (response) {
                        $scope.pinupsArray = response.data;
                    }
                )
        }
    }

})();