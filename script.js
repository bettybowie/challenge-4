// Declare variables
var startPg = document.querySelector(".start-page");
var startBtn = document.querySelector(".startBtn");
var timerElement = document.querySelector(".timer");
var questionBank = [
    {
        question: "Inside which HTML element do we put the JavaScript?", 
        choices: ["scripting", "javascript", "js", "script"], 
        correctAnswer: "script"
    },
    {
        question: "Where is the correct place to insert a JavaScript?", 
        choices: ["The body section", "The head section", "The footer section", "Both the head section and the body section are correct"], 
        correctAnswer: "Both the head section and the body section are correct"
    },
    {
        question: "How do you create a function in JavaScript?", 
        choices:["function myFunction()", "function:myFunction()", "function = myFunction()", "function.myFunction()"], 
        correctAnswer:"function myFunction()"
    },
    {
        question: "How do you call a function named 'myFunction'?", 
        choices: ["myFunction()", "call myFunction()", "myFunction", "call function myFunction()"], 
        correctAnswer: "myFunction()"
    },
    {
        question: "How does a WHILE loop start?", 
        choices: ["while(i <= 10; i++)", "while(i <= 10)", "while i = 1 to 10", "while(i)"], 
        correctAnswer: "while(i <= 10)"
    },
    {
        question: "Javascript is an _____ language.", 
        choices: ["Object-oriented", "Object-based", "'Procedural", "None of the above"], 
        correctAnswer: "Object-oriented"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?", 
        choices:["onchange", "onmouseclick", "onmouseover", "onclick"], 
        correctAnswer:"onclick"
    },
    {
        question: "Which operator is used to assign a value to a variable?", 
        choices: ["*", "X", "-", "="], 
        correctAnswer: "="
    },
    {
        question: "What will the following code return: Boolean(10 > 9)", 
        choices: ["NaN", "1", "True", "False"], 
        correctAnswer: "True"
    },
    {
        question: "How to write an IF statement in JavaScript?", 
        choices: ["if(i==5)", "if i=5 then", "if i==5 then", "if i=5"], 
        correctAnswer: "if(i==5)"
    },
];

var answerBtn = document.querySelector(".answer-choices");
var questionIs = document.querySelector(".questionIs");
var questionPg = document.querySelector(".question-page");
var resultPg = document.querySelector(".result-page");
var finalScoreElement = document.querySelector(".finalScore");
var initialInput = document.getElementById("initials");
var initialSubmitBtn = document.querySelector(".initialSubmit");
var highscorePg = document.querySelector(".highscore-page");
var highscoreBoard = document.querySelector(".highscoreBoard");
var highscoreItem = document.querySelector(".highscoreItem");
var returnBtn = document.querySelector(".return-page");
var clearBtn = document.querySelector(".clear-score");
var questionIndex = -1;
var timeLeft = 80;
var feedback = document.querySelector(".correct-wrong");
var timer;
var scoreCounter = 0;

// function to display the  questions
function startQuestion() {
    questionIndex++;
    var currentQues = questionBank[questionIndex].question;
    questionIs.innerHTML =currentQues;
    questionBank[questionIndex].choices.forEach((currentQues) => {
        var currentChoices = currentQues;
        var answerDiv = document.getElementById("answers");
        answerBtn = document.createElement("button");
        answerBtn.innerHTML = currentChoices; 
        answerDiv.appendChild(answerBtn);
        answerBtn.onclick = answerClicked;
    });
}

// series of event when answer is selected
function answerClicked(e) {
    e.preventDefault();

    if (e.target.innerText === questionBank[questionIndex].correctAnswer) {
        feedback.innerHTML = "Correct!";
        scoreCounter += 10;
        document.getElementById("Is").innerHTML = "";
        document.getElementById("answers").innerHTML = "";
        startQuestion();
    } else {
        timeLeft -= 15;
        feedback.innerHTML = "Wrong!";
        document.getElementById("Is").innerHTML = "";
        document.getElementById("answers").innerHTML = "";
        startQuestion();
    }

    if (questionIndex === questionBank.length-1) {
        quizEnd();
    }
}


// track scores
function scores() {
    finalScoreElement.innerHTML = "Your final score is " + scoreCounter;
}



// shows results page 
function quizEnd() {
    questionPg.style.display = "none";
    resultPg.style.display = "block";
    scores();
}

// submit initials to highscore board
initialSubmitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var highscoreStore = {
        player: initialInput.value.trim(),
        score: scoreCounter
    }
    localStorage.setItem("highscoreStore", JSON.stringify(highscoreStore));
    resultPg.style.display = "none";
    highscorePg.style.display = "block";
    
})

// start quiz button to start the challenge
startBtn.addEventListener("click", function(e){
    e.preventDefault();
    startPg.style.display = "none";
    startTimer();
    questionPg.style.display = "block";
    startQuestion();
})

// function to start and stop the timer
function startTimer() {
    var timer = setInterval(function() {
        if (timeLeft >= 1) {
            timerElement.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else {
            timerElement.textContent = 'Time out!';
            clearInterval(timer);
            quizEnd();
        };
    }, 1000);
}






// add to highscore
// clear highscore
// link to highscore
// back to game