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
  var hp, str, armor;

  if(Level != null){
    if(document.getElementById('Level').value == 'easy'){
      hp = 4;
      str = Math.round((Math.random() * (3-1))) + 1;
      armor = Math.round((Math.random() * (3-1))) + 1;
    }
    else if(document.getElementById('Level').value == 'medium'){
      hp = 6;
      str = Math.round((Math.random() * (4-1))) + 2;
      armor = Math.round((Math.random() * (4-1))) + 2;
    }
    else{
      hp = 8;
      str = Math.round((Math.random() * (5-1))) + 3;
      armor = Math.round((Math.random() * (5-1))) + 4;
    }
  }
  document.getElementById('HP').value = hp;
  document.getElementById('STR').value = str;
  document.getElementById('Armor').value = armor;
}
