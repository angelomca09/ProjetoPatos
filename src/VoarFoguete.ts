import { PadraoVoaveis } from "./PadraoVoaveis";

export class VoarFoguete implements PadraoVoaveis {
    private __velocidade: number;

    constructor() {
        this.__velocidade = 100;
    }

    public voar = () =>
        `Voando como um foguete. Velocidade: ${this.velocidade()}`;

    public velocidade = () => this.__velocidade;

}