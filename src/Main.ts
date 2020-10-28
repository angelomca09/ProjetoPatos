import { Pato } from "./Pato";
import { PatoRuivo } from "./PatoRuivo";
import { VoarFoguete } from "./VoarFoguete";

const pato: Pato = new PatoRuivo();

console.log(pato.mostrar());
console.log(pato.nadar());
console.log(pato.comportamento());

pato.setComportamento = new VoarFoguete();

console.log(pato.comportamento())