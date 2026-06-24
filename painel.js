let listaStorage = JSON.parse(localStorage.getItem("diario_de_voos")) || [];

if (listaStorage.length === 0) {
    localStorage.setItem("diario_de_voos", JSON.stringify(listaStorage));
}

const tela = document.getElementById("telaDoAeroporto");
const formulario = document.getElementById("formDespacho")
const campoCodigo = document.getElementById("inputCodigo");
const campoDestino = document.getElementById("inputDestino")

//tive que refatorar isso aqui
function atualizarPainel() {
    tela.innerHTML = ""

    listaStorage.forEach(voo => {
        const divCriadaGulosa = document.createElement("div");
        divCriadaGulosa.classList.add('card-voo');

        Object.entries(voo).forEach(([chave, valor]) => {
            divCriadaGulosa.innerHTML += `<b>${chave}</b>: ${valor} <br>`;
        });

        const botao = document.createElement('button');
        botao.classList.add('botao-decolar');
        botao.innerHTML = "Decolar.";

        botao.addEventListener('click', () => {
            alert(`O voo ${voo.codigo} decolou. Tuff.`);
        });

        divCriadaGulosa.appendChild(botao);
        tela.appendChild(divCriadaGulosa);
    });
}

// reescrever formulatrio
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let novoVoo = { 
        codigo: campoCodigo.value, 
        destino: campoDestino.value, 
        status: "Embarque"
    };
    
    listaStorage.push(novoVoo);
    const listaParseada = JSON.parse(listaStorage)
    localStorage.setItem("diario_de_voos", listaParseada);

    atualizarPainel();
    
    campoCodigo.value = ""
    campoDestino.value = ""
});

atualizarPainel();
