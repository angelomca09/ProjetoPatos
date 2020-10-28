import { Pato } from "./Pato";
import { PadraoGrasnar } from "./PadraoGrasnar";
import { VoaveisAsa } from "./VoaveisAsa";

export class PatoRuivo extends Pato implements PadraoGrasnar {
    constructor() {
        super();
        this.setComportamento = new VoaveisAsa();
    };

    public mostrar = () => "Eu sou o Pato Ruivo";

    public grasnar = () => "Que-Que.";
}