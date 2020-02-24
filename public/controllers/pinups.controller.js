(function(){

    angular
        .module("GMS")
        .factory("PinupsService", PinupsService);

    function PinupsService($http){
        var api = {
            viewPinups: viewPinups
        };
        return api;

        function viewPinups(){
            console.log()
            return $http.get('/pinups/view')
        }
    }

    angular 
        .module("GMS")
        .controller("PinupsCtrl", PinupsCtrl);

    function PinupsCtrl($scope, PinupsService){
        $scope.viewPinups = function(){
            PinupsService
                .viewPinups()
                .then(
                    function(response){

                    },
                    function(err){
                        $scope.error = err;
                    }
                )
        }
    }

})();