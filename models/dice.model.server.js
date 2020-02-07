module.exports = function () {

    var api = {
        rollDice: rollDice
    }

    return api;

    function rollDice(DT, DR, DK) {
        {
            var rollsArray = [];

            if (DT != null && DR != null && DK != null) {
                for (var i = 0; i < DR; i++) {
                    var min = 1;
                    var max = DT;
                    var number = Math.random() * (max - min);
                    rollsArray.push(Math.round(number) + 1);
                }
            }

            function rollsArraySorted(a, b) {
                return b - a;
            }
            rollsArray.sort(rollsArraySorted);

            var sume = 0;

            for (var j = 0; j < DK; j++) {
                sume = sume + rollsArray[j];
            }
            return sume;
        }
    }

}
