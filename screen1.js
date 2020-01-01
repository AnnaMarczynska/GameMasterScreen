document.getElementById("rollButton").addEventListener("click", generateRollScore);
function generateRollScore(){

var DT = parseInt(document.getElementById("DT").value);
var DR = parseInt(document.getElementById("DR").value);
var DK = parseInt(document.getElementById("DK").value);
var rollsArray = [];

if((DT != null) && (DR != null) && (DK != null))
{
for(var i =0; i<DR; i++)
  {
  var min = 1;
  var max = DT;
  var number = Math.random() * (max-min);
  rollsArray.push(Math.round(number) + 1);
  }
}

function rollsArraySorted(a,b)
{
  return b-a;
}
rollsArray.sort(rollsArraySorted);
console.log(rollsArray);

var sume = 0;
var Score = 0;
for(var j = 0; j<DK; j++)
{
  sume = sume + rollsArray[j];
}

var score = document.getElementById("Score");
score.value = sume;
}


document.getElementById("enemyGenerateButton").addEventListener("click", generateRandomEnemy);
function generateRandomEnemy(){
  var enemyLevel = (document.getElementById("Level").value

    if(enemyLevel == 'easy'){
      document.getElementById("HP").value = (Math.random() * (5-2) +1);
      document.getElementById("STR").value = (Math.random() * (3-1) +1);
      document.getElementById("aRMOR").value = (Math.random() * (3-0) +1);
    }
    }
