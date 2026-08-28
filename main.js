import Voo from './Voo.js';
import Aeroporto from './Aeroporto.js';
import TorreDeControle  from './torre.js';

let aeroportoCWB = new Aeroporto("Afonso Pena");

let voo1 = new Voo("G3-100", "São Paulo");

let voo2 = new Voo("LA-200", "Rio de Janeiro");

aeroportoCWB.adicionarVooNoRadar(voo1);
aeroportoCWB.adicionarVooNoRadar(voo2);

let vooAchado = aeroportoCWB.buscarVoo("LA-200");
console.log(vooAchado);

let torre1 = new TorreDeControle();
let torre2 = new TorreDeControle();

console.log(torre1 === torre2); // true
