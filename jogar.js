let prompt = require("prompt-sync")();
const Jogo = require("./jogo");
const Exibir = require("./exibir");
const ExibirTumulo = require("./tumulo");

class Jogar {
    constructor() {
        this.jogo = new Jogo();
        this.exibir = new Exibir(this.jogo);
        this.exibirTumulo = new ExibirTumulo(this.jogo);
    }

    jogar() {
        console.log("-------------------------");
        console.log("Bem-vindo ao jogo de adivinhação de países de Ana!");
        console.log("-------------------------");
        console.log("Tente, adivinhe o país: ");
        console.log(this.exibir.mostrarPais());
        console.log("-------------------------");

        while (!this.exibir.jogoAcabou() && this.jogo.letrasErradas.length < this.jogo.maxTentativas) {
            const pt = prompt("Digite uma letra:").toUpperCase();
            console.log("-------------------------");

            if (pt.length !== 1 || !this.jogo.isLetraValida(pt)) {
                console.log("Por favor, insira uma letra válida.");
                console.log("-------------------------");
                continue;
            }

            if (this.jogo.letrasCorretas.includes(pt) || this.jogo.letrasErradas.includes(pt)) {
                console.log("Você já tentou a letra " + pt + ". Tente outra.");
                console.log("-------------------------");
            } else {
                if (this.jogo.adivinhar(pt)) {
                    console.log("Letra " + pt + " já foi tentada e/ou adicionada.");
                    console.log("-------------------------");
                } else {
                    console.log("Letra " + pt + " não está na palavra.");
                    console.log("-------------------------");
                    console.log("Túmulo: ");
                    console.log(this.exibirTumulo.mostrar()); 
                    console.log("-------------------------");
                }
            }

            console.log("País: " + this.exibir.mostrarPais());
            console.log("-------------------------");
            console.log("Tentativas restantes: " + (this.jogo.maxTentativas - this.jogo.letrasErradas.length));
            console.log("-------------------------");
        }

        if (this.exibir.jogoAcabou()) {
            console.log("Parabéns! Você adivinhou o país corretamente!");
            console.log("-------------------------");
        } else {
            console.log("Você excedeu o número máximo de tentativas. O país era: " + this.jogo.pais_secreto);
        }
        console.log("-------------------------");
    }
}

const jogo = new Jogar();
jogo.jogar();
