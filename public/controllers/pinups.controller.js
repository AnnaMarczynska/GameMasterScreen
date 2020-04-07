(function () {

    angular
        .module("GMS")
        .factory("PinupsService", PinupsService);

    function PinupsService($http) {
        var api = {
            viewPinups: viewPinups,
            getPinupsList: getPinupsList
        };
        return api;

        function viewPinups(value) {
            return $http.get('/view/pinups/' + value)
        }


        function getPinupsList() {
            return $http.get('/pinups/view')
        }
    }

    angular
        .module("GMS")
        .controller("PinupsCtrl", PinupsCtrl);

    function PinupsCtrl($scope, PinupsService) {
        $scope.showPinupsBrowser = false;
        $scope.showPinupsSheet = true;
        $scope.result = "";
        $scope.pinupsArray = [];
        $scope.chosenPinup = "";

        $scope.togglePinupsBrowser = function () {
            $scope.showPinupsBrowser = !$scope.showPinupsBrowser;
            $scope.showPinupsSheet = !$scope.showPinupsSheet;
            console.log($scope.chosenPinup)
            $scope.displayPinup();
        }

        $scope.getPinupsList = function () {
            PinupsService.getPinupsList()
                .then(
                    function (response) {
                        $scope.pinupsArray = response.data;
                        console.log($scope.pinupsArray);
                    }
                )
        }

        $scope.displayPinup = function () {
            var category = $scope.chosenPinup.value;

            let pinupDivArray = document.getElementsByClassName("pinupDiv");
            console.log(pinupDivArray);

            for (let element of pinupDivArray) {
                if (element.innerHTML === "") {

                    if (category.includes("enemy")) {
                        var newlabel = document.createElement("Label");
                        var newLabelText = "Difficulty: " + $scope.chosenPinup.diff + "<br/>" + " HP: " + $scope.chosenPinup.HP + "<br/>" + " STR: " + $scope.chosenPinup.STR + "<br/>" + " Armor: " + $scope.chosenPinup.Armor;
                        newlabel.innerHTML = newLabelText;
                        newlabel.className = "pinupLabel";
                        element.appendChild(newlabel);
                        break;
                    }
                    else if (category.includes("weapon")) {
                        var newlabel = document.createElement("Label");
                        var newLabelText = "Weapon: " + $scope.chosenPinup.WeaponName + "<br/>" + "Type: " + $scope.chosenPinup.WeaponType + "<br/>" + "DR: " + $scope.chosenPinup.DR + "<br/>" + "DK: " + $scope.chosenPinup.DK;
                        newlabel.innerHTML = newLabelText;
                        newlabel.className = "pinupLabel";
                        category = "";
                        element.appendChild(newlabel);
                        break;
                    }
                    else {
                        var newlabel = document.createElement("Label");
                        var newLabelText = $scope.chosenPinup.NoteText;
                        newlabel.innerHTML = newLabelText;
                        newlabel.className = "pinupLabel";
                        element.appendChild(newlabel);
                        break;
                    }
                }
            }

            return category;
        }
    }
})();