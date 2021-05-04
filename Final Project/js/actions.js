'use strict'

//  Benjamin Weber
//  weberbj
//  project 2: Fancy Number Guessing Game

//  To change the size of the play area insert desired parameter into size variable below
let size = 100

// Create Secret Number
let secretNumber = Math.floor(Math.random() * size) + 1;

// Check secret number is created
console.log(secretNumber);

// Create array for buttons
let array = function (size) {
    let a = [1];
    let b = 1;
    while (b < size) {
        a.push(b += 1);
    }
    return a;
};
// Check that array is being created properly sized
//console.log(array());


// Create buttons 
function createButtons(array) {


    document.querySelector('#play-again').hidden = true;

    let playArea = "";

    for (let i of array) {
        playArea += `<div class="button" id="${i}">${i}</div>\n`;
    }

    document.querySelector('#buttons').insertAdjacentHTML('afterbegin', playArea);
    //console.log(playArea);

    document.querySelectorAll(".button").forEach(i => {
        i.addEventListener("click", playGame);
    })
}
// Global Variables to mark the current choice and the number of attempts
let currentChoice = [];
let tries = 1;

// Functions that change the color of buttons once selected
function showCorrectColor(choice) {
    choice.style.backgroundColor = 'gold';
}
function showTooHigh(choice) {
    choice.style.backgroundColor = 'purple';
}

function showTooLow(choice) {
    choice.style.backgroundColor = 'green';
}

// Play Game
function playGame(event) {
    currentChoice = parseInt(event.target.id);
    let selection = event.target;
    //console.log(event, currentChoice, selection);

    if (currentChoice === secretNumber) {
        document.querySelector('.resultArea').textContent = `You guessed the secret number ${currentChoice} in ${tries} attempts!`
        document.querySelector('#play-again').hidden = false
        showCorrectColor(selection);
        //console.log(tries);

    } else if (currentChoice > secretNumber) {
        document.querySelector('.resultArea').textContent = `You guessed too High! \nTry Again`;
        tries += 1
        showTooHigh(selection);
        setTimeout(function () {
            document.querySelector('.resultArea').textContent = ''
        }, 750);
        //console.log(tries);

    } else if (currentChoice < secretNumber) {
        document.querySelector('.resultArea').textContent = `You guessed too Low! \nTry Again`;
        tries += 1
        showTooLow(selection);
        setTimeout(function () {
            document.querySelector('.resultArea').textContent = ''
        }, 750);
        //console.log(tries);
    }
}

// Play Again section
function playAgain() {
    // Reset fields and hide button
    document.querySelector('#play-again').hidden = true;
    document.querySelector('#buttons').innerHTML = '';
    document.querySelector('.resultArea').textContent = '';

    tries = 1;
    // Reinstantiate play area
    secretNumber = Math.floor(Math.random() * size) + 1;
    console.log(secretNumber);

    createButtons(array(size));
    document.querySelectorAll('.button').forEach(i => {
        i.addEventListener('click', playGame);
    });
}

document.querySelector('#play-again').addEventListener('click', playAgain);

// Create Interface
playAgain();