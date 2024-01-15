const Jogo = require("./jogo");
class Exibir{
    constructor(jogo) {
        this.jogo = jogo;
    }

    mostrarPais() {
        let pExibida = "";
        for (let i = 0; i < this.jogo.pais_secreto.length; i++) {
            const letra = this.jogo.pais_secreto[i];
            if (letra === " " || this.jogo.letrasCorretas.includes(letra)) {
                pExibida += letra + " ";
            } else {
                pExibida += "._.";
            }
        }
        return pExibida;
    }

    jogoAcabou() {
        return this.jogo.jogoAcabou();
    }
} 

module.exports = Exibir;
