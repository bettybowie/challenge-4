// Declare variables
var startPg = document.querySelector(".start-page");
var startBtn = document.querySelector("startBtn");
var timerElement = document.querySelector(".timer");
var questions = [
    {question: "Inside which HTML element do we put the JavaScript?", 
    choices:["<scripting>", "<javascript>", "<js>", "<script>"], 
    correctAnswer:"<script>"},
    {question: "Where is the correct place to insert a JavaScript?", 
    choices:["The <body> section", "The <head> section", "The <footer> section", "Both the <head> section and the <body> section are correct"], 
    correctAnswer:"Both the <head> section and the <body> section are correct"},
    {question: "How do you create a function in JavaScript?", 
    choices:["function myFunction()", "function:myFunction()", "function = myFunction()", "function.myFunction()"], 
    correctAnswer:"function myFunction()"},
    {question: "How do you call a function named 'myFunction'?", 
    choices:["myFunction()", "call myFunction()", "myFunction", "call function myFunction()"], 
    correctAnswer:"myFuntion()"},
    {question: "How does a WHILE loop start?", 
    choices:["while(i <= 10; i++)", "while(i <= 10)", "while i = 1 to 10", "while(i)"], 
    correctAnswer:"while(i <= 10)"},
    {question: "How can you add a comment in a JavaScript?", 
    choices:["//This is a comment", "<!--This is a comment-->", "'This is a comment", "*This is a comment"], 
    correctAnswer:"//This is a comment"},
    {question: "Which event occurs when the user clicks on an HTML element?", 
    choices:["onchange", "onmouseclick", "onmouseover", "onclick"], 
    correctAnswer:"onclick"},
    {question: "Which operator is used to assign a value to a variable?", 
    choices:["*", "X", "-", "="], 
    correctAnswer:"="},
    {question: "What will the following code return: Boolean(10 > 9)", 
    choices:["NaN", "1", "True", "False"], 
    correctAnswer:"True"},
    {question: "How to write an IF statement in JavaScript?", 
    choices:["if(i==5)", "if i=5 then", "if i==5 then", "if i=5"], 
    correctAnswer:"if(i==5)"},
];
var answerBtn = document.querySelector(".answer-choices");
var questionIs = document.querySelector(".questionIs");
var questionPg = document.querySelector(".question-page");
var resultPg = document.querySelector(".result-page");
var finalScoreElement = document.querySelector(".finalScore");
var initialInput = document.getElementById("initials");
var initialSubmitBtn = document.querySelector("initialSubmit");
var highscorePg = document.querySelector("highscore-page");
var highscoreBoard = document.querySelector("highscoreBoard");
var highscoreItem = document.querySelector("highscoreItem");
var returnBtn = document.querySelector("return-page");
var clearBtn = document.querySelector("clear-score");



// function to display the  questions
function nextQuestion() {
    var questionIndex = -1;
    questionPg.innerHTML = '';
    ++questionIndex;
    questionIs.write(questions[questionIndex].question + "<br/>");

    for ( var i = 0; i < questions[questionIndex].choices.length; i++) {
        answerBtn.write(questions[questionIndex].choices[i] + "<br/>");
    };

    
}

// start quiz button to start the challenge



introPage()

// function to start and stop the timer
function startTimer() {
    var timeLeft = 80;

    var timer = setInterval(function() {
        if (timeLeft > 1) {
            timerElement.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerElement.textContent = '';
            clearInterval(timer);
        };
    }, 1000);
}



// start button --> game start
// game start--> timer on, question display
// correct answer vs wrong answer
// wrong answer minus 15 seconds
// keep track of points
// timer stop when no more questions
// questions stop when timer stops
// when done jump to result page
// add initial to highscore 
// clear highscore
// link to highscore
// back to game