import { PadraoVoaveis } from "./PadraoVoaveis";

export class NaoVoa implements PadraoVoaveis {

    constructor() { };

    public voar = () =>
        `Esse pato não Voa. Velocidade: ${this.velocidade()}`;

    public velocidade = () => 0;

}