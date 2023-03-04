const maxQuestions = 5;
let score;
let questionCounter;
const question = document.getElementById("question");
const answers = Array.from(document.querySelectorAll(".option-text"));
console.log(answers);

// lines 9 - 11 are taken from James Q Quick tutorial, more details in the README file
let currentQuestion = {};
let acceptingAnswers = false;
let availableQuestions = [];

// Design of question array adapated from How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial

const scifiQuestions = [{
    question: "Who is Luke Skywalkers' father?",
    option1: "Han Solo",
    option2: "Lando Calrissian",
    option3: "Darth Vader",
    option4: "Obi-Wan Kenobi",
    answer: 2,
}, {
    question: "What year does Marty McFly travel to in Back to the Future?",
    option1: "1985",
    option2: "2015",
    option3: "1885",
    option4: "1955",
    answer: 4,
}, {
    question: "Who plays the character Morpheus in The Matrix?",
    option1: "Laurence Fishburne",
    option2: "Samuel L. Jackson",
    option3: "Cuba Gooding Jr",
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
    question: "What is the name of the ship in Alien?",
    option1: "Tardis",
    option2: "Serenity",
    option3: "Nostromo",
    option4: "Galactica",
    answer: 3,
}, {
    question: "What is the model of terminator in The Terminator?",
    option1: "T-800",
    option2: "T-101",
    option3: "T-1000",
    option4: "T-805",
    answer: 1,
}, {
    question: "What does Will Smith say to the Alien he first encounters?",
    option1: "'Them chicken legs bucaw'",
    option2: "'We need to work on our communication'",
    option3: "'Welcome to Earth'",
    option4: "'I could have been at a barbecue'",
    answer: 3,
}, {
    question: "Who plays Winston Zeddemore in Ghostbusters?",
    option1: "Bill Murray",
    option2: "Harold Ramis",
    option3: "Dan Aykroyd",
    option4: "Ernie Hudson",
    answer: 4,
}, {
    question: "What major landmark appears in The Planet of the Apes?",
    option1: "The Eiffel Tower",
    option2: "The Statue of Liberty",
    option3: "The Taj Mahal",
    option4: "The Big Ben",
    answer: 2,
}, {
    question: "What is the name of the company who designs RoboCop?",
    option1: "Cyberdyne",
    option2: "Blue Sun",
    option3: "Omni Consumers Products",
    option4: "Weyland-Yutani",
    answer: 3,
}]

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");
//     for (let button of buttons) {
//         button.addEventListener("click", function () {
//             let gameType = this.getAttribute("data-type")
//             if (gameType === "sci-fi") {
//                 alert("You have chosen the scifi game")
//                 runGame(gameType);
//             } else {
//                 alert(`You have chosen ${gameType}`)
//             }
//         })
//     }
// })


function runGame() {
    score = 0;
    questionCounter = 0;
    availableQuestions = [...scifiQuestions];
    displayScifiQuestion();
    // if (gameType === "sci-fi") {
    //     availableQuestions = [...scifiQuestions];
    //     displayScifiQuestion();
    // }
}
console.log(runGame);
runGame();

function displayScifiQuestion() {

    if(questionCounter >= maxQuestions || availableQuestions.length === 0) {
        return window.location.assign("index.html")
    }

    questionCounter++;
    // availableQuestions = [...scifiQuestions];

    // calculate the value of the question index adapted from Brian Design Tutorial

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    // Access the game DOM elements from the game area and display to the user
    // Details on the code used to display the question and 4 options was adapted from James Q Quick Youtube tutorial on building a Quiz App

    question.innerText = currentQuestion.question;
    console.log(currentQuestion.question);

    answers.forEach(function (option) {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    })

    availableQuestions.splice[questionIndex, 1];
    acceptingAnswers = true;
}

answers.forEach(function (option) {
    option.addEventListener("click", function(event) {
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        // Checking to see whether the user's selected answer is correct
        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        displayScifiQuestion();
    })
})

console.log(displayScifiQuestion)

function checkAnswer() {

}

function incrementScore() {

}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}