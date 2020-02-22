(function () {

    angular
        .module("GMS")
        .factory("CharacterSheetService", CharacterSheetService);

    function CharacterSheetService($http) {
        var api = {
            viewCharacterSheet: viewCharacterSheet
        };
        return api;

        function viewCharacterSheet() {
            return $http.get('/view/characterSheet')
        }
    }

    angular
        .module("GMS")
        .controller("CharacterSheetCtrl", CharacterSheetCtrl);

    function CharacterSheetCtrl($scope, CharacterSheetService) {
        $scope.viewCharacterSheet = function () {
            CharacterSheetService
                .viewCharacterSheet()
                .then(
                    function (response) {

                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
})();