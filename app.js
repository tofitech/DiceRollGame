/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

 init();
 

//dice = Math.floor(Math.random() * 6) + 1;
                     
                        //type coercion
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#current-0').textContent;
alert('Make Sure the UPPER DICE will not roll 1 and LOWER DICE  will not roll 6, Because you will lose your turn. so LOWER DICE can roll 1 and UPPER DICE can roll 6. To check the Dice Roll for Chrome ctrl+shift+i & for Firefox browser ctrl+shift+k');
alert('For Mobile Devices, Best played Landscape Mode!');
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dices').style.display = 'none';
var x = document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
//test only


document.querySelector('.btn-roll').addEventListener('click', function() {

if(gamePlaying) {
    //1. Random number 
      var dice = Math.floor(Math.random() * 6) + 1;
      //set dice random No.   
      var dices = Math.floor(Math.random() * 6) + 1;
      //var dices = Mathfloor(Math.random() * 6) + 1;
 //2. Display the result
 var diceDOM = document.querySelector('.dice');
 diceDOM.style.display = 'block';
 diceDOM.src = 'dice-' + dice + '.png';

//set dice 2 random No. and add the result to the dice 1 (Coding Challenge);  

var diceDOMS = document.querySelector('.dices');
diceDOMS.style.display = 'block';
diceDOMS.src = 'dices-' + dices + '.png';
 //3. Update the round score IF the rolled number was NOT a 1
 
 if(dice !== 1 && dices !== 6) {
    //Add score
    roundScore+= (dice + dices);
 document.querySelector('#current-' + activePlayer).textContent = roundScore;   
 }else {
    nextPlayer();
 }

}
    //store numbers that has been roll---
console.log(`Upper Dice: ${dice} Lower Dice: ${dices}`);
});
 
//Implementing hold button...

document.querySelector('.btn-hold').addEventListener('click', function() {
     
    if(gamePlaying) {
         //1. Add CURRENT score to GLOBAL score 
        scores[activePlayer]  += roundScore;

    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //Update Set Score. (Coding Challenge)
    let numSet = document.querySelector('#numSet').value;
            let winningScore;
        //Undefined, 0 , null or "" are COERCED to false
        //Anything else is COERCED to true
        if(numSet) {
            winningScore = numSet;
        }else{
            winningScore = 100;
        }

    //Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dices').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else {
        //Next Player
        nextPlayer();
} 
    }

}); //end of line...

//functional ..

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

 document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
 document.querySelector('.dice').style.display = 'none';
 document.querySelector('.dices').style.display = 'none';
};

//btn for new Game
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0; 
    gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dices').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}


//Storage 
/*
const inputKey = document.querySelector('#inputKey');
const inputValue = document.querySelector('#inputValue');
const btn = document.querySelector('#btn-Insert');
let isOutPut = document.querySelector('.isOutPut');

  btn.onclick = function() {
    const key = inputKey.value;
    const value = inputValue.value;

    if(key && value) {

    localStorage.setItem(key , value);
        location.reload();

    }
}; 


for(let i = 0; i < localStorage.length; i ++) {

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    isOutPut.innerHTML += `${key}: ${value}<br/>`;
};
*/



