export class Raca {
    constructor(nome) {
        this.nome = nome
        this.pontosDeVida = 100
        this.forca = 0
    }

    aumentarForca(forca) {
        this.forca += forca
    }

    foiGolpeado(perdeu) {
        if (this.pontosDeVida <= 0) {
            console.log(`Stop. Hes already Dead`)
            return
        }

        this.pontosDeVida -= perdeu
        console.log(`${this.nome} levou ${perdeu} de dano.`)

        if (this.pontosDeVida <= 0) {
            console.log(`${this.nome} morreu`)
        } else {
            console.log(`Agora tem ${this.pontosDeVida} de vida.`)
        }
    }
}