(function () {

    angular
        .module("GMS")
        .factory("NotesService", NotesService);

    function NotesService($http) {
        var api = {
            viewNotes: viewNotes
        };
        return api;

        function viewNotes() {
            return $http.get('/view/notes')
        }
    }

    angular
        .module("GMS")
        .controller("NotesCtrl", NotesCtrl);

    function NotesCtrl($scope, NotesService) {
        $scope.viewNotes = function () {
            NotesService
                .viewNotes()
                .then(
                    function (response) {

                    },
                    function (err) {
                        $scope.error = err;
                    }
                )
        }
    }
}
)();