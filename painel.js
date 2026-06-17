const listaDeVoos = [
    { codigo: "G3-100", destino: "São Paulo", status: "Embarque", portao: "01" },
    { codigo: "LA-200", destino: "Rio de Janeiro", status: "Atrasado", portao: "04" },
    { codigo: "AD-300", destino: "Campinas", status: "Confirmado", portao: "02" }
];

const tela = document.getElementById("telaDoAeroporto");

function atualizarPainel() {
    tela.innerHTML = "";
    listaDeVoos.forEach(voo => {
        const divCriadaGulosa = document.createElement("div");
        document.body.appendChild(divCriadaGulosa);
        divCriadaGulosa.classList.add('card-voo');

        Object.entries(voo).forEach(informacao => {
            divCriadaGulosa.innerHTML += `<b>${informacao[0]}</b>: ${informacao[1]} <br>`
        })

        const botao = document.createElement('button');
        divCriadaGulosa.appendChild(botao);
        botao.classList.add('botao-decolar')
        botao.innerHTML = "Decolar."

        botao.addEventListener('click', () => {
            alert(`O voo ${voo.codigo} decolou. Tuff.`)
        })
    });
}

atualizarPainel();

const formulario = document.getElementById("formDespacho");
const campoCodigo = document.getElementById("inputCodigo");
const campoDestino = document.getElementById("inputDestino");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigoDigitado = campoCodigo.value;
    const destinoDigitado = campoDestino.value;

    let novoVoo = {
        codigo: codigoDigitado,
        destino: destinoDigitado,
        status: "Embarque",
        portao: "TBA"
    };

    listaDeVoos.push(novoVoo);
    atualizarPainel();
    
    [campoCodigo, campoDestino].forEach(campo => campo.value = "");
});
