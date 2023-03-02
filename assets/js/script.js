
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
    if(gameType === "scifi") {
        displayScifiQuestion();
    }
}

function checkAnswer() {

}

function incrementScore() {

}

function displayScifiQuestion() {
    let scifiQuestions = [{question: "Who is Luke Skywalkers' father?", Option1: "Han Solo", Option2: "Lando Calrissian", Option3: "Darth Vader", Option4: "Obi Wan", answer:"3"}]
    let questionBox = document.getElementsByClassName("question-area");
    let answerBox = document.getElementsByClassName("answer-area");
    questionBox.textContent = scifiQuestions[0];
    answerBox.textContent = scifiQuestions[1];
}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}