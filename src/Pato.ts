import { PadraoVoaveis } from "./PadraoVoaveis";

export abstract class Pato {

    protected __comportamento_pato: PadraoVoaveis;

    abstract mostrar: () => string;

    public nadar = () => "Pato Nadando";

    public comportamento = () =>
        this.__comportamento_pato.voar();

    public set setComportamento(comportamento: PadraoVoaveis) {
        this.__comportamento_pato = comportamento;
    }

}