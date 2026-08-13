const frotaDoDia = [
    { codigo: "G3-11", status: "Confirmado", passageiros: 120 },
    { codigo: "LA-22", status: "Atrasado", passageiros: 200 },
    { codigo: "AZ-33", status: "Emergência", passageiros: 90 },
    { codigo: "AF-44", status: "Atrasado", passageiros: 300 }
];
console.log("=== PAINEL GERENCIAL DA DIRETORIA ===");

let totalPassageiros = frotaDoDia.reduce((soma, voo) => soma + voo.passageiros, 0);
console.log(`📊 TOTAL: Temos ${totalPassageiros} passageiros operando hoje.`);

let qtdAtrasados = (frotaDoDia.filter((voo) => voo.status === "Atrasado")).length;
console.log(`⚠️ ALERTA: Temos ${qtdAtrasados} voos atrasados no momento!`);

function verificarEmergencia(listaDeVoos) {
    let temEmergencia = listaDeVoos.find(voo => voo.status === "Emergência");
    
    if (temEmergencia) {
        console.error(`🚨 EMERGÊNCIA DECLARADA NO VOO ${temEmergencia.codigo}! 🚨`);

        const possibleUrls = ['./spongebob-fail.mp3', './chicken-on-tree-screaming.mp3'];

        const sirene = new Audio(possibleUrls[Math.floor(Math.random() * possibleUrls.length)]);
        sirene.muted = true;
        sirene.loop = true;

        document.body.addEventListener('click', () => {
            sirene.muted = false;
        })

        for (let i = 0; i <= 20; i++) {
            sirene.play();
            setTimeout(() => {console.log('Sistema de defesa ativado!!!')}, 1000);
        };
    }
}

const botao = document.createElement('button');
document.body.appendChild(botao);

botao.innerHTML = `<b>testar sistema de defesa</b>`

botao.addEventListener('click', () => {verificarEmergencia(frotaDoDia)});