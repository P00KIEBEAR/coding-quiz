"use strict";
var questions = [{
  question: "a",
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


  var questionPage = document.createElement("ul");
  questionPage.className = "question";
  questionPage.textContent = questions[currentQuestion].question;
  var quizPage1 = document.createElement("div");
  quizPage1.className = "quizPageOne";
  quizPage1.idName = "quizPage";
  quizPage1.innerHTML = "<h3 > </h3>";
  quiz.appendChild(questionPage)

  quiz.appendChild(quizPage1);
  var wrongAnswerOptions = "<li>" + wrongAnswer.join("</li><li>") + "</li>";

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
