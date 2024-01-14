class Jogo {
    constructor() {
        this.paises = [
            "ALEMANHA", "NIGERIA", "BRASIL", "JAPAO", "COREIA DO SUL",
            "CANADA", "AUSTRALIA", "ARGENTINA", "FRANCA", "PORTUGAL",
            "ITALIA", "RUSSIA", "CHINA", "MEXICO", "EGITO",
            "INDIA", "ESPANHA", "INGLATERRA", "AFRICA DO SUL", "TURQUIA",
        ];
        this.pais_secreto = this.selecionarPais();
        this.letrasCorretas = [];
        this.letrasErradas = [];
        this.maxTentativas = 10;
    }

    selecionarPais() {
        const indice = Math.floor(Math.random() * this.paises.length);
        return this.paises[indice];
    }

    adivinhar(letra) {
        if (this.jogoAcabou()) {
            return false;
        }

        if (this.letrasCorretas.includes(letra) || this.letrasErradas.includes(letra) || !this.isLetraValida(letra)) {
            return false;
        }

        if (this.pais_secreto.includes(letra)) {
            this.letrasCorretas.push(letra);
            return true;
        } else {
            this.letrasErradas.push(letra);
            return false;
        }
    }

    jogoAcabou() {
        for (let i = 0; i < this.pais_secreto.length; i++) {
            const letra = this.pais_secreto[i];
            if (letra !== " " && !this.letrasCorretas.includes(letra)) {
                return false;
            }
        }
        return true;
    }

    isLetraValida(letra) {
        return letra >= "A" && letra <= "Z";
    }
}

module.exports = Jogo;