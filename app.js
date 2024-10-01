const questions = [
  {
    question: "Q:1 What is the capital of Japan?",
    answers: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
    correct: "Tokyo",
  },
  {
    question: "Q:2 Which gas do plants absorb?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "Q:3 Largest mammal in the world?",
    answers: ["Blue Whale", "Elephant", "Giraffe", "Orca"],
    correct: "Blue Whale",
  },
  {
    question: "Q:4 Boiling point of water?",
    answers: ["50°C", "100°C", "150°C", "200°C"],
    correct: "100°C",
  },
  {
    question: "Q:5 Main ingredient in guacamole?",
    answers: ["Tomato", "Avocado", "Onion", "Pepper"],
    correct: "Avocado",
  },
  {
    question: "Q:6 Element with symbol 'O'?",
    answers: ["Oxygen", "Gold", "Hydrogen", "Carbon"],
    correct: "Oxygen",
  },
  {
    question: "Q:7 Which planet is Red Planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: "Mars",
  },
  {
    question: "Q:8 Currency of the UK?",
    answers: ["Dollar", "Euro", "Pound", "Yen"],
    correct: "Pound",
  },
  {
    question: "Q:9 Colors in a rainbow?",
    answers: ["5", "6", "7", "8"],
    correct: "7",
  },
  {
    question: "Q:10 Largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific",
  },
  {
    question: "Q:11 Hardest natural substance?",
    answers: ["Gold", "Diamond", "Iron", "Quartz"],
    correct: "Diamond",
  },
  {
    question: "Q:12 Organ pumping blood?",
    answers: ["Brain", "Heart", "Liver", "Lungs"],
    correct: "Heart",
  },
  {
    question: "Q:13 Planet with rings?",
    answers: ["Earth", "Mars", "Saturn", "Jupiter"],
    correct: "Saturn",
  },
  {
    question: "Q:14 Who painted the Mona Lisa?",
    answers: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    correct: "Da Vinci",
  },
  {
    question: "Q:15 Freezing point of water?",
    answers: ["0°C", "32°F", "100°C", "50°F"],
    correct: "0°C",
  },
  {
    question: "Q:16 Continent of Sahara Desert?",
    answers: ["Asia", "North America", "Africa", "Australia"],
    correct: "Africa",
  },
  {
    question: "Q:17 Primary language of Brazil?",
    answers: ["Spanish", "Portuguese", "English", "French"],
    correct: "Portuguese",
  },
  {
    question: "Q:18 Most spoken language?",
    answers: ["English", "Mandarin", "Spanish", "Arabic"],
    correct: "Mandarin",
  },
  {
    question: "Q:19 Main energy source for Earth?",
    answers: ["Wind", "Sun", "Water", "Geothermal"],
    correct: "Sun",
  },
  {
    question: "Q:20 Father of modern physics?",
    answers: ["Einstein", "Newton", "Galileo", "Curie"],
    correct: "Einstein",
  },
];


const overly = document.querySelector(".overly");
document.querySelector(".start").addEventListener("click",()=>{
  overly.style.display = "none";
})


let currentIndex = 0;
let score = 0;
const questionDiv = document.querySelector(".question span");
const questionNumberDiv = document.querySelector(".question-number");
const btns = document.querySelectorAll(".btn");
const nextBtn = document.querySelector(".next-btn");

function loadQuestion() {
  // Load question text
  questionDiv.textContent = questions[currentIndex].question;

  // Load answer choices
  btns.forEach((btn, index) => {
    btn.textContent = questions[currentIndex].answers[index];
    btn.classList.remove("correct", "wrong"); // Remove previous styling
    btn.disabled = false; // Enable buttons
  });
}

// Check if selected answer is correct
function checkAnswer(selectedBtn) {
  const selectedAnswer = selectedBtn.textContent;
  const correctAnswer = questions[currentIndex].correct;

  if (selectedAnswer === correctAnswer) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  // Disable all buttons after an answer is selected
  btns.forEach((btn) => (btn.disabled = true));
}

// Event listeners for answer buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkAnswer(btn);
  });
});

// Event listener for the "Next" button
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion(); // Load next question
  } else {
    endQuiz(); // End the quiz if all questions are done
  }
});

function endQuiz() {
  // Show the final score
  questionDiv.textContent = `Quiz Completed! Your score is ${score} out of ${questions.length}.`;
  document.querySelector(".answers").style.display = "none"; // Hide answer buttons
  nextBtn.style.display = "none"; // Hide next button
}

// Load the first question when the page loads
loadQuestion();
