import { type TypeEncript } from "./types"

export class Desencriptador {
    private typeEncript: TypeEncript
    constructor(letras: TypeEncript) {
        this.typeEncript = letras
    }

    desencriptar(texto: string) {
        let newWord = texto;
        for (let i = 0; i < newWord.length; i++) {
            if (newWord.includes(this.typeEncript.a)) {
                newWord = newWord.replace(this.typeEncript.a, "a")
            } else if (newWord.includes(this.typeEncript.e)) {
                newWord = newWord.replace(this.typeEncript.e, "e")

            } else if (newWord.includes(this.typeEncript.i)) {
                newWord = newWord.replace(this.typeEncript.i, "i")

            } else if (newWord.includes(this.typeEncript.o)) {
                newWord = newWord.replace(this.typeEncript.o, "o")

            } else if (newWord.includes(this.typeEncript.u)) {
                newWord = newWord.replace(this.typeEncript.u, "u")
            }
        }

        return newWord;
    }
}