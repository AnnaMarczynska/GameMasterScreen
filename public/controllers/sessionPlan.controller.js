(function(){

    angular
        .module("GMS")
        .factory("sessionPlanService", sessionPlanService);

    function sessionPlanService($http){
        var api = {
            viewSessionPlan: viewSessionPlan
        };
        return api;

        function viewSessionPlan(){
            return $http.get('view/sessionPlan')
        }
    }

    angular
        .module("GMS")
        .controller('sessionPlanCtrl', sessionPlanCtrl);

    function sessionPlanCtrl($scope, sessionPlanService){
        $scope.viewSessionPlan = function(){
            sessionPlanService
                .viewSessionPlan()
                .then(
                    function(respone){

                    },
                    function(err){
                        $scope.error = err;
                    }
                )
        }
    }
})();