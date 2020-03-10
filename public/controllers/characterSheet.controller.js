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
        $scope.chosenCharacter;

        $scope.toggleBrowser = function(){
            $scope.showBrowser = !$scope.showBrowser;
            $scope.showSheet = !$scope.showSheet;
            console.log($scope.chosenCharacter)
        }

        $scope.getAllCharacters = function(){
            CharacterSheetService.getAllCharacters()
            .then(
                function(response){
                    $scope.charactersArray = response.data;
                }
            )
        }
    }
})();