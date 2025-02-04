var currentQuestion = 0;
var totalScore = 0;
var cQuestion = document.getElementById('currentQuestion');
var totalQuestions = document.getElementById('totalQuestions');
var splashSecreen = document.getElementById('start');
var quizScreen = document.getElementById('quiz-secreen');
var x = 0;
var resultSecreen = document.getElementById('resultSecreen');
var timeLeft = document.getElementById('timeLeft');
var score = document.getElementById('score');
var question = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var btn = document.getElementsByClassName('btn');
var next = document.getElementById('next');
var bar;

function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

var quizQuestions = [
  { question: "2 Nov 1946", choice1: "اجتماع لجنة الستة", choice2: "تأسيس حركة انتصار الحريات الديموقراطية", choice3: "تأسيس المنظمة الخاصة", choice4: "اعلان حالة الطوارئ", ans: "تأسيس حركة انتصار الحريات الديموقراطية" },
  { question: "7 jan 1957", choice4: "معركة الجزائر", choice2: "العدوان الثلاثي على مصر", choice3: "اضراب 8 ايام", choice1: "اعلان حالة الطوارئ", ans: "معركة الجزائر" },
  { question: "مؤتمر الصومام", choice1: "22 oct 1956", choice2: "20 aout 1956", choice3: "7 jan 1957", choice4: "16 septembre 1959", ans: "20 aout 1956" },
  { question: "هجومات الشمال القسنطيني", choice1: "3 avril 1955", choice2: "1 nov 1954", choice3: "23 mars 1954", choice4: "20 aout 1955", ans: "20 aout 1955" },
  { question: "15 fev 1947", choice1: "تأسيس المنظمة الخاصة", choice2: "اعلان مشروع جاك سوشال", choice3: "اجتماع لجنة الستة", choice4: "تفجير الثورة التحريرية", ans: "تأسيس المنظمة الخاصة" },
  { question: "23 mars 1954", choice1: "اعلان حالة الطوارئ", choice2: "تحرير بيان اول نوفمبر", choice3: "تأسيس اللجنة الثورية للوحدة و العمل", choice4: "معركة الجزائر", ans: "تأسيس اللجنة الثورية للوحدة و العمل" },
  { question: "23 Juin 1954", choice1: "اعلان حالة الطوارئ", choice2: "اجتماع مجموعة 22", choice3: "تأسيس حركة انتصار الحريات الديموقراطية", choice4: "تفجير الثورة التحريرية", ans: "اجتماع مجموعة 22" },
  { question: "10 Oct 1954", choice1: "اجتماع لجنة الستة", choice2: "اعلان مشروع جاك سوشال", choice3: "تحرير بيان اول نوفمبر", choice4: "اعلان حالة الطوارئ", ans: "اجتماع لجنة الستة" },
  { question: "23-24 Oct 1954", choice1: "تفجير الثورة التحريرية", choice2: "اعلان حالة الطوارئ", choice3: "تحرير بيان اول نوفمبر", choice4: "اجتماع مجموعة 22", ans: "تحرير بيان اول نوفمبر" },
  { question: "1 Nov 1954", choice1: "تفجير الثورة التحريرية", choice2: "اعلان حالة الطوارئ", choice3: "اجتماع لجنة الستة", choice4: "معركة الجزائر", ans: "تفجير الثورة التحريرية" },
  { question: "23 fev 1955", choice1: "تحرير بيان اول نوفمبر", choice2: "تأسيس حركة انتصار الحريات الديموقراطية", choice3: "اعلان حالة الطوارئ", choice4: "اعلان مشروع جاك سوشال", ans: "اعلان مشروع جاك سوشال" },
  { question: "3 avril 1955", choice1: "اعلان حالة الطوارئ", choice2: "تفجير الثورة التحريرية", choice3: "اجتماع لجنة الستة", choice4: "تأسيس المنظمة الخاصة", ans: "اعلان حالة الطوارئ" }
];

shuffleQuestions(quizQuestions);

totalQuestions.textContent = quizQuestions.length;

function nextQuestion(no) {
  resetButtonColors();
  cQuestion.textContent = no + 1;
  question.textContent = quizQuestions[no].question;
  opt1.textContent = quizQuestions[no].choice1;
  opt2.textContent = quizQuestions[no].choice2;
  opt3.textContent = quizQuestions[no].choice3;
  opt4.textContent = quizQuestions[no].choice4;
  startTimer(3000);
}

var z = setInterval(function () {
  if (x == 1) {
    clearInterval(z);
    splashSecreen.style.display = "none";
    quizScreen.style.display = "block";
    nextQuestion(currentQuestion);
  }
  x++;
}, 2000);

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    for (var j = 0; j < btn.length; j++) {
      btn[j].disabled = true;
    }
    if (this.textContent == quizQuestions[currentQuestion].ans) {
      totalScore++;
      this.style.backgroundColor = "green";
    } else {
      this.style.backgroundColor = "red";
      showCorrectAnswer();
    }
    clearInterval(bar);
    setTimeout(function () {
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        nextQuestion(currentQuestion);
        for (var j = 0; j < btn.length; j++) {
          btn[j].disabled = false;
        }
      } else {
        endScreen();
      }
    }, 2000);
  };
}

function showCorrectAnswer() {
  for (var i = 0; i < btn.length; i++) {
    if (btn[i].textContent == quizQuestions[currentQuestion].ans) {
      btn[i].style.backgroundColor = "green";
    }
  }
}

function resetButtonColors() {
  for (var i = 0; i < btn.length; i++) {
    btn[i].style.backgroundColor = "";
  }
}

function endScreen() {
  quizScreen.style.display = "none";
  resultSecreen.style.display = "block";
  score.textContent = totalScore;
}

function startTimer(set) {
  var statusTime = set;
  timeLeft.style.width = "100%";
  bar = setInterval(function () {
    if (statusTime <= 0) {
      clearInterval(bar);
      if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        nextQuestion(currentQuestion);
      } else {
        endScreen();
      }
    }
    timeLeft.style.width = (statusTime / set) * 100 + "%";
    statusTime -= 100;
  }, 100);
}

next.onclick = function () {
  clearInterval(bar);
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    nextQuestion(currentQuestion);
  } else {
    endScreen();
  }
};
