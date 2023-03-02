
let scifi = document.getElementById("sci-fi");
let score = document.getElementsByClassName("score");
let question = document.getElementsByClassName("question-area");
let answers = document.getElementsByClassName("answer-area");
let timer = document.getElementsByClassName("timer");

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for(let button of buttons) {
        button.addEventListener("click", function() {
            let gameType = this.getAttribute("data-type")
            if(gameType === "sci-fi") {
                alert("You have chosen the scifi game")
            } else [
                alert(`You have chosen ${gameType}`)
            ]
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}

function displayScifiQuestion() {

}

function displayComedyQuestion() {

}

function displayFantasyAdventureQuestion() {

}