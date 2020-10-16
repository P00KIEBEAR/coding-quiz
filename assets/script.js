"use strict";

var startQuiz = document.querySelector("#begin");
var highScore = document.querySelector("#highScoreList");
//var playersScore = localStorage.setItem(playersScore)
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
var highScoreBtn = document.createElement("button");
highScoreBtn.type = ("submit")
highScoreBtn.id = "high"
highScoreBtn.innerText = "Submit your initials."
var highScoreBtnHide = document.querySelector("#highScore")

var player1 = localStorage.getItem("player1");
var scoreList = localStorage.getItem("scoreList");

if (player1 && scoreList) {
  player1 = JSON.parse(player1);
  scoreList = JSON.parse(scoreList);
}
else {
  player1 = ["pp"];
  scoreList = ["4"];
}
/*
need to use localStorage  and start over button
*/
var playersInitials = localStorage.getItem("initials");
var currentScore = localStorage.getItem("score");
if (playersInitials && currentScore) {

  player1.push(playersInitials);
  scoreList.push(currentScore);
  var player3 = JSON.stringify(player1);
  var score3 = JSON.stringify(scoreList);
  localStorage.setItem("scoreList", score3);
  localStorage.setItem("player1", player3);

  for (var i = 0; i < player1.length; i++) {
    var currentPlayer = document.createElement("li");
    currentPlayer.innerText = player1[i] + " " + scoreList[i];
    highScore.appendChild(currentPlayer);
  }
}


var currentQuestion = 0;
var score = 0;
var timer = 60

function hide() {
  var x = document.getElementById("highScoreList");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

highScoreBtnHide.addEventListener("click", hide)
var beginQuiz = function () {
  // remove start btn.
  score = 0;
  quiz.innerHTML = "";
  stopWatch();
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    //Question
    var questionPage = document.createElement("ul");
    questionPage.className = "question";
    questionPage.innerText = questions[currentQuestion].question;

    //Answers
    var answerA = document.createElement("li");
    aBtn.innerText = questions[currentQuestion].answers[0];
    aBtn.value = questions[currentQuestion].answers[0];
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


    aBtn.addEventListener("click", checkAnswer);
    bBtn.addEventListener("click", checkAnswer);
    cBtn.addEventListener("click", checkAnswer);
    dBtn.addEventListener("click", checkAnswer);

  }
  else {
    endGame()
  }

}
/* click event
check answer fucntion*/
var checkAnswer = function () {
  quiz.innerHTML = "";

  if (questions[currentQuestion].correct === this.innerText) {
    score = (score + 1);
    currentQuestion = currentQuestion + 1
    showQuestion();
  }
  else {
    timer = (timer - 10);
    currentQuestion = currentQuestion + 1
    showQuestion();
  }
}
var endGame = function () {

  quiz.innerHTML = "";
  var endPage = document.createElement("h1");
  endPage.innerText = "Thank you for taking the quiz";
  var yourScore = document.createElement("h2");
  yourScore.innerText = "Your is" + " " + score + "!";
  var initialsInput = document.createElement("input");
  initialsInput.id = "initials"
  var form = document.createElement("form");


  // use local storage
  quiz.appendChild(endPage);
  quiz.appendChild(yourScore);
  quiz.appendChild(form);
  form.appendChild(initialsInput);
  quiz.appendChild(highScoreBtn);


  highScoreBtn.addEventListener("click", function (event) {

    var initialL = document.querySelector("#initials")
    //console.log(initialL)
    var initials = initialL.value.trim();
    // console.log(initials);
    localStorage.setItem("score", score)
    localStorage.setItem("initials", initials)
    location.reload();
  })
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
      endGame();

    }
  }, 1000);
}

var questions = [{
  question: "What would be the largest font?",
  answers: ["h2", "a", "p", "h6"],
  correct: "h2"
},
{
  question: "What does HTML stand for?",
  answers: ["Hyper Text Markup Language", "Hyper Text Markerup Link", "Some computer lanquage", "Hotel Californa"],
  correct: "Hyper Text Markup Language"
}, {
  question: "What does DOM stand for?",
  answers: ["Domain Over Model", "Document Object Model", "Domain of Main", "Developers Over Rated"],
  correct: "Document Object Model"
}, {
  question: "How do you close a tag in HTML?",
  answers: ["/", ";", "/>", "</"],
  correct: "</"
},
{
  question: "< div Class='show' id='cake'> In this div what is the way you link the style to it in CSS?",
  answers: ["show", ".div", ".show", ".cake"],
  correct: ".show"
},
{
  //more questions
  question: "What would be the largest font?",
  answers: ["h2", "a", "p", "h6"],
  correct: "h2"
},
{
  question: "What would be the largest font?",
  answers: ["h2", "a", "p", "h6"],
  correct: "h2"
},
{
  question: "What would be the largest font?",
  answers: ["h2", "a", "p", "h6"],
  correct: "h2"
},
{
  question: "What would be the largest font?",
  answers: ["h2", "a", "p", "h6"],
  correct: "h2"
}];
