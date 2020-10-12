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
  questionPage.textContent = questions[currentQuestion].question;

  //Answers
  var answerA = document.createElement("li");
  answerA.textContent = questions[currentQuestion].question[0];
  //var answerABtn = document.createElement("button");
  //answerABtn.id = "AButton";
  //answerABtn.innerHTML = questions[currentQuestion].answers[0];


  var answerB = document.createElement("li");
  answerB.textContent = questions[currentQuestion].answers[1];

  var answerC = document.createElement("li");
  answerC.textContent = questions[currentQuestion].answers[2];

  var answerD = document.createElement("li");
  answerD.textContent = questions[currentQuestion].answers[3];





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
