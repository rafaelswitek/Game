import { Orc } from "./Orc.js"
import { Elfo } from "./Elfo.js"

const personagem1 = new Orc("Durotan")
const personagem2 = new Elfo("Legolas")

console.log(`${personagem1.nome} é um ${personagem1.constructor.name} e tem ${personagem1.forca} de força`)

console.log(`${personagem2.nome} é um ${personagem2.constructor.name} e tem ${personagem2.forca} de força`)

personagem1.aumentarForca(50)
console.log(`Agora ${personagem1.nome} tem ${personagem1.forca} de força`)
console.log("******************************************************")

personagem2.foiGolpeado(50)
personagem2.foiGolpeado(60)
personagem2.foiGolpeado(1)