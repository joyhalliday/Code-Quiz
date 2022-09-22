const quizStart = document.querySelector("#start-quiz");
const intro = document.querySelector("#intro");
let time = document.querySelector(".time");
const questions = document.querySelector("#questions");
const questionsArray = [

    {title:"What is the only mammal that can fly?", 

        choices: ["A Bat", "A Tiger", "A Flying Squirel", "An Eagle"], 

        rightAnswer: 1 }, 

    {title:"How many bones does a giraffe have in its neck?", 

        choices: ["45", "12", "7", "9"], 

        rightAnswer: 3 }, 

    {title:"What percentage of DNA do humans share with chimpanzees?", 

        choices: ["52.7%", "98.8%", "0%", "95.5%"], 

        rightAnswer: 2 }, 

    {title:"How many dogs are in the world?", 
    
        choices: ["900 million", "4", "675 million", "470 million"], 

        rightAnswer: 4 }];
    
const currentQuestion = document.querySelector("#currentQuestion");
const nextQuestion = document.querySelector("#next");
const answer = document.querySelector("#answer");
const highScore = document.querySelector("#score");
const submitScore = document.querySelector("#submit");

let secondsLeft = 25;


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
        const node = document.createTextNode(elem);
        list.appendChild(node);
        answer.appendChild(list);
    });

   
 
    if (currentQuestionObj.title === ("How many dogs are in the world?")) {
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
