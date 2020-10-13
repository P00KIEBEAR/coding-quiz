"use strict";

var startQuiz = document.querySelector("#begin");
var highScore = document.querySelector("#scores");
var quiz = document.querySelector("main");
var timeEl = document.querySelector("#time")
var aBtn = document.createElement("button");
aBtn.value = aBtn.innerText;
var bBtn = document.createElement("button");
bBtn.value = bBtn.innerText;
var cBtn = document.createElement("button");
cBtn.value = cBtn.innerText;
var dBtn = document.createElement("button");
dBtn.value = dBtn.innerText;


var currentQuestion = 0;
var score = 0;
var timer = 60


var beginQuiz = function () {
  // remove start btn.
  quiz.innerHTML = "";
  stopWatch();
  showQuestion();
}


function showQuestion() {
  currentQuestion = currentQuestion
  //Question
  var questionPage = document.createElement("ul");
  questionPage.className = "question";
  questionPage.innerText = questions[currentQuestion].question;

  //Answers
  var answerA = document.createElement("li");
  aBtn.innerText = questions[currentQuestion].answers[0];
  answerA.appendChild(aBtn);

  var answerB = document.createElement("li");
  bBtn.textContent = questions[currentQuestion].answers[1];
  answerB.appendChild(bBtn);

  var answerC = document.createElement("li");
  cBtn.textContent = questions[currentQuestion].answers[2];
  answerC.appendChild(cBtn);

  var answerD = document.createElement("li");
  dBtn.textContent = questions[currentQuestion].answers[3];
  answerD.appendChild(dBtn);


  quiz.appendChild(questionPage)
  quiz.appendChild(answerA);
  quiz.appendChild(answerB);
  quiz.appendChild(answerC);
  quiz.appendChild(answerD);

  var buttonA = document.getElementById("aBtn");
  var buttonB = document.getElementById("bBtn");
  var buttonC = document.getElementById("cBtn");
  var buttonD = document.getElementById("dBtn");

  aBtn.addEventListener("click", showNextQuestion, aBtn);
  bBtn.addEventListener("click", showNextQuestion, bBtn);
  cBtn.addEventListener("click", showNextQuestion, cBtn);
  dBtn.addEventListener("click", showNextQuestion, dBtn);



}
/* click event
check answer fucntion
*/
var showNextQuestion = function () {
  quiz.innerHTML = "";

  currentQuestion = currentQuestion + 1
  //Question
  var questionPage = document.createElement("ul");
  questionPage.className = "question";
  questionPage.innerText = questions[currentQuestion].question;

  //Answers
  var answerA = document.createElement("li");
  var aBtn = document.createElement("button");
  aBtn.id = "aButton";
  aBtn.innerText = questions[currentQuestion].answers[0];
  answerA.appendChild(aBtn);

  var answerB = document.createElement("li");
  bBtn.textContent = questions[currentQuestion].answers[1];
  answerB.appendChild(bBtn);

  var answerC = document.createElement("li");
  cBtn.textContent = questions[currentQuestion].answers[2];
  answerC.appendChild(cBtn);

  var answerD = document.createElement("li");
  dBtn.textContent = questions[currentQuestion].answers[3];
  answerD.appendChild(dBtn);


  quiz.appendChild(questionPage)
  quiz.appendChild(answerA);
  quiz.appendChild(answerB);
  quiz.appendChild(answerC);
  quiz.appendChild(answerD);




  aBtn.addEventListener("click", showNextQuestion, aBtn);
  bBtn.addEventListener("click", showNextQuestion, bBtn);
  cBtn.addEventListener("click", showNextQuestion, cBtn);
  dBtn.addEventListener("click", showNextQuestion, dBtn);

  /*
  questions ...add ul.
    li..for each questions */
  //answer code (questions[0].answers[2])


}



// THis will start quiz

startQuiz.addEventListener("click", beginQuiz);



// add timer TIMER goes into -
function stopWatch() {
  // If the count down is finished, write some text 
  var timerInterval = setInterval(function () {
    timer--;
    timeEl.textContent = timer;
    if (timer <= 0) {
      clearInterval(timerInterval);
      endgame();

    }
  }, 1000);
}

var questions = [{
  question: "Question",
  answers: ["a", "b", "c", "d"],
  correct: "a"
},
{
  question: "What does HTLM stand for?",
  answers: ["Hyper Text Markup Language ", "Hyper Text Link Markerup", "Some computer lanquage", "Hotel Californa"],
  correct: "a"
}, {
  question: "What does DOM stand for?",
  answers: ["a", "b ", "c", "d"],
  correct: "b"
}, {
  question: "Question",
  answers: ["a", "b", "c", "d"],
  correct: "d"
},
{
  question: "Question",
  answers: ["a", "b", "c", "d"],
  correct: "a"
}];
