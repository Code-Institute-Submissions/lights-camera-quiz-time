
let scifi = document.getElementById("sci-fi");
let score = document.getElementsByClassName("score");
let timer = document.getElementsByClassName("timer");

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
        button.addEventListener("click", function() {
            let gameType = this.getAttribute("data-type")
            if(gameType === "sci-fi") {
                alert("You have chosen the scifi game")
                runGame();
            } else [
                alert(`You have chosen ${gameType}`)
            ]
        })
    }
})


function runGame() {
    if(gameType === "sci-fi") {
        displayScifiQuestion();
    }
}

function checkAnswer() {

}

function incrementScore() {

}

function displayScifiQuestion() {
    let scifiQuestions = [{question: "Who is Luke Skywalkers' father?", options: ["Han Solo", "Lando Calrissian", "Darth Vader", "Obi Wan"], answer:2}]
    let questionBox = document.getElementsByClassName("question-area");
    questionBox.textContent = scifiQuestions.question;
    let answerBox = document.querySelectorAll(".answer-box");
    answerBox.forEach(function(element, index) {
        element.textContent = scifiQuestions.options[index]
    })
}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}