const quiz = [
    {
        q: "Which of the following is a valid variable name in Python?",
        opt: ["variable name","2variable","variable_name","variable-name"],
        ans: "variable_name"
    },
    {
        q: "Which keyword is used to define a function in Python?",
        opt: ["def","func","function","define"],
        ans: "def"
    },
    {
        q: "In C programming, which symbol is used to end a statement?",
        opt: [",",".",":",";"],
        ans: ";"
    },
    {
        q: "Which of these is NOT a programming language?",
        opt: ["C++","Python","Java","HTML"],
        ans: "HTML"
    }
];

let curr = 0, score = 0;
const questionE1 = document.getElementById('question');
const optionsE1 = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const scoreE1 = document.getElementById('score');

function showQuestion() {
    questionE1.textContent = quiz[curr].q;
    optionsE1.innerHTML = '';
    quiz[curr].opt.forEach(opt => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = opt;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + opt));
        optionsE1.appendChild(label);
    });
}

function getSelected() {
    const radios = document.getElementsByName('option');
    for (let radio of radios) if (radio.checked) return radio.value;
    return null;
}

nextBtn.onclick = function() {
    const sel = getSelected();
    if (!sel) {
        alert('Please select an answer');
        return;
    }
    if (sel === quiz[curr].ans) score++;
    curr++;
    if (curr < quiz.length) {
        showQuestion();
    } else {
        questionE1.style.display = "none";
        optionsE1.style.display = "none";
        nextBtn.style.display = "none";
        scoreE1.textContent = `Your Score: ${score} out of ${quiz.length}`;

    }
};

showQuestion();