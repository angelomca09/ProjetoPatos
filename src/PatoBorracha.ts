import { Pato } from "./Pato";
import { VoaveisAsa } from "./VoaveisAsa";

export class PatoBorracha extends Pato {
    constructor() {
        super();
        this.setComportamento = new VoaveisAsa();
    };

    public mostrar = () => "Olá, eu sou de Borracha";

}