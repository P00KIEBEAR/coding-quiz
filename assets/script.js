"use strict";
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

var startQuiz = document.querySelector("#begin");
var highScore = document.querySelector("#scores");
var quiz = document.querySelector("main");
var timeEl = document.querySelector("#time")
var aBtn = document.createElement("button");
aBtn.id = "aButton";
var bBtn = document.createElement("button");
bBtn.id = "bButton";
var cBtn = document.createElement("button");
cBtn.id = "cButton";
var dBtn = document.createElement("button");
dBtn.id = "dButton";

var buttonA = document.getElementById("aButton");
var buttonB = document.getElementById("bButton");
var buttonC = document.getElementById("cButton");
var buttonD = document.getElementById("dButton");

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

  buttonA.addEventListener("click", showNextQuestion);
  buttonB.addEventListener("click", showNextQuestion);
  buttonC.addEventListener("click", showNextQuestion);
  buttonD.addEventListener("click", showNextQuestion);

}
/* click event
check answer fucntion
*/
var showNextQuestion = function () {
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



  buttonA.addEventListener("click", showNextQuestion);
  buttonB.addEventListener("click", showNextQuestion);
  buttonC.addEventListener("click", showNextQuestion);
  buttonD.addEventListener("click", showNextQuestion);

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
  var timeInterval = setInterval(function () {
    timer--;
    timeEl.textContent = timer;
    if (timer <= 0) {
      clearInterval(timerInterval);
      endgame();

    }
  }, 1000);
}
