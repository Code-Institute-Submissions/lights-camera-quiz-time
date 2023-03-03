const maxQuestions = 5;
let score;
let questionCounter;
const question = document.getElementById("question");
const answers = Array.from(document.querySelectorAll(".answer-box"));

// Design of question array adapated from How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial

const scifiQuestions = [{
    question: "Who is Luke Skywalkers' father?",
    option1: "Han Solo",
    option2: "Lando Calrissian",
    option3: "Darth Vader",
    option4: "Obi Wan",
    answer: 2,
}, {
    question: "What year does Marty Mc Fly travel to in Back to the Future?",
    option1: "1985",
    option2: "1965",
    option3: "1885",
    option4: "1955",
    answer: 4,
}, {
    question: "Who plays the character Morpheus in The Matrix?",
    option1: "Laurence Fishburne",
    option2: "Samuel L. Jackson",
    option3: "Cuba Goodting Jr",
    option4: "Will Smith",
    answer: 1,
}, {
    question: "Name the first actor to play Captain James T Kirk?",
    option1: "Chris Pine",
    option2: "Leonard Nimoy",
    option3: "William Shatner",
    option4: "Patrick Stewart",
    answer: 3,
}, {
    question: "What is the name of the ship in Alien>",
    option1: "Tardis",
    option2: "Serenity",
    option3: "Nostromo",
    option4: "Galactica",
    answer: 3,
}]

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let gameType = this.getAttribute("data-type")
            if (gameType === "sci-fi") {
                alert("You have chosen the scifi game")
                runGame(gameType);
            } else {
                alert(`You have chosen ${gameType}`)
            }
        })
    }
})


function runGame(gameType) {
    score = 0;
    questionCounter = 0;
    if (gameType === "sci-fi") {
        displayScifiQuestion();
    }
}
console.log(runGame);

function displayScifiQuestion() {

    questionCounter++;
    let availableQuestions = [...scifiQuestions];

    // calculate the value of the question index adapted from Brian Design Tutorial

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    let currentQuestion = availableQuestions[questionIndex];

    // Access the game DOM elements from the game area and display to the user

    question.innerText = currentQuestion.question;
    console.log(currentQuestion.question);

    console.log(answers);
    answers.forEach(function (option) {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    })
}
console.log(displayScifiQuestion)
function checkAnswer() {

}

function incrementScore() {

}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}