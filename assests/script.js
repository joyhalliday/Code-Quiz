const quizStart = document.querySelector("#start-quiz");
const intro = document.querySelector("#intro");
let time = document.querySelector(".time");
const questions = document.querySelector("#questions");
const questionsArray = [

    {title:"Question 1?", 

        choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], 

        rightAnswer: 1 }, 

    {title:"Question 2", 

        choices: ["Answer A", "Answer B", "Answer C", "Answer D"], 

        rightAnswer: 1 }, 

    {title:"Question 3?", 

        choices: ["Answer 5", "Answer 6", "Answer 7", "Answer 8"], 

        rightAnswer: 1 }, 

    {title:"Question 4?", 
    
        choices: ["Answer E", "Answer F", "Answer G", "Answer H"], 

        rightAnswer: 1 }];
    
const currentQuestion = document.querySelector("#currentQuestion");
const nextQuestion = document.querySelector("#next");
const answer = document.querySelector("#answer");
const highScore = document.querySelector("#score");
const submitScore = document.querySelector("#submit");

let secondsLeft = 45;


function startTimer() {
   
    const timerInterval= setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft + " Seconds Left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
            console.log(secondsLeft);
        }
        
    }, 1000);
};



let currentIndex = 0;


quizStart.addEventListener("click", function() 
{
    time.style.display = "block";
    intro.style.display = "none";
    score.style.display = "none";
    questions.style.display = "block";
    startTimer();
    appendNewQuestion();
});



nextQuestion.addEventListener("click", function(){
    currentIndex = currentIndex + 1;
    appendNewQuestion();
});

function appendNewQuestion() {
    const currentQuestionObj = questionsArray[currentIndex];
    answer.innerHTML = ""
    currentQuestion.innerHTML = currentQuestionObj.title;
    currentQuestionObj.choices.forEach(elem => {
        const list = document.createElement("Li");
        list.classList.add("button");
        const node = document.createTextNode(elem);
        list.appendChild(node);
        answer.appendChild(list);
    });
 
    if (currentQuestionObj.title === ("Question 4?")) {
        quizEnd();
        console.log(secondsLeft);
    }    

}

function quizEnd() {
    time.style.display = "none";
    intro.style.display = "none";
    questions.style.display = "none";
    score.style.display = "block";
};

function saveScore() {
    let playerScore = secondsLeft.value;
    localStorage.setItem("playerScore", JSON.stringify(playerScore));

}


submitScore.addEventListener("submit", function(event) {
    event.preventDefault();
    var playerName = submit.value;

});
