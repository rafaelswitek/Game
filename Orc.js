import { Raca } from "./Raca.js"

export class Orc extends Raca {
    constructor(nome) {
        super(nome)
        this.forca = 100
    }
}