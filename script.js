// Declare variables
var timerElement = document.querySelector(".timer");
var questions = [
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},
    {qustion: "", choices:"", correctAnswer:""},

]



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