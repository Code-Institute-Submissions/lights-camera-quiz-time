/*jshint esversion: 6 */
let mainObj = {};
const maxQuestions = 5;
let score = 0;
const bonus = 10;
let questionCounter = 0;
const question = document.getElementById("question");
const answers = Array.from(document.querySelectorAll(".option-text"));
const scoreText = document.getElementById("score-text");
const questionCountText = document.getElementById("question-count-text");

// lines 9 - 11 are taken from James Q Quick tutorial, more details in the README file
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];

// functions showScreen and toggleScreen adapted from 4n4ru Guessing Bee game
function showScreen(id) {
    let screens = ['start-screen', 'game-screen', 'end-screen', 'high-scores-screen'];
    for (const screen of screens) {
        toggleScreen(screen, (screen === id));
    }
}

function toggleScreen(id, isActive) {
    document.getElementById(id).style.display = isActive ? 'flex' : 'none';
}

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads
// code to fetch json file adapted from freecodecamp.org and All Things JavaScript YouTube tutorial

document.addEventListener('DOMContentLoaded', function () {
    showScreen('start-screen');
    fetch('./quiz.json')
    .then((response) => response.json())
    .then(function (data) {
        mainObj = data;
    });
    document.getElementById('start-btns').addEventListener('click', function (event) {
        let button = event.target;
        let gameType = button.getAttribute('data-type');
        showScreen('game-screen');
        runGame(gameType);
    });
});

function runGame(gameType) {
    score = 0;
    questionCounter = 0;
    if (gameType === "sci-fi") {
        availableQuestions = mainObj.scifiQuestions;
    } else if (gameType === "fantasy-adventure") {
        availableQuestions = mainObj.fantasyAdventureQuestions;
    } else if (gameType === "comedy") {
        availableQuestions = mainObj.comedyQuestions;
    } else if (gameType === "animation") {
        availableQuestions = mainObj.animationQuestions;
    } else if (gameType === "romance") {
        availableQuestions = mainObj.romanceQuestions;
    } else if (gameType === "thriller-horror") {
        availableQuestions = mainObj.horrorThrillerQuestions;
    }
    displayQuestion();
}

function displayQuestion() {

    if (questionCounter >= maxQuestions || availableQuestions.length === 0) {
        return showScreen('end-screen');
    }

    questionCounter++;

    questionCountText.textContent = `${questionCounter}/${maxQuestions}`;

    // calculate the value of the question index adapted from Brian Design Tutorial

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    // Access the game DOM elements from the game area and display to the user
    // Details on the code used to display the question and 4 options was adapted from James Q Quick Youtube tutorial on building a Quiz App

    question.innerText = currentQuestion.question;
    // console.log(currentQuestion.question);

    // display each of the four options
    answers.forEach(function (option) {
        const number = option.dataset.number;
        option.innerText = currentQuestion["option" + number];
    });

    // remove question used from array
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

// iterate through the users choice
answers.forEach(function (option) {
    option.addEventListener("click", function (event) {
        const userChoice = event.target;
        const userAnswer = userChoice.dataset.number;

        // Checking to see whether the user's answer is correct
        const classToApply = userAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(bonus);
        }

        // Adding green and red backgrounds to the user selected answers
        userChoice.parentElement.classList.add(classToApply);

        // Using the timeout function to remove the background color applied after 500ms
        setTimeout(function () {
            userChoice.parentElement.classList.remove(classToApply);
            displayQuestion();
        }, 500);
    });
});

function incrementScore(num) {
    score += num;
    scoreText.textContent = score;
    finalScore.textContent = score;
}

// javascript code to display the final score to the user and give them the option to save their score
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-score");

const finalScore = document.getElementById("final-score");

// Code to save the high scores
// Using json.parse and json.parse and the method used to save the high scores was adapted from James Q Quick tutorialcredited to the James Q Quick tutorial

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Code to ensure the user cannot click save unless they have entered a username in the form input field

username.addEventListener("keyup", function () {
    saveScoreBtn.disabled = !username.value;
});

// The function that executes when a user clicks the save button

function saveHighScore(event) {
    event.preventDefault();

    const totalScore = {
        score: score,
        name: username.value
    };

    // Add each score and username to the high scores array

    highScores.push(totalScore);

    // Line 596 of code to sort the array of highscores taken from James Q Quick
    highScores.sort((a, b) => b.score - a.score);

    // Code to remove the lowest score
    highScores.splice(5);

    // highscores saved in local storage and accessed from the applications tab

    localStorage.setItem("highScores", JSON.stringify(highScores));

    // code to display the highscores using the map method adapated from James Q Quick tutorial

    const highScoresList = document.getElementById("high-scores-list");
    highScoresList.innerHTML = highScores.map(score => {
        return `<li class="high-scores-list">${score.name} - ${score.score}</li>`;
    }).join("");

    showScreen('high-scores-screen');
}