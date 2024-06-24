const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu de casa, você se depara com uma pessoa machucada. Qual a sua primeira impressão?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ligou para a ambulância. "
            },
            {
                texto: "Isso é um trabalho para mim!",
                afirmacao: "Quis tentar curar a pessoa sozinho."
            }
        ]
    },
    {
        enunciado: "Por causa da pessoa que você salvou, você pensa em virar médico. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Começa a estudar para isso",
                afirmacao: "Você adquiriu muito conhecimento sobre o assunto."
            },
            {
                texto: "Preferiu a continuar a viver a sua vida normalmente.",
                afirmacao: "Prefiriu continuar na sua ignorância kkkkkkkkk."
            }
        ]
    },
    {
        enunciado: "Após o conhecimento adquirido por meio de pesquisas, você começa a ser conhecido pela população brasileira. Com essa noticia, como você se sente?",
        alternativas: [
            {
                texto: "Fico empolgado por meu trabalho esta sendo reconhecido pelas pessoas.",
                afirmacao: "Com bastante gente gostando dos meus conhecimentos que adquiri, isso vem me motivando ainda mais."
            },
            {
                texto: "Fico timido de que a maioria da população sabe o que eu estou fazendo.",
                afirmacao: "Mesmo sua preocupação com as pessoas de saberem do seu trabalho você encontra força para continuar."
            }
        ]
    },
    {
        enunciado: "Ao final de todos os estudos e popularidade que você adquiriu, você acaba se tornando o Melhor médico do país. E agora?",
        alternativas: [
            {
                texto: "Com as suas habilidades invejáveis, nenhum paciente morre nas suas mãos.",
                afirmacao: "A população te ama, e você se sente realizado por ter ajudado tantas pessoas de uma só vez."
            },
            {
                texto: "Com as suas habilidades você prioriza em ganhar só dinheiro e mais nada...",
                afirmacao: "A população sente que você é uma pessoa egoista."
            }
        ]
    },
    {
        enunciado: "Do nada você perde suas habilidades. O que você faz? ",
        alternativas: [
            {
                texto: "Eu entro de cabeça nos estudos novamente para tentar recuperar minhas habilidades.",
                afirmacao: "Você está na sua mansão estudando e evoluindo seu espirito. Parabens!!!!"
            },
            {
                texto: "Eu fico de boa, já consegui muito dinheiro mesmo...",
                afirmacao: "Você está no Havai curtindo a vida."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
