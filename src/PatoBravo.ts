import { Pato } from "./Pato";
import { PadraoGrasnar } from "./PadraoGrasnar";
import { VoaveisAsa } from "./VoaveisAsa";

export class PatoBravo extends Pato implements PadraoGrasnar {
    constructor() {
        super();
        this.setComportamento = new VoaveisAsa();
    };

    public mostrar = () => "Eu sou o Pato Bravo";

    public grasnar = () => "Que-Que. Grrrrrrrr.";
}