const maxQuestions = 1;
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

// Design of question array adapated from How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial

let scifiQuestions = [{
    question: "Who is Luke Skywalker's father?",
    option1: "Han Solo",
    option2: "Lando Calrissian",
    option3: "Darth Vader",
    option4: "Obi-Wan Kenobi",
    answer: 3,
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
    question: "Name the first actor to play Captain James T. Kirk?",
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
    question: "What does Will Smith say to the Alien he first encounters in Independence Day?",
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

let fantasyAdventureQuestions = [{
    question: "How many rings of power were made in The Lord Of The Rings?",
    option1: "20",
    option2: "19",
    option3: "21",
    option4: "1",
    answer: 1,
}, {
    question: "What ingredients were used to make Harry's wand in Harry Potter?",
    option1: "Holly & Phoenix Feather",
    option2: "Oak & Unicorn Hair",
    option3: "Elm & Dragon Heartstring",
    option4: "Elder & Thestral Hair",
    answer: 1,
}, {
    question: "What is the name of the good witch in The Wizard of Oz?",
    option1: "Esmerelda",
    option2: "Glinda",
    option3: "Bella",
    option4: "Elphaba",
    answer: 2,
}, {
    question: "What is the surname of the children in The Chronicles of Narnia",
    option1: "Thompson",
    option2: "Williams",
    option3: "Pevensie",
    option4: "Davies",
    answer: 3,
}, {
    question: "What is the name of Thor's hammmer?",
    option1: "Gleipnir",
    option2: "Gungnir",
    option3: "Draupnir",
    option4: "Mjolnir",
    answer: 4,
}, {
    question: "What is the name of Luck Dragon in The Neverending Story?",
    option1: "Artax",
    option2: "Morla",
    option3: "Falkor",
    option4: "Atreyu",
    answer: 3,
}, {
    question: "What was Miss Honey's father's name in Matilda?",
    option1: "Atticus",
    option2: "Magnus",
    option3: "Artemis",
    option4: "Francis",
    answer: 2,
}, {
    question: "Who plays Willy Wonka in Willy Wonka & The Chocolate Factory?",
    option1: "Mel Brooks",
    option2: "Charles Grodin",
    option3: "Gene Wilder",
    option4: "Richard Pryor",
    answer: 3,
}, {
    question: "How is Mary Poppins described in the movie?",
    option1: "'Perfect, practically in every way'",
    option2: "'Practically, in every way, perfect'",
    option3: "'In every way, practically perfect'",
    option4: "'Practically perfect in every way'",
    answer: 4,
}, {
    question: "How many dwarves are in the party in The Hobbit?",
    option1: "15",
    option2: "9",
    option3: "7",
    option4: "13",
    answer: 4,
}]

let animationQuestions = [{
    question: "What is Belle's fathers' name in Beauty & The Beast?",
    option1: "Gaston",
    option2: "Adam",
    option3: "Maurice",
    option4: "Cogsworth",
    answer: 3,
}, {
    question: "In Aladdin which of these is not a Genie rule?",
    option1: "He cannot bring anyone back from the dead",
    option2: "He cannot make anyone fall in love",
    option3: "He cannot kill anyone",
    option4: "He cannot create new life",
    answer: 4,
}, {
    question: "What is the profession of Kristoff in Frozen?",
    option1: "Hunter",
    option2: "Ice Harvester",
    option3: "Sleigh Rider",
    option4: "Royal Guard",
    answer: 2,
}, {
    question: "What is Timon & Pumbaa's catchphrase in The Lion King?",
    option1: "'It means no worries'",
    option2: "'It's our problem-free philosophy'",
    option3: "'Hakuna Matata'",
    option4: "'Ain't no passing craze'",
    answer: 3,
}, {
    question: "What is the name of Ash's partner Pokemon in Mewtwo Strikes Back?",
    option1: "Charmander",
    option2: "Pikachu",
    option3: "Bulbasaur",
    option4: "Squirtle",
    answer: 2,
}, {
    question: "What is the name of the witch in Tangled?",
    option1: "Gothel",
    option2: "Grimhilde",
    option3: "Tremaine",
    option4: "Maleficient",
    answer: 1,
}, {
    question: "From Snow White, Which is the odd one out?",
    option1: "Grumpy, Dopey",
    option2: "Bashful, Playful",
    option3: "Sneezy, Sleepy",
    option4: "Happy, Doc",
    answer: 2,
}, {
    question: "What is the name of the evil prince in Shrek?",
    option1: "Lord Farkword",
    option2: "Lord Fartward",
    option3: "Lord Farquade",
    option4: "Lord Farquaad",
    answer: 4,
}, {
    question: "What is the name of the kid who owns Buzz and Woody in Toy Story?",
    option1: "Ben",
    option2: "Andy",
    option3: "Sam",
    option4: "Kyle",
    answer: 2,
}, {
    question: "What is the name of the Orphanage in Despicable Me?",
    option1: "Miss Hattie's",
    option2: "Miss Haddie's",
    option3: "Miss Hayley's",
    option4: "Miss Hellie's",
    answer: 1,
}]

let comedyQuestions = [{
    question: "Who plays Dale Doback in Stepbrothers?",
    option1: "Will Ferrell",
    option2: "John C. Reilly",
    option3: "Seth Rogen",
    option4: "Adam Scott",
    answer: 2,
}, {
    question: "What is Bill Murray's profession in Groundhog Day?",
    option1: "Lawyer",
    option2: "Policeman",
    option3: "Weatherman",
    option4: "Accountant",
    answer: 3,
}, {
    question: "Who plays Ron Burgundy's love interest in Anchorman?",
    option1: "Elizabeth Banks",
    option2: "Isla Fisher",
    option3: "Amy Adams",
    option4: "Christina Applegate",
    answer: 4,
}, {
    question: "From the movie Elf which is the odd one out?",
    option1: "Candy canes",
    option2: "Caramel",
    option3: "Candy corns",
    option4: "Syrup",
    answer: 2,
}, {
    question: "Who plays Cher in the 90s cult classic Clueless?",
    option1: "Julia Stiles",
    option2: "Reese Witherspoon",
    option3: "Claire Danes",
    option4: "Alicia Silverstone",
    answer: 4,
}, {
    question: "Which Monty Python movie was released first",
    option1: "The Life of Brian",
    option2: "The Holy Grail",
    option3: "Live at the Hollywood Bowl",
    option4: "The Meaning of Life",
    answer: 2,
}, {
    question: "In what decade was Jim Carrey born?",
    option1: "40s",
    option2: "60s",
    option3: "70s",
    option4: "50s",
    answer: 2,
}, {
    question: "How many Carry On movies were made?",
    option1: "31",
    option2: "22",
    option3: "35",
    option4: "17",
    answer: 1,
}, {
    question: "Which of these Robin Williams movies was released first?",
    option1: "Mrs Doubtfire",
    option2: "Jumanji",
    option3: "Hook",
    option4: "Good Morning, Vietnam",
    answer: 4,
}, {
    question: "In the movie Mean Girls on which day do the 'Plastics' wear pink?",
    option1: "Monday",
    option2: "Tuesday",
    option3: "Wednesday",
    option4: "Thursday",
    answer: 3,
}]

let horrorThrillerQuestions = [{
    question: "Who produced the movie The Grudge?",
    option1: "James Wan",
    option2: "Mike Flanagan",
    option3: "Sam Raimi",
    option4: "George A. Romero",
    answer: 3,
}, {
    question: "How many Screams movies are there?",
    option1: "5",
    option2: "6",
    option3: "7",
    option4: "8",
    answer: 2,
}, {
    question: "What is the name of the demon antagonist in The Conjuring II?",
    option1: "Azazel",
    option2: "Valak",
    option3: "Asmodeus",
    option4: "Beelzebub",
    answer: 2,
}, {
    question: "What is the name of the hospital for the criminally insane in Shutter Island?",
    option1: "Ashecliffe",
    option2: "Stonehearst",
    option3: "Smith's Grove",
    option4: "Claymoore",
    answer: 1,
}, {
    question: "What is Jamie Lee Curtis's character called in Halloween?",
    option1: "Lindsey Wallace",
    option2: "Annie Brackett",
    option3: "Judith Myers",
    option4: "Laurie Strode",
    answer: 4,
}, {
    question: "What is the name of the serial killer Clarice is hunting in The Silence of the Lambs?",
    option1: "Zodiac Killer",
    option2: "Candyman",
    option3: "Buffalo Bill",
    option4: "Black Hood",
    answer: 3,
}, {
    question: "Which of these actors are not in The Sixth Sense?",
    option1: "Abigail Breslin",
    option2: "Toni Collette",
    option3: "Bruce Willis",
    option4: "Mischa Barton",
    answer: 1,
}, {
    question: "Who plays the male lead in Get Out?",
    option1: "Chadwick Boseman",
    option2: "Winston Duke",
    option3: "Daniel Kaluuya",
    option4: "Lil Rey Howery",
    answer: 3,
}, {
    question: "Who directed A Quiet Place Part I & II?",
    option1: "Jon Favreau",
    option2: "John Krasinski",
    option3: "Jodie Foster",
    option4: "Ben Affleck",
    answer: 2,
}, {
    question: "How do the Americans escape from Iran in Argo?",
    option1: "Using American fighter pilots",
    option2: "Crossing the border in an armored truck",
    option3: "Masquerading as actors in a sci-fi movie",
    option4: "Hiding in an underground bunker",
    answer: 3,
}]

let romanceQuestions = [{
    question: "Who wrote 'Dear John', 'The Last Song' & 'The Notebook'?",
    option1: "E. L. James",
    option2: "Julia Quinn",
    option3: "Kasuo Ishiguro",
    option4: "Nikolas Sparks",
    answer: 4,
}, {
    question: "What date did the Titanic set sail from Southampton?",
    option1: "8th April 1912",
    option2: "10th April 1912",
    option3: "12th April 1912",
    option4: "14th April 1912",
    answer: 2,
}, {
    question: "Who plays Hilary Swank's late husband in PS I Love You?",
    option1: "Clive Owen",
    option2: "Jeffrey Dean Morgan",
    option3: "Gerard Butler",
    option4: "Russell Crowe",
    answer: 3,
}, {
    question: "Who plays Hugh Grant's love interest in Love Actually?",
    option1: "Keira Knightley",
    option2: "Laura Linney",
    option3: "Emma Thompson",
    option4: "Martine McCutcheon",
    answer: 4,
}, {
    question: "From the movie Moulin Rouge, which is the odd one out?",
    option1: "'Come What May'",
    option2: "'Children of the Revolution'",
    option3: "'Elephant Love Medley'",
    option4: "'When a Man Loves a Woman'",
    answer: 4,
}, {
    question: "Who plays Katie Scarlet O Hara in Gone With the Wind?",
    option1: "Vivien Leigh",
    option2: "Grace Kelly",
    option3: "Ingrid Bergman",
    option4: "Joan Fontaine",
    answer: 1,
}, {
    question: "In Pride & Prejudice, what is the name of Mr Darcy's estate?",
    option1: "Norland",
    option2: "Rosings",
    option3: "Netherfield Park",
    option4: "Pemberley",
    answer: 4,
}, {
    question: "Who plays Bruce Willis's daughter in Armageddon?",
    option1: "Rachel Mc Adams",
    option2: "Liv Tyler",
    option3: "Kate Beckinsale",
    option4: "Mandy Moore",
    answer: 2,
}, {
    question: "What is the name of the indigenous race in Avatar?",
    option1: "Na'vi",
    option2: "Ewoks",
    option3: "Jawas",
    option4: "Twi'lek",
    answer: 1,
}, {
    question: "In a Knight's Tale what name does William Thatcher use to enter the tournaments?",
    option1: "Sir Adamar",
    option2: "Sir Ulrich",
    option3: "Sir Ector",
    option4: "Sir Colville",
    answer: 2,
}]

// functions showScreen and toggleScreen adapted from 4n4ru Guessing Bee game
function showScreen(id) {
    let screens = ['start-screen', 'game-screen'];
    for (const screen of screens) {
        toggleScreen(screen, (screen === id));
    }
}

function toggleScreen(id, isActive) {
    document.getElementById(id).style.display = isActive ? 'flex' : 'none';
}

// Code adapted from the Love Maths Walkthrough for the function to execute when the DOM loads

document.addEventListener('DOMContentLoaded', function () {
    showScreen('start-screen');
    document.getElementById('start-btns').addEventListener('click', function (event) {
        let button = event.target;
        let gameType = button.getAttribute('data-type');
        showScreen('game-screen');
        runGame(gameType);
})
})

function runGame(gameType) {
    score = 0;
    questionCounter = 0;
    if (gameType === "sci-fi") {
        availableQuestions = [...scifiQuestions];
    } else if(gameType === "fantasy-adventure") {
        availableQuestions = [...fantasyAdventureQuestions]
    } else if (gameType === "comedy") {
        availableQuestions = [...comedyQuestions]
    } else if (gameType === "animation") {
        availableQuestions = [...animationQuestions]
    } else if (gameType === "romance") {
        availableQuestions = [...romanceQuestions]
    } else if (gameType === "thriller-horror") {
        availableQuestions = [...horrorThrillerQuestions]
    }
    displayQuestion();
}

function displayQuestion() {

    if(questionCounter >= maxQuestions || availableQuestions.length === 0) {
        return window.location.assign("high-score.html")
    }

    questionCounter++;

    // calculate the value of the question index adapted from Brian Design Tutorial

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];

    // Access the game DOM elements from the game area and display to the user
    // Details on the code used to display the question and 4 options was adapted from James Q Quick Youtube tutorial on building a Quiz App

    question.innerText = currentQuestion.question;
    // console.log(currentQuestion.question);

    // display each of the four options
    answers.forEach(function (option) {
        const number = option.dataset["number"];
        option.innerText = currentQuestion["option" + number];
    })

    // remove question used from array
    console.log(questionIndex);
    console.log(currentQuestion);
    console.log(availableQuestions);
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);

    acceptingAnswers = true;
};

// iterate through the users choice
    answers.forEach(function (option) {
        option.addEventListener("click", function(event) {
            const userChoice = event.target;
            const userAnswer = userChoice.dataset["number"];
    
            // Checking to see whether the user's answer is correct
            const classToApply = userAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply === "correct") {
                incrementScore(bonus);
            }

            questionCountText.textContent = `${questionCounter + 1}/${maxQuestions}`

            // Adding green and red backgrounds to the user selected answers
            userChoice.parentElement.classList.add(classToApply);
            // Using the timeout function to remove the background color applied after 500ms
            setTimeout( function() {
            userChoice.parentElement.classList.remove(classToApply);
            displayQuestion();
        }, 500);
        })
    })

function incrementScore(num) {
    console.log(num);
    score += num;
    console.log(score);
    scoreText.textContent = score;
    console.log(scoreText);
}