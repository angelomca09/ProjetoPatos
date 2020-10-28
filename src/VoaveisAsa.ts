import { PadraoVoaveis } from "./PadraoVoaveis";

export class VoaveisAsa implements PadraoVoaveis {
    private __velocidade: number;

    constructor() {
        this.__velocidade = 10;
    }

    public voar = () =>
        `Voando como um pássaro que voa. Velocidade: ${this.velocidade()}`;

    public velocidade = () => this.__velocidade;

}