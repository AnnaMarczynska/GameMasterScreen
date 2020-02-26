(function () {

    angular
        .module("GMS")
        .factory("CharacterSheetService", CharacterSheetService);

    function CharacterSheetService($http) {
        var api = {
            viewCharacterSheet: viewCharacterSheet
        };
        return api;

        function viewCharacterSheet(charactersName) {
            console.log()
            return $http.get('/view/characterSheet/'+charactersName)
        }
    }

    angular
        .module("GMS")
        .controller("CharacterSheetCtrl", CharacterSheetCtrl);

    function CharacterSheetCtrl($scope, CharacterSheetService) {
        $scope.result = ""
        $scope.viewCharacterSheet = function () {
            CharacterSheetService
                .viewCharacterSheet(
                    $scope.charactersName, $scope.playersName, $scope.proffesion, $scope.age,
                    $scope.advantages, $scope.disadvantages, $scope.notes, $scope.HP, $scope.armor,
                    $scope.STR, $scope.CON, $scope.DEX, $scope.INT, $scope.WIS, $scope.CHA)
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