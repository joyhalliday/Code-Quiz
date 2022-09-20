const quizStart = document.querySelector("#start-quiz");
const intro = document.querySelector("#intro");
const time = document.querySelector("#time");
const questions = document.querySelector("#questions");
const questionsArray = [{title:"Question 1?", choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], rightAnswer: 1 }, {title:"Question 2", choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], rightAnswer: 1 }, {title:"Question 1?", choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], rightAnswer: 1 }, {title:"Question 1?", choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], rightAnswer: 1 }];
const currentQuestion = document.querySelector("#currentQuestion");
const nextQuestion = document.querySelector("#next");
const question = document.querySelector("#question");
// const questionOne = document.querySelector("#question-1");
// const questionTwo = document.querySelector("#question-2");
// const questionThree = document.querySelector("#question-3");
// const questionFour = document.querySelector("#question-4");

let currentIndex = 0;
const currentQuestionObj = questionsArray[currentIndex];

quizStart.addEventListener("click", function(){
    intro.style.display = "none";
    questions.style.display = "block";
    appendNewQuestion();
});

nextQuestion.addEventListener("click", function(){
    question.remove();
    currentIndex = currentIndex + 1;
    appendNewQuestion();
});

function appendNewQuestion(){
    currentQuestion.innerHTML = currentQuestionObj.title;
    //append for answers
    currentQuestionObj.choices.forEach(elem => {
        const list = document.createElement("Li");
        const node = document.createTextNode(elem);
        list.appendChild(node);
        question.appendChild(list);
    });
}



// quizStart.setAttribute("click", function() {
//     if //start quiz
//     //want start button to disappear
// })