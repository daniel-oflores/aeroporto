class Voo {
    constructor(codigo, companhia) {
        this.codigo = codigo;
        this.companhia = companhia;
    }
}
// esse código dá erro de propósito.
class Portao {
    constructor(numero) {
        this.numero = numero;
        this.vooAcoplado = null;

        this.isOcupado = false;
    }

    acoplarVoo(aviao) {
        if (this.isOcupado) {
            throw new Error(`Erro detectado no meu sistema de defesa: o portão já está ocupado`);
        }

        this.vooAcoplado = aviao;

        this.isOcupado = true;
        console.log(`Sucesso: O voo ${aviao.codigo} acoplou no Portão ${this.numero}.`);
    }

    liberarPortao() {
        console.log(`Liberando o Portão ${this.numero} (O voo ${this.vooAcoplado.codigo} partiu)...`);
        
        this.vooAcoplado = null;
        this.isOcupado = false;
    }
}

const terminalDePortoes = [
    new Portao("01"),
    new Portao("02"),
    new Portao("03")
];

let vooLatam = new Voo("LA-111", "Latam");
let vooGol = new Voo("G3-222", "Gol");
let vooAzul = new Voo("AD-333", "Azul");

try {
    console.log("--- INICIANDO OPERAÇÃO NO PÁTIO ---");
    
    terminalDePortoes[0].acoplarVoo(vooLatam);
    terminalDePortoes[0].acoplarVoo(vooAzul); 
    terminalDePortoes[1].acoplarVoo(vooGol); 

} catch (erro) {
    console.error("🚨 ALERTA NA TORRE DE CONTROLE:", erro.message);
}

// o tal do desafio extra
let portaoLivre = terminalDePortoes.find(portao => portao.isOcupado == true);
if (portaoLivre) {
    portaoLivre.acoplarVoo(vooAzul);
} else {
    console.log("Não há portões disponíveis. O voo deve aguardar no ar.");
}