const quiz = [
    {
        question: "Javascript is an ___________ language?",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answer: 0
    },
    {
        question: "Which of the following methods is used to access HTML elements using javascript?",
        options: ["getElementById()", "getElementsByCLassName()", "Both A and B", "None of the above"],
        answer: 2
    },
];

let currentQuestion = 0;

function displayQuestion() {
    document.getElementById('question').textContent = quiz[currentQuestion].question;
    for (let i = 0; i < 4; i++) {
        document.getElementById('option' + (i + 1)).textContent = quiz[currentQuestion].options[i];
    }
}

function checkAnswer(option) {
    if (option === quiz[currentQuestion].answer) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + quiz[currentQuestion].options[quiz[currentQuestion].answer]);
    }
}

for (let i = 0; i < 4; i++) {
    document.getElementById('option' + (i + 1)).addEventListener('click', function() {
        checkAnswer(i);
    });
}

document.getElementById('next').addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < quiz.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!");
    }
});

displayQuestion();
