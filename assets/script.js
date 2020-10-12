"use strict";
var questions = [{
  question: "Question",
  answers: ["a", "b", "c", "d"],
  correct: "a"
}];


var startQuiz = document.querySelector("#begin");
var highScore = document.querySelector("#scores");
var quiz = document.querySelector("main");
var timeEl = document.querySelector("#time")


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
  var bBtn = document.createElement("button");
  bBtn.id = "bButton";
  bBtn.textContent = questions[currentQuestion].answers[1];
  answerB.appendChild(bBtn);

  var answerC = document.createElement("li");
  var cBtn = document.createElement("button");
  cBtn.id = "cButton"
  cBtn.textContent = questions[currentQuestion].answers[2];
  answerC.appendChild(cBtn);

  var answerD = document.createElement("li");
  var dBtn = document.createElement("button");
  dBtn.id = "dButton"
  dBtn.textContent = questions[currentQuestion].answers[3];
  answerD.appendChild(dBtn);






  quiz.appendChild(questionPage)

  quiz.appendChild(answerA);
  quiz.appendChild(answerB);
  quiz.appendChild(answerC);
  quiz.appendChild(answerD);


  /* click event
  check answer fucntion
  
  /* 
   questions ...add ul.
     li..for each questions */
  //answer code (questions[0].answers[2])


}



// THis will start quiz

startQuiz.addEventListener("click", beginQuiz);

// add timer
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
