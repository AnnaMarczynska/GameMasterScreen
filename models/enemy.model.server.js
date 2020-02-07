module.exports = function() {

    var api = {
        //create service's interface
        generateEnemy: generateEnemy
    }

    return api;

function generateEnemy(level){
    
        var hp, str, armor;
      
        var enemy = {};

        if(level != null){
          if(level == 'easy'){
            hp = 4;
            str = Math.round((Math.random() * (3-1))) + 1;
            armor = Math.round((Math.random() * (3-1))) + 1;
          }
          else if(level == 'medium'){
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
        enemy.hp = hp;
        enemy.str = str;
        enemy.armor = armor;

        console.log(hp);
        console.log(enemy);
        return enemy;
      }    
}


