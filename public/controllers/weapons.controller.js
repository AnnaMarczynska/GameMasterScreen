(function(){

    angular
        .module("GMS")
        .factory("weaponsService", WeaponsService);

    function WeaponsService($http){
        var api = {
            viewWeapons: viewWeapons
        };
        return api;

        function viewWeapons(name, type){
            console.log()
            return $http.get('/weapons/view/'+name+'/'+type)
        }
    }

    angular
        .module("GMS")
        .controller("WeaponsCtrl", WeaponsCtrl);

    function WeaponsCtrl($scope, WeaponsService){
        $scope.result = ""
        $scope.viewWeapons = function(){
            WeaponsService
                .viewWeapons($scope.name, $scope.type)
                .then(
                    function(response){
                        $scope.result = response.data
                    },
                    function (err){
                        $scope.error = err
                    }
                )
        }
    }

})();