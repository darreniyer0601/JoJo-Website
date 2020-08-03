var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("startButton");
var nextButton = document.getElementById("next");
var resultText = document.getElementById("result");
var questionText = document.getElementById("question");
var answerContainer = document.getElementById("answerContainer");
var numCorrect = 0;
var index = 0; // To store current question
var answers;
var answerSelection;

var myQuestions = [
  {
    question: "What is the name of Kakyoin's stand in Stardust Crusaders?",
    answers: {
      a: "Hermit Purple",
      b: "Little Boy",
      c: "Heirophant Green",
      d: "Silver Chariot",
    },
    correctAnswer: "a3",
  },
  {
    question: "Which of these is not the name of a stand?",
    answers: {
      a: "Metallica",
      b: "Aerosmith",
      c: "Black Sabbath",
      d: "Radiohead",
    },
    correctAnswer: "a4",
  },
  {
    question: "What are stands in Stardust Crusaders named after?",
    answers: {
      a: "Tarot Cards",
      b: "Egyptian Gods",
      c: "Bands",
      d: "Songs",
    },
    correctAnswer: "a1",
  },
  {
    question:
      "The phrase 'This must be the work of an enemy stand' is from which part?",
    answers: {
      a: "Stardust Crusaders",
      b: "Diamond is Unbreakable",
      c: "Golden Wind",
      d: "None of these",
    },
    correctAnswer: "a4",
  },
  {
    question: "What is the name of Jonathan's dog in Part 1?",
    answers: {
      a: "Spot",
      b: "Danny",
      c: "Roger",
      d: "Iggy",
    },
    correctAnswer: "a2",
  },
];

function generateQuiz() {
  // Remove the start button
  startButton.style.display = "none";

  showQuestion();
  nextButton.style.opacity = 1;
}

function showQuestion() {
  // Array to store output and choices
  var output = [];

  // Reset the answers
  answers = [];

  // For each answer
  var i = 1;
  for (letter in myQuestions[index].answers) {
    console.log(myQuestions[index]);
    // Adding an html button
    answers.push(
      `<button class="ans" id="a${i}"> ${myQuestions[index].answers[letter]} </button>`
    );
    i++;
  }

  // Add the question and the answers to the ouput
  questionText.innerHTML = myQuestions[index].question;
  console.log(answers);

  output.push(answers.join(""));

  answerContainer.innerHTML = output;

  answerSelection = document.querySelectorAll(".ans");
  console.log(answerSelection);

  answerSelection.forEach((answer) => {
    answer.addEventListener("click", (event) => displayAnswers(answer));
  });

  // If it is the last question, change the next button
  // to the finish button
  if (index == myQuestions.length - 1) {
    nextButton.innerHTML = "Finish";
  }
}

function displayAnswers(answer) {
  console.log(answer.id);

  if (answer.id == myQuestions[index].correctAnswer) {
    resultText.innerHTML = "Correct!";
    numCorrect++;
  } else {
    resultText.innerHTML = "Incorrect!";
  }
  for (var i = 0; i < answerSelection.length; i++) {
    answerSelection[i].style.background = "red";
    if (answerSelection[i].id == myQuestions[index].correctAnswer) {
      answerSelection[i].style.background = "green";
    }
    answerSelection[i].style.color = "#fff";
  }
}

nextButton.addEventListener("click", (event) => showNextQuestion());

function showNextQuestion() {
  resultText.innerHTML = "";
  answerContainer.innerHTML = "";
  questionText.innerHTML = "";
  index++;

  if (nextButton.innerHTML == "Finish") {
    var resultOutput = `You scored a ${numCorrect} out of 5`;
    resultText.innerHTML = resultOutput;
    nextButton.style.display = "none";
  } else {
    showQuestion();
  }
}

startButton.addEventListener("click", (event) => generateQuiz());
