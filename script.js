'use strict';


// document.querySelector('.message').textContent;

// // set content of element
// document.querySelector('.message').textContent = 'Correct Number! ';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
//Again button function
//reassigns message, score, guess, number input field
document.querySelector('.again').addEventListener('click', function(){
    

    score = 20;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
})
 
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
//NO INPUT
    if(!guess) {
        document.querySelector('.message').textContent = '❌No Number!';
//WHEN PLAYER WINS
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct!🏆';
        
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
//Guess too high
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High!';
        if( score > 0){
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game !';
        }
    } else if (guess < secretNumber) {
//GUess too low
        document.querySelector('.message').textContent = 'Too low!';
        if( score > 0){
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game !';
        }
    }

})


