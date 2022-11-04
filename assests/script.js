const quizStart = document.querySelector("#start-quiz");
const intro = document.querySelector("#intro");
let time = document.querySelector(".time");
const questions = document.querySelector("#questions");
const questionsArray = [

    {title:"What is the only mammal that can fly?", 

        choices: ["A Bat", "A Tiger", "A Flying Squirel", "An Eagle"], 

        rightAnswer: "A Bat" }, 

    {title:"How many bones does a giraffe have in its neck?", 

        choices: ["45", "12", "7", "9"], 

        rightAnswer: "7" }, 

    {title:"What percentage of DNA do humans share with chimpanzees?", 

        choices: ["52.7%", "98.8%", "0%", "95.5%"], 

        rightAnswer: "98.8%" }, 

    {title:"How many dogs are in the world?", 
    
        choices: ["900 million", "4", "675 million", "470 million"], 

        rightAnswer: "470 million" },
    ];
    
const currentQuestion = document.querySelector("#currentQuestion");
const nextQuestion = document.querySelector("#next");
const answer = document.querySelector("#answer");
const highScore = document.querySelector("#score");
const submitScore = document.querySelector("#submit");
const feedbackEl = document.querySelector("#feedback");
let timerInterval; 

let secondsLeft = 25;


function startTimer() {  
    timerInterval= setInterval(function() {
        
        time.textContent = secondsLeft + " Seconds Left";
        secondsLeft--;

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



// nextQuestion.addEventListener("click", function(){
//     currentIndex = currentIndex + 1;
//     if (currentIndex < questionsArray.length) {
//         appendNewQuestion();
//     } else {
//         quizEnd();
//     }
    
// });
function choiceClick(event) {
    var buttonEl = event.target;
    if (!buttonEl.matches(".choice")) {
        return;
    }
    console.log(currentIndex);
    if (buttonEl.value !== questionsArray[currentIndex].rightAnswer) {
        secondsLeft-=5;
        if (secondsLeft < 0) {
            quizEnd();   
        } 
        time.textContent = secondsLeft + " Seconds Left";
        feedbackEl.textContent="Wrong"
    } else {
        feedbackEl.textContent="Correct"
    } feedbackEl.classList.remove("hide")
    setTimeout(function() {
        feedbackEl.classList.add("hide")
    }, 1000) 
    currentIndex++;
    if (secondsLeft <= 0 || currentIndex === questionsArray.length) {
        quizEnd();
    } else {
        appendNewQuestion();
    }
}

// answer.onClick = choiceClick;

function appendNewQuestion() {
    const currentQuestionObj = questionsArray[currentIndex];
    answer.innerHTML = ""
    currentQuestion.innerHTML = currentQuestionObj.title;
    for (var i=0; i<currentQuestionObj.choices.length; i++) {
        var choice = currentQuestionObj.choices[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.onclick=choiceClick;
        choiceNode.textContent = i+1+". "+choice;
        answer.appendChild(choiceNode);
    } 
    // currentQuestionObj.choices.forEach(elem => {
    //     const list = document.createElement("button");
    //     const node = document.createTextNode(elem);
    //     list.appendChild(node);
    //     answer.appendChild(list);
    // });

    

    // if (currentQuestionObj.title === ("end of quiz")) {
    //     quizEnd();
    //     console.log(secondsLeft);
    // }    

}



function quizEnd() {
    clearInterval(timerInterval);
    time.style.display = "none";
    intro.style.display = "none";
    questions.style.display = "none";
    score.style.display = "block";
    document.querySelector("#finalScore").textContent=secondsLeft
};

// function saveScore() {
//     let playerScore = secondsLeft.value;
//     localStorage.setItem("playerScore", JSON.stringify(playerScore));

// }


submitScore.addEventListener("submit", function(event) {
    event.preventDefault();
    var playerName = document.querySelector("#fname").value;
    let playerScore = secondsLeft;
    console.log(playerName);
    console.log(playerScore);
    var highScore = JSON.parse(localStorage.getItem("playerScore")) || []
    let newScore={
        name: playerName,
        score: playerScore,
    }
    
    highScore.push(newScore);
    localStorage.setItem("playerScore", JSON.stringify(highScore));

});

//var highScore = JSON.parse(localStorage.getItem("playerScore")) || [] //sort in descending order