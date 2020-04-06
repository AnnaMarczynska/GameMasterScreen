(function () {

    angular
        .module("GMS")
        .factory("sessionPlanService", sessionPlanService);

    function sessionPlanService($http) {
        var api = {
            viewSessionPlan: viewSessionPlan,
            getAllSessionPlans: getAllSessionPlans
        };
        return api;

        function viewSessionPlan(title) {
            return $http.get('view/sessionPlan' + title)
        }

        function getAllSessionPlans() {
            return $http.get('sessionPlan/view')
        }
    }

    angular
        .module("GMS")
        .controller('sessionPlanCtrl', sessionPlanCtrl);

    function sessionPlanCtrl($scope, sessionPlanService) {
        $scope.showSessionPlanBrowser = false;
        $scope.showSessionPlanSheet = true;
        $scope.result = "";
        $scope.sessionPlansArray = [];
        $scope.chosenPlan;

        $scope.toggleSessionPlanBrowser = function () {
            $scope.showSessionPlanBrowser = !$scope.showSessionPlanBrowser;
            $scope.showSessionPlanSheet = !$scope.showSessionPlanSheet;
            console.log($scope.chosenPlan)
        }

        $scope.getAllSessionPlans = function () {
            sessionPlanService.getAllSessionPlans()
                .then(
                    function (response) {
                        $scope.sessionPlansArray = response.data;
                    }
                )
        }
    }
})();