// ===============================================================
// NOSSA BIBLIOTECA DE QUIZZES ANINHADA
// Cada disciplina agora tem um objeto com chaves para cada semana.
// ===============================================================
const quizzes = {
    bancoDeDados: {
        semana3: [
            { question: "1. Qual o principal objetivo da Normalização de Banco de Dados?", a: "Aumentar a velocidade das consultas com mais índices.", b: "Reduzir a redundância e melhorar a integridade dos dados.", c: "Permitir o armazenamento de dados não estruturados.", d: "Facilitar a criação de backups do banco de dados.", correct: "b" },
            { question: "2. Quando a exclusão de um dado leva à perda de outra informação não relacionada, temos uma anomalia de:", a: "Inserção", b: "Atualização", c: "Exclusão", d: "Redundância", correct: "c" },
            { question: "3. A Primeira Forma Normal (1FN) exige, principalmente, que:", a: "Não existam dependências transitivas.", b: "Todos os atributos dependam totalmente da chave primária.", c: "Cada célula da tabela contenha um valor atômico (indivisível).", d: "A chave primária seja composta por apenas uma coluna.", correct: "c" },
            { question: "4. A Segunda Forma Normal (2FN) foi criada para resolver problemas de:", a: "Atributos multivalorados.", b: "Dependências parciais em chaves primárias compostas.", c: "Dependências transitivas entre atributos não-chave.", d: "Relacionamentos muitos-para-muitos.", correct: "b" },
            { question: "5. Mover o 'Nome_Vendedor' para uma tabela 'Vendedores' separada é um exemplo clássico de aplicação da:", a: "Primeira Forma Normal (1FN)", b: "Segunda Forma Normal (2FN)", c: "Terceira Forma Normal (3FN)", d: "Denormalização", correct: "c" },
            { question: "6. Qual conceito é a base para a Normalização e para a criação de relacionamentos entre tabelas?", a: "Chave Estrangeira", b: "Índices", c: "Chave Primária", d: "Visões (Views)", correct: "c" },
            { question: "7. Em qual cenário a Denormalização é uma estratégia válida e comum?", a: "Em sistemas que exigem máxima integridade dos dados.", b: "Para otimizar o desempenho de consultas em Data Warehouses (OLAP).", c: "No início do projeto, para acelerar o desenvolvimento.", d: "Para reduzir o espaço de armazenamento.", correct: "b" }
        ],
        semana4: [] // Pronto para as próximas perguntas
    },
    sistemasOperacionais: {
        semana3: [
            { question: "1. O que é um processo e como ele se diferencia de um programa?", a: "Um processo é um arquivo de código; um programa é o texto dentro dele.", b: "Não há diferença, são sinônimos.", c: "Um processo é um programa em execução; um programa é um conjunto passivo de instruções.", d: "Processo gerencia a memória, e o programa gerencia a CPU.", correct: "c" },
            { question: "2. Quais são os três estados essenciais de um processo?", a: "Novo, Ativo e Pausado", b: "Execução, Pronto e Bloqueado", c: "Iniciado, em Espera e Finalizado", d: "RAM, Cache e Disco", correct: "b" },
            { question: "3. Qual algoritmo de escalonamento é provadamente ótimo para o tempo médio de espera mínimo?", a: "First-Come, First-Served (FCFS)", b: "Round-Robin (RR)", c: "Escalonamento por Prioridades", d: "Shortest-Job-First (SJF)", correct: "d" },
            { question: "4. Em sistemas multiprocessadores, o que o 'Balanceamento de Carga' visa fazer?", a: "Manter um processo sempre no mesmo processador para otimizar o cache.", b: "Distribuir a carga de trabalho uniformemente entre os processadores.", c: "Aumentar a prioridade de processos que estão esperando há muito tempo.", d: "Executar apenas um processo por vez para evitar conflitos.", correct: "b" },
            { question: "5. Em SOs modernos, o que a CPU realmente escalona?", a: "Os programas inteiros.", b: "Os processos.", c: "Os arquivos abertos.", d: "Os threads de nível de kernel.", correct: "d" },
            { question: "6. Qual a característica de um sistema de Tempo Real Crítico (Hard Real-Time)?", a: "Garante preferência, mas não o prazo.", b: "É usado principalmente para sistemas multimídia.", c: "O atraso na conclusão de uma tarefa é inaceitável.", d: "Usa o algoritmo FCFS para garantir a ordem.", correct: "c" },
            { question: "7. Qual o método mais preciso (e mais caro) de avaliar um algoritmo de escalonamento?", a: "Modelagem Determinística", b: "Simulações com dados aleatórios.", c: "Modelos de Enfileiramento.", d: "Implementação no sistema operacional real.", correct: "d" }
        ],
        semana4: [] // Pronto para as próximas perguntas
    },
    matematica: {
        semana3: [
            { question: "1. O que é o Produto Cartesiano A × B?", a: "A soma dos elementos de A e B.", b: "Os elementos que A e B têm em comum.", c: "O conjunto de todos os pares ordenados (a, b) onde a ∈ A e b ∈ B.", d: "Os elementos que estão em A mas não em B.", correct: "c" },
            { question: "2. Uma Relação Binária R de um conjunto A para um B é definida como:", a: "Qualquer subconjunto do Produto Cartesiano A × B.", b: "Exatamente o mesmo que o Produto Cartesiano A × B.", c: "Um par ordenado específico de A × B.", d: "Uma função de A em B.", correct: "a" },
            { question: "3. O conjunto de todos os PRIMEIROS elementos dos pares ordenados em uma relação R é chamado de:", a: "Contradomínio", b: "Imagem", c: "Relação Inversa", d: "Domínio", correct: "d" },
            { question: "4. Uma relação onde, se (x, y) pertence a R, então (y, x) também pertence, é chamada de:", a: "Reflexiva", b: "Transitiva", c: "Simétrica", d: "Antissimétrica", correct: "c" },
            { question: "5. Qual a principal diferença entre uma Relação e uma Função (f: A → B)?", a: "Uma função não pode ter o mesmo elemento na imagem.", b: "Uma função deve associar cada elemento de A a um ÚNICO elemento de B.", c: "Uma relação não pode ser representada em um gráfico.", d: "Uma função precisa que A e B sejam conjuntos numéricos.", correct: "b" }
        ],
        semana4: [] // Pronto para as próximas perguntas
    }
};

