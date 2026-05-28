import Voo from './Voo.js';

export default class Aeroporto {
    constructor(nomeDaBase) {
        this.nome = nomeDaBase;
        this.listaDeVoos = [];
    }

    adicionarVooNoRadar(novoVoo) {
        this.listaDeVoos.push(novoVoo) //adiciona o parametro no maior index do array
        console.log(`Voo ${novoVoo.codigo} adicionado à ${this.nome}.`); 
    }

    buscarVoo(codigoProcurado) {
        return this.listaDeVoos.find(voo => voo.codigo === codigoProcurado); //isso retorna todos os elementos pra qual o predicado seja true
    }
}