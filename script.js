const questions = [
    {
        question: "What is the capital city of Japan?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Bangkok", correct: false},
            {text: "Beijing", correct: false},
            {text: "Tokyo", correct: true},
        ]
    },
    {
        question: "What is the capital city of Nigeria?",
        answers: [
            {text: "Abuja", correct: true},
            {text: "Ilorin", correct: false},
            {text: "Abidan", correct: false},
            {text: "Abidjan", correct: false},
        ]
    },
    {
        question: "What is the capital city of Russia?",
        answers: [
            {text: "Kiev", correct: false},
            {text: "Moscow", correct: true},
            {text: "Abidjan", correct: false},
            {text: "New Delhi", correct: false},
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            {text: "Hydrogen", correct: false},
            {text: "Carbon dioxode", correct: true},
            {text: "Nitrogen", correct: false},
            {text: "Oxygen", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Jupiter", correct: false},
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "Who wrote Romeo and Julie?",
        answers: [
            {text: "Mark Twain", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Adedo Mubaraq", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Au", correct: true},
            {text: "Ag", correct: false},
            {text: "Hg", correct: false},
            {text: "Ca", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: [
            {text: "Au", correct: false},
            {text: "Ag", correct: true},
            {text: "Hg", correct: false},
            {text: "Ca", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for Carbon?",
        answers: [
            {text: "Au", correct: false},
            {text: "Ag", correct: false},
            {text: "Hg", correct: false},
            {text: "C", correct: true},
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            {text: "Nile", correct: false},
            {text: "Mississippi", correct: true},
            {text: "Amazon", correct: false},
            {text: "Yangtze", correct: false},
        ]
    },
    {
        question: "In which continent is the Sahara Desert located?",
        answers: [
            {text: "South America", correct: false},
            {text: "Africa", correct: true},
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            {text: "Brisbane", correct: false},
            {text: "Canberra", correct: true},
            {text: "Melbourne", correct: false},
            {text: "Sydney", correct: false},
        ]
    },
    {
        question: "Who won the Academy Award for Best Actor in 2020 for his role in the movie 'Joker'?",
        answers: [
            {text: "Leonardo DiCaprio", correct: false},
            {text: "Joaquin Phoenix", correct: true},
            {text: " Robert De Niro", correct: false},
            {text: "Brad Pitt", correct: false},
        ]
    },
    {
        question: "In which movie does the character Harry Potter first learn that he is a wizard?",
        answers: [
            {text: "Harry Potter and the Prisoner of Azkaban", correct: false},
            {text: "Harry Potter and the Chamber of Secrets", correct: false},
            {text: " Harry Potter and the Sorcerer's Stone", correct: true},
            {text: "Harry Potter and the Goblet of Fire", correct: false},
        ]
    },
    {
        question: "Who directed the film 'The Shawshank Redemption'?",
        answers: [
            {text: "Christopher Nolan", correct: false},
            {text: "Steven Spielberg", correct: false},
            {text: " Quentin Tarantino", correct: false},
            {text: "Frank Darabont", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild); 
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showscore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
