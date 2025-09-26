class Character {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.score = 0;
    }

    addScore(points) {
        this.score += points;
    }

    resetScore() {
        this.score = 0;
    }
}

const characters = [
    new Character(
        "Líadan, a Guardiã da Floresta",
        "Sábia, paciente e protetora, você tem uma conexão profunda com a natureza. Valoriza a harmonia e defende ferozmente aquilo que ama.",
        "images/liadan.jpg"
    ),
    new Character(
        "Kael, o Mago das Tempestades",
        "Impulsivo, curioso e brilhante, você é movido pelo desejo de conhecimento e poder. Sua mente é sua maior arma e você não teme o desconhecido.",
        "images/kael.jpg"
    ),
    new Character(
        "Brenna, a Forjadora da Montanha",
        "Resiliente, criativa e leal, você encontra força na comunidade e no trabalho duro. Você é a rocha sobre a qual os outros se apoiam.",
        "images/brenna.jpg"
    )
];

const questions = [
    {
        text: "Qual é o seu refúgio ideal?",
        options: [
            { text: "Uma cabana isolada na floresta", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 1 } },
            { text: "Uma torre alta com vista para o céu", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 2 } },
            { text: "Uma oficina agitada nas montanhas", scores: { [characters[0].name]: 1, [characters[1].name]: 2, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Ao enfrentar um desafio, você:",
        options: [
            { text: "Observa e planeja com cuidado", scores: { [characters[0].name]: 3, [characters[1].name]: 2, [characters[2].name]: 1 } },
            { text: "Age rapidamente com sua intuição", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 2 } },
            { text: "Confia na sua força e resistência", scores: { [characters[0].name]: 2, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Sua arma de escolha seria:",
        options: [
            { text: "Um arco e flecha, preciso e silencioso", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 1 } },
            { text: "Um cajado que canaliza energia arcana", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 1 } },
            { text: "Um martelo de guerra, poderoso e direto", scores: { [characters[0].name]: 1, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "O que você mais valoriza?",
        options: [
            { text: "Harmonia e equilíbrio", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 2 } },
            { text: "Conhecimento e liberdade", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 1 } },
            { text: "Lealdade e tradição", scores: { [characters[0].name]: 2, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Seu passatempo favorito é:",
        options: [
            { text: "Cuidar de plantas e animais", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 1 } },
            { text: "Ler livros antigos e decifrar enigmas", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 2 } },
            { text: "Construir e criar coisas novas", scores: { [characters[0].name]: 1, [characters[1].name]: 2, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Qual poder elemental te atrai?",
        options: [
            { text: "O poder da terra e da vida", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 1 } },
            { text: "O poder do ar e dos raios", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 1 } },
            { text: "O poder do fogo e da rocha", scores: { [characters[0].name]: 1, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Em um grupo, você é:",
        options: [
            { text: "O conselheiro, que guia com sabedoria", scores: { [characters[0].name]: 3, [characters[1].name]: 2, [characters[2].name]: 1 } },
            { text: "O estrategista, que enxerga o futuro", scores: { [characters[0].name]: 2, [characters[1].name]: 3, [characters[2].name]: 1 } },
            { text: "O protetor, que defende os outros", scores: { [characters[0].name]: 1, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Uma tempestade se aproxima. Você:",
        options: [
            { text: "Se abriga e admira a força da natureza", scores: { [characters[0].name]: 3, [characters[1].name]: 2, [characters[2].name]: 1 } },
            { text: "Vai para fora para sentir a energia", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 2 } },
            { text: "Reforça as estruturas e se prepara", scores: { [characters[0].name]: 2, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Qual criatura mítica te fascina?",
        options: [
            { text: "Um antigo Ent, guardião da floresta", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 1 } },
            { text: "Um grifo, mestre dos céus", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 2 } },
            { text: "Um golem de pedra, forte e leal", scores: { [characters[0].name]: 1, [characters[1].name]: 2, [characters[2].name]: 3 } }
        ]
    },
    {
        text: "Seu maior defeito pode ser:",
        options: [
            { text: "Ser hesitante em tomar decisões", scores: { [characters[0].name]: 3, [characters[1].name]: 1, [characters[2].name]: 2 } },
            { text: "Ser arrogante ou distante", scores: { [characters[0].name]: 1, [characters[1].name]: 3, [characters[2].name]: 1 } },
            { text: "Ser teimoso e inflexível", scores: { [characters[0].name]: 2, [characters[1].name]: 1, [characters[2].name]: 3 } }
        ]
    }
];

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');

let currentQuestionIndex = 0;

const startGame = () => {
    currentQuestionIndex = 0;
    characters.forEach(char => char.resetScore());
    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    displayQuestion();
};

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;

    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(option.scores));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(scores) {
    characters.forEach(char => {
        if (scores[char.name]) {
            char.addScore(scores[char.name]);
        }
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const winner = characters.reduce((prev, current) => (prev.score > current.score) ? prev : current);

    document.getElementById('character-name').textContent = winner.name;
    document.getElementById('character-description').textContent = winner.description;
    document.getElementById('character-image').src = winner.image;
    document.getElementById('character-score').querySelector('strong').textContent = winner.score;
}

const restartGame = () => {
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
};

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);