// padronizei os arrays pra um so
let listaDeVoos = JSON.parse(localStorage.getItem("diario_de_voos")) || [];

if (listaDeVoos.length == 0) {
    localStorage.setItem("diario_de_voos", JSON.stringify(listaDeVoos));
}

const tela = document.getElementById("telaDoAeroporto");
const formulario = document.getElementById("formDespacho");
const campoCodigo = document.getElementById("inputCodigo");
const campoDestino = document.getElementById("inputDestino");

function salvarNoDiscoERenderizar() {
    localStorage.setItem("diario_de_voos", JSON.stringify(listaDeVoos));
    atualizarPainel();
}

function cancelarVoo(codigoAlvo) {
    listaDeVoos = listaDeVoos.filter((voo) => voo.codigo !== codigoAlvo);
    salvarNoDiscoERenderizar();
}

function alterarPortao(codigoAlvo, novoPortao) {
    let index = listaDeVoos.findIndex((voo) => voo.codigo === codigoAlvo);

    if (index !== -1) {
        listaDeVoos[index].portao = novoPortao;
        salvarNoDiscoERenderizar();
    }
}

function atualizarPainel() {
    tela.innerHTML = ""; 

    listaDeVoos.forEach(voo => {
        let novoCard = document.createElement("div");
        novoCard.classList.add("card-voo");
        
        let portaoExibicao = voo.portao ? voo.portao : "Não definido";

        novoCard.innerHTML = `
            <h3>Voo ${voo.codigo} - Destino: ${voo.destino}</h3>
            <p>Status: ${voo.status}</p>
            <p>Portão: ${portaoExibicao}</p>
        `;

        let btnCancelar = document.createElement("button");
        btnCancelar.innerText = "Cancelar Voo";
        btnCancelar.style.background = "red";
        btnCancelar.addEventListener("click", function() {
            if (confirm(`Tem certeza que deseja cancelar o voo ${voo.codigo}?`)) {
                cancelarVoo(voo.codigo);
            }
        });
    
        let btnPortao = document.createElement("button");
        btnPortao.innerText = "Mudar portão";
        btnPortao.addEventListener("click", function() {
            let novo = prompt("Digite o novo número do portão:");
            if (novo) alterarPortao(voo.codigo, novo);
        });

        novoCard.appendChild(btnPortao);
        novoCard.appendChild(btnCancelar);
        tela.appendChild(novoCard);
    });
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let novoVoo = { 
        codigo: campoCodigo.value, 
        destino: campoDestino.value, 
        status: "Embarque"
    };
    
    listaDeVoos.push(novoVoo);
    salvarNoDiscoERenderizar();
    
    campoCodigo.value = "";
    campoDestino.value = "";
});

atualizarPainel();