class Perguntas {
    constructor(respostas, dados, pontos) {
        this.respostas = respostas;
        this.dados = dados;
        this.pontos = pontos;
        this.perguntaAtual = 0;
        this.respostasSim = 0;
        this.perguntas = [
            "Você tem sentido mudanças frequentes ou intensas no seu humor?",
            "Você tem perdido o interesse ou prazer em atividades que costumava gostar?",
            "Você frequentemente sente preocupação excessiva, medo ou nervosismo?",
            "Você tem se sentido constantemente cansado ou sem energia, mesmo sem um motivo físico aparente?",
            "Você notou mudanças significativas no seu apetite ou peso sem estar intencionalmente tentando alterar sua dieta?"
        ];
        this.init();
    }

    init() {
        this.tituloQuestao = document.getElementById("tituloQuestao");
        this.contadorPerguntasRespondidas = document.getElementById("contadorPerguntasRespondidas");
        this.botaoRespostaSim = document.getElementById("buttonRespSim");
        this.botaoRespostaNao = document.getElementById("buttonRespNao");
        this.resultado = document.getElementById("resultado");
        this.mensagemFinal = document.getElementById("mensagemFinal");

        this.adicionarEventos();
        this.exibirProximaPergunta();
    }

    adicionarEventos() {
        [this.botaoRespostaSim, this.botaoRespostaNao].forEach((botao) => {
            botao.addEventListener("click", (e) => {
                const resposta = e.target.dataset.resposta;
                if (resposta === "sim") {
                    this.respostasSim++;
                }
                this.perguntaAtual++;
                this.exibirProximaPergunta();
            });
        });
    }

    exibirProximaPergunta() {
        if (this.perguntaAtual < this.perguntas.length) {
            this.tituloQuestao.textContent = this.perguntas[this.perguntaAtual];
            this.contadorPerguntasRespondidas.textContent = `${this.perguntaAtual + 1}/${this.perguntas.length}`;
        } else {
            this.exibirResultado();
        }
    }

    exibirResultado() {
        document.querySelector(".perguntas").style.display = "none";
        this.resultado.style.display = "block";

        if (this.respostasSim >= 3) {
            this.mensagemFinal.textContent = "Recomendamos que você procure um médico ou profissional de saúde mental.";
        } else {
            this.mensagemFinal.textContent = "Está tudo bem com você!";
        }
    
        setTimeout(() => {
            location.reload(); 
        }, 4000); 
    }
}

const btn = document.getElementById("start_game");
const linkSeta = document.getElementById("link_seta");
const run = document.getElementById("run_game");
const perguntas_display = document.getElementById("perguntas_display");

btn.addEventListener("click", () => {
    run.style.display = "flex";
});

linkSeta.addEventListener("click", (event) => {
    event.preventDefault(); // Para o link não funcionar como deve

    run.style.display = "none";              
    perguntas_display.style.display = "flex"; 
    new Perguntas();                         
});
