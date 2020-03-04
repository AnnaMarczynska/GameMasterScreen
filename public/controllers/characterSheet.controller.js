(function () {

    angular
        .module("GMS")
        .factory("CharacterSheetService", CharacterSheetService);

    function CharacterSheetService($http) {
        var api = {
            viewCharacterSheet: viewCharacterSheet,
            getAllCharacters: getAllCharacters
        };
        return api;

        function getAllCharacters(){
            return $http.get('characters/view')
        }

        function viewCharacterSheet(charactersName) {
            console.log()
            return $http.get('/view/characterSheet/'+charactersName)
        }
    }

    angular
        .module("GMS")
        .controller("CharacterSheetCtrl", CharacterSheetCtrl);

    function CharacterSheetCtrl($scope, CharacterSheetService) {
        $scope.showBrowser = false;
        $scope.showSheet = true;
        $scope.result = "";
        $scope.charactersArray = [];
        $scope.chosenCharacter = "";

        $scope.toggleBrowser = function(){
            $scope.showBrowser = !$scope.showBrowser;
            $scope.showSheet = !$scope.showSheet;
        }

        $scope.getAllCharacters = function(){
            CharacterSheetService.getAllCharacters()
            .then(
                function(response){
                    $scope.charactersArray = response.data;
                }
            )
        }
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