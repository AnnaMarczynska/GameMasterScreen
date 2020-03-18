(function () {

    angular
        .module("GMS")
        .factory("NotesService", NotesService);

    function NotesService($http) {
        var api = {
            viewNotes: viewNotes,
            getAllNotes: getAllNotes
        };
        return api;

        function getAllNotes(){
            return $http.get('notes/view')
        }

        function viewNotes(title) {
            return $http.get('/view/notes/'+title)
        }
    }

    angular
        .module("GMS")
        .controller("NotesCtrl", NotesCtrl);

    function NotesCtrl($scope, NotesService) {
        $scope.showNotesBrowser = false;
        $scope.showNotesSheet = true;
        $scope.result = "";
        $scope.notesArray = [];
        $scope.chosenNote;

        $scope.toggleNotesBrowser = function(){
            $scope.showNotesBrowser = !$scope.showNotesBrowser;
            $scope.showNotesSheet = !$scope.showNotesSheet;
            console.log($scope.chosenNote)
        }

        $scope.getAllNotes = function(){
            NotesService.getAllNotes()
            .then(
                function(response){
                    $scope.notesArray = response.data;
                }
            )
        }
    }
})();