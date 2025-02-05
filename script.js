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
  { question: "7 jan 1957", choice2: "معركة الجزائر", choice1: "العدوان الثلاثي على مصر", choice3: "اضراب 8 ايام", choice4: "اعلان حالة الطوارئ", ans: "معركة الجزائر" },
  { question: "مؤتمر الصومام", choice1: "22 oct 1956", choice2: "20 aout 1956", choice3: "7 jan 1957", choice4: "16 septembre 1959", ans: "20 aout 1956" },
  { question: "هجومات الشمال القسنطيني", choice1: "3 avril 1955", choice2: "1 nov 1954", choice3: "23 mars 1954", choice4: "20 aout 1955", ans: "20 aout 1955" },
  { question: "15 fev 1947", choice4: "تأسيس المنظمة الخاصة", choice2: "اعلان مشروع جاك سوشال", choice3: "اجتماع لجنة الستة", choice1: "تفجير الثورة التحريرية", ans: "تأسيس المنظمة الخاصة" },
  { question: "23 mars 1954", choice2: "اعلان حالة الطوارئ", choice1: "تحرير بيان اول نوفمبر", choice3: "تأسيس اللجنة الثورية للوحدة و العمل", choice4: "معركة الجزائر", ans: "تأسيس اللجنة الثورية للوحدة و العمل" },
  { question: "23 Juin 1954", choice1: "اعلان حالة الطوارئ", choice3: "اجتماع مجموعة 22", choice2: "تأسيس حركة انتصار الحريات الديموقراطية", choice4: "تفجير الثورة التحريرية", ans: "اجتماع مجموعة 22" },
  { question: "10 Oct 1954", choice3: "اجتماع لجنة الستة", choice2: "اعلان مشروع جاك سوشال", choice1: "تحرير بيان اول نوفمبر", choice4: "اعلان حالة الطوارئ", ans: "اجتماع لجنة الستة" },
  { question: "23-24 Oct 1954", choice1: "تفجير الثورة التحريرية", choice2: "اعلان حالة الطوارئ", choice3: "تحرير بيان اول نوفمبر", choice4: "اجتماع مجموعة 22", ans: "تحرير بيان اول نوفمبر" },
  { question: "1 Nov 1954", choice4: "تفجير الثورة التحريرية", choice2: "اعلان حالة الطوارئ", choice3: "اجتماع لجنة الستة", choice1: "معركة الجزائر", ans: "تفجير الثورة التحريرية" },
  { question: "23 fev 1955", choice1: "تحرير بيان اول نوفمبر", choice2: "تأسيس حركة انتصار الحريات الديموقراطية", choice3: "اعلان حالة الطوارئ", choice4: "اعلان مشروع جاك سوشال", ans: "اعلان مشروع جاك سوشال" },
  { question: "3 avril 1955", choice1: "اعلان حالة الطوارئ", choice2: "تفجير الثورة التحريرية", choice3: "اجتماع لجنة الستة", choice4: "تأسيس المنظمة الخاصة", ans: "اعلان حالة الطوارئ" },

  { question: "13 Mai 1958", choice1: "الجمهورية الرابعة", choice2: "الجمهورية الخامسة", choice3: "حركة تمرد الجيش الفرنسي في الجزائر", choice4: "سقوط الجمهورية الرابعة", ans: "سقوط الجمهورية الرابعة" },
      { question: "27 avril 1958", choice1: "مشروع قسنطينة" , choice1:"مؤتمر طنجة و اعلان تأييد الثورة الجزائرية", choice3: "معركة الجزائر", choice4: "الجمهورية الخامسة", ans: "مؤتمر طنجة و اعلان تأييد الثورة الجزائرية" },
  { question: "1 Juin 1958", choice3: "ترأس ديغول للجمهورية الفرنسية الخامسة", choice2: "حكومة مؤقتة بالقاهرة", choice1: "مشروع قسنطينة", choice4: "اعلان استقلال الجزائر", ans: "ترأس ديغول للجمهورية الفرنسية الخامسة" },
  { question: "19 Septembre 1958", choice2: "تأسيس الحكومة المؤقتة بالقاهرة", choice1: "اعلان استفتاء الاستقلال", choice3: "مشروع سلم الشجعان", choice4: "مشروع قسنطينة", ans: "تأسيس الحكومة المؤقتة بالقاهرة" },
  { question: "3 Octobre 1958", choice1: "مشروع قسنطينة", choice2: "اعلان استفتاء الاستقلال", choice3: "مشروع تقرير المصير", choice4: "انضمام الجزائر لهيئة الأمم", ans: "مشروع قسنطينة" },
  { question: "23 Octobre 1958", choice3: "اعلام مشروع سلم الشجعان", choice2: "اعلان وقف إطلاق النار", choice1: "انضمام الجزائر للأمم المتحدة", choice4: "استفتاء الاستقلال", ans: "اعلام مشروع سلم الشجعان" },
  { question: "8 Février 1958", choice1: "قنبلة ساقية سيدي يوسف", choice2: "تفجير رقان", choice3: "اعلان مشروع جاك سوشال", choice4: "اعلان استفتاء الاستقلال", ans: "قنبلة ساقية سيدي يوسف" },
  { question: "16 Septembre 1959", choice4: "اعلان مشروع تقرير المصير", choice2: "مشروع سلم الشجعان", choice3: "مفاوضات إيفيان", choice1: "اعلان استفتاء الاستقلال", ans: "اعلان مشروع تقرير المصير" },
  { question: "13 Février 1960", choice3: "تفجير رقان", choice2: "استفتاء الاستقلال", choice1: "اعلان وقف إطلاق النار", choice4: "مفاوضات إيفيان", ans: "تفجير رقان" },
  { question: "7-18 Mars 1962", choice1: "مفاوضات إيفيان 2", choice2: "وقف إطلاق النار", choice3: "مشروع تقرير المصير", choice4: "اعلان قسنطينة", ans: "مفاوضات إيفيان 2" },
  { question: "19 Mars 1962", choice1: "وقف إطلاق النار", choice2: "استفتاء الاستقلال", choice3: "اعلان استقلال الجزائر", choice4: "اعلان مشروع قسنطينة", ans: "وقف إطلاق النار" },
  { question: "1 Juillet 1962", choice1: "استفتاء الاستقلال", choice2: "اعلان قيام الدولة الجزائرية", choice3: "اعلان استقلال الجزائر", choice4: "انضمام الجزائر للأمم المتحدة", ans: "استفتاء الاستقلال" },
  { question: "3 Juillet 1962", choice4: "خروج نتائج الاستفتاء", choice2: "اعلان الاستقلال", choice3: "اعلان قيام الدولة الجزائرية", choice1: "اعلان استفتاء الاستقلال", ans: "خروج نتائج الاستفتاء" },
  { question: "26 Septembre 1962", choice2: "اعلان قيام الدولة الجزائرية", choice1: "انضمام الجزائر للأمم المتحدة", choice3: "تصحيح ثوري", choice4: "اعلان قسنطينة", ans: "اعلان قيام الدولة الجزائرية" },
  { question: "8 Octobre 1962", choice1: "انضمام الجزائر لهيئة الأمم المتحدة", choice2: "تصحيح ثوري", choice3: "استفتاء الاستقلال", choice4: "مفاوضات إيفيان", ans: "انضمام الجزائر لهيئة الأمم المتحدة" },
  { question: "19 Juin 1965", choice3: "التصحيح الثوري", choice2: "مفاوضات إيفيان", choice1: "انضمام الجزائر للأمم المتحدة", choice4: "اعلان استفتاء الاستقلال", ans: "التصحيح الثوري" },
  { question: "5-9 Septembre 1973", choice1: "المؤتمر الرابع لحركة عدم الانحياز", choice2: "التصحيح الثوري", choice3: "اعلان الاستقلال", choice4: "مفاوضات إيفيان", ans: "المؤتمر الرابع لحركة عدم الانحياز" }
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
