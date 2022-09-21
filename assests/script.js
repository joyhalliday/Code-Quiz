const quizStart = document.querySelector("#start-quiz");
const intro = document.querySelector("#intro");
const time = document.querySelector("#time");
const questions = document.querySelector("#questions");
const questionsArray = [{title:"Question 1?", choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], rightAnswer: 1 }, {title:"Question 2", choices: ["Answer A", "Answer B", "Answer C", "Answer D"], rightAnswer: 1 }, {title:"Question 3?", choices: ["Answer 5", "Answer 6", "Answer 7", "Answer 8"], rightAnswer: 1 }, {title:"Question 4?", choices: ["Answer E", "Answer F", "Answer G", "Answer H"], rightAnswer: 1 }];
const currentQuestion = document.querySelector("#currentQuestion");
const nextQuestion = document.querySelector("#next");
const question = document.querySelector("#question");


let secondsLeft = 45

function startTimer() {
    const timerInterval= setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft + "Seconds Left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

let currentIndex = 0;


quizStart.addEventListener("click", function(){
    intro.style.display = "none";
    questions.style.display = "block";
    appendNewQuestion();
    
});

nextQuestion.addEventListener("click", function(){
    currentIndex = currentIndex + 1;
    appendNewQuestion();
    console.log("I am a timer");
});

function appendNewQuestion(){
    const currentQuestionObj = questionsArray[currentIndex];
    question.innerHTML = ""
    currentQuestion.innerHTML = currentQuestionObj.title;
    currentQuestionObj.choices.forEach(elem => {
        const list = document.createElement("Li");
        const node = document.createTextNode(elem);
        list.appendChild(node);
        question.appendChild(list);
    });
    if (questionsArray[currentIndex < 5]);
        console.log("Oops")

}



// quizStart.setAttribute("click", function() {
//     if //start quiz
//     //want start button to disappear
// })