const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correct: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript"
  }
];

let currentQuestionIndex = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");

function loadQuestion() {
  feedbackEl.textContent = "";
  const current = quizData[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `
      <label>
        <input type="radio" name="option" value="${option}"> ${option}
      </label>
    `;
    optionsEl.appendChild(li);
  });
}

submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    feedbackEl.textContent = "Please select an answer.";
    feedbackEl.style.color = "red";
    return;
  }

  const answer = selected.value;
  const correctAnswer = quizData[currentQuestionIndex].correct;

  if (answer === correctAnswer) {
    feedbackEl.textContent = "Correct!";
    feedbackEl.style.color = "green";
  } 
  else {
    feedbackEl.textContent = Wrong! The correct answer was "${correctAnswer}".;
    feedbackEl.style.color = "red";
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz completed!";
      optionsEl.innerHTML = "";
      submitBtn.style.display = "none";
      feedbackEl.textContent = "";
    }
  }, 1500);
});

loadQuestion();