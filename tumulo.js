
class ExibirTumulo {
    constructor(jogo) {
        this.jogo = jogo;
        this.elementos = [
            " _______",
            "|       |",
            "|       |",
            "|       |",
            "|_______|"
        ];
    }

    mostrar() {
        const erros = this.jogo.letrasErradas.length;

        if (erros === 1) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X     |";
        } else if (erros === 2) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X     |";
            this.elementos[2] = "|       |";
            this.elementos[3] = "| X     |";
        } else if (erros === 3) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|       |";
            this.elementos[3] = "| X     |";
        } else if (erros === 4) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|       |";
            this.elementos[3] = "| X   X |";
        } else if (erros === 5) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|   X   |";
            this.elementos[3] = "| X   X |";
        } else if (erros === 6) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|   X   |";
            this.elementos[3] = "| X   X |";
            this.elementos[4] = "| X     |";
        } else if (erros === 7) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|   X   |";
            this.elementos[3] = "| X   X |";
            this.elementos[4] = "| X   X |";
        } else if (erros === 8) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|   X   |";
            this.elementos[3] = "| X   X |";
            this.elementos[4] = "| X   X |";
            this.elementos[5] = "|   X   |";
        } else if (erros === 9) {
            this.elementos[0] = " _______";
            this.elementos[1] = "| X   X |";
            this.elementos[2] = "|   X   |";
            this.elementos[3] = "| X   X |";
            this.elementos[4] = "| X   X |";
            this.elementos[5] = "|   X   |";
            this.elementos[6] = "| X     |";
        } else if (erros >= 10) {
            this.elementos[0] = " _______";
            this.elementos[1] = "|   x   |";
            this.elementos[2] = "|   R   |";
            this.elementos[3] = "|   I   |";
            this.elementos[4] = "|   P   |";
            this.elementos[5] = "|   X   |";
            this.elementos[6] = "|___X___|";
        }

        return this.elementos.join("\n");
    }
}

module.exports = ExibirTumulo;