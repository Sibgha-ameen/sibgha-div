const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style System", "Computer Style Sheet"],
        answer: 0
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<scripting>", "<script>", "<javascript>"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const options = [...document.getElementsByClassName('option-btn')];
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    options.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.onclick = () => selectAnswer(index);
    });
    scoreEl.textContent = "";
}

function selectAnswer(index) {
    if(index === questions[currentQuestion].answer){
        score++;
    }
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    currentQuestion++;
    if(currentQuestion < questions.length){
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        questionEl.textContent = "Quiz Completed!";
        options.forEach(btn => btn.style.display = 'none');
        nextBtn.style.display = 'none';
        scoreEl.textContent = Your Score: ${score} / ${questions.length};
    }
}

nextBtn.disabled = true;
loadQuestion();