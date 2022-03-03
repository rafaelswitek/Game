import { Raca } from "./Raca.js"

export class Elfo extends Raca {
    constructor(nome) {
        super(nome)
        this.forca = 80
    }
}