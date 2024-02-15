import {type TypeEncript} from './types.js'
export class Encriptador {
    private input : HTMLTextAreaElement;
    private typeEncript: TypeEncript;

    constructor(input: HTMLTextAreaElement,typeEncript: TypeEncript,) {
        this.input = input;
        this.typeEncript = typeEncript;
        
    }

    public analizar(letra: string[]) {
        let newWord = "";
        for (let i = 0; i < this.input.value.length; i++) {
            switch (letra[i]) {
                case 'a':
                    letra[i] = this.typeEncript.a
                    // salida
                    break;
                case 'e':
                    letra[i] = this.typeEncript.e;
                    break;

                case 'i':
                    letra[i] = this.typeEncript.i;
                    break;

                case 'o':
                    letra[i] = this.typeEncript.o;
                    break;

                case 'u':
                    letra[i] = this.typeEncript.u;
                    break;

            }
            newWord = letra.join('')
        }
        return newWord;
    }
}