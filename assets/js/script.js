const maxQuestions = 5;

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let gameType = this.getAttribute("data-type")
            if (gameType === "sci-fi") {
                alert("You have chosen the scifi game")
                runGame();
            } else [
                alert(`You have chosen ${gameType}`)
            ]
        })
    }
})


function runGame() {
    let score = 0;
    let questionCounter = 0;
    if (gameType === "sci-fi") {
        displayScifiQuestion();
    }
}

function checkAnswer() {

}

function incrementScore() {

}

function displayScifiQuestion() {
    let scifiQuestions = [{
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
    }]
    let question = document.getElementsByClassName("question-area");
    question.textContent = scifiQuestions.question;
    let answers = Array.from(document.querySelectorAll(".answer-box"));
    answers.forEach(function (element, index) {
        element.textContent = scifiQuestions.option[index]
    })
}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}