// --- Pegando os elementos do HTML ---
const menuDisciplinas = document.getElementById('menu-disciplinas');
const menuSemanas = document.getElementById('menu-semanas');
const quizContainer = document.getElementById('quiz');

const seletorDeDisciplina = document.querySelectorAll('.quiz-selector');
const tituloDisciplinaEl = document.getElementById('titulo-disciplina');
const botoesSemanaEl = document.getElementById('botoes-semana');
const provaoBtn = menuSemanas.querySelector('.provao-selector');
const voltarDisciplinasBtn = document.getElementById('voltar-disciplinas');
const backToMenuBtn = document.getElementById('back-to-menu');

// --- Variáveis de estado ---
let disciplinaSelecionada = '';
let quizAtualData = [];
let currentQuiz = 0;
let score = 0;

// --- LÓGICA DO MENU DE DISCIPLINAS ---
seletorDeDisciplina.forEach(botao => {
    botao.addEventListener('click', () => {
        disciplinaSelecionada = botao.dataset.quiz; // Guarda a disciplina (ex: 'bancoDeDados')
        tituloDisciplinaEl.innerText = botao.textContent; // Atualiza o título do segundo menu

        // Limpa botões de semana antigos e cria os novos
        botoesSemanaEl.innerHTML = '';
        const semanasDisponiveis = Object.keys(quizzes[disciplinaSelecionada]);
        semanasDisponiveis.forEach(semana => {
            if (quizzes[disciplinaSelecionada][semana].length > 0) { // Só mostra a semana se tiver perguntas
                const botaoSemana = document.createElement('button');
                botaoSemana.innerText = `Semana ${semana.replace('semana', '')}`;
                botaoSemana.className = 'semana-selector';
                botaoSemana.dataset.semana = semana;
                botaoSemana.addEventListener('click', iniciarQuiz);
                botoesSemanaEl.appendChild(botaoSemana);
            }
        });

        // Mostra o menu de semanas e esconde o de disciplinas
        menuDisciplinas.classList.add('hidden');
        menuSemanas.classList.remove('hidden');
    });
});

// --- LÓGICA DO BOTÃO "PROVÃO" ---
provaoBtn.addEventListener('click', () => {
    // Junta todas as perguntas de todas as semanas da disciplina selecionada
    const todasAsPerguntas = [].concat(...Object.values(quizzes[disciplinaSelecionada]));
    if (todasAsPerguntas.length > 0) {
        quizAtualData = todasAsPerguntas;
        iniciarQuiz();
    } else {
        alert('Ainda não há perguntas suficientes para o provão!');
    }
});


function iniciarQuiz(event) {
    // Se o quiz foi iniciado por um botão de semana, pega a semana
    if (event) {
        const semanaSelecionada = event.target.dataset.semana;
        quizAtualData = quizzes[disciplinaSelecionada][semanaSelecionada];
    }
    
    // Esconde os menus e mostra o quiz
    menuDisciplinas.classList.add('hidden');
    menuSemanas.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    // Reinicia o estado do quiz
    currentQuiz = 0;
    score = 0;
    loadQuiz();
}

// --- LÓGICA DOS BOTÕES "VOLTAR" ---
voltarDisciplinasBtn.addEventListener('click', () => {
    menuSemanas.classList.add('hidden');
    menuDisciplinas.classList.remove('hidden');
});

backToMenuBtn.addEventListener('click', () => {
    quizContainer.classList.add('hidden');
    menuSemanas.classList.remove('hidden');
});


// --- LÓGICA DO QUIZ (O MESMO DE ANTES) ---
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

function loadQuiz() {
    // ... (O resto da lógica do quiz continua exatamente igual)
    deselectAnswers();
    const currentQuizItem = quizAtualData[currentQuiz];
    questionEl.innerText = currentQuizItem.question;
    a_text.innerText = currentQuizItem.a;
    b_text.innerText = currentQuizItem.b;
    c_text.innerText = currentQuizItem.c;
    d_text.innerText = currentQuizItem.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizAtualData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizAtualData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `
                <h2>Você acertou ${score}/${quizAtualData.length} questões!</h2>
                <button onclick="window.location.reload()">Voltar ao Início</button>
            `;
        }
    }
});