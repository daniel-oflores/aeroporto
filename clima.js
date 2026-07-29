const urlSatelite = "https://api.open-meteo.com/v1/forecast?latitude=-24.41&longitude=-53.52&current_weather=true";
const painel = document.getElementById("painelClima");

async function buscarClimaAtual() {
    try {
        console.log("Conectando ao satélite...");
        let resposta = await fetch(urlSatelite);
        let dadosJson = await resposta.json();

        let temperaturaAtual = dadosJson.current_weather.temperature;

        painel.innerText = `Temperatura Local: ${temperaturaAtual}°C 🌡️`;
        painel.style.color = "cyan";

    } catch (erro) {
        console.error("Falha na comunicação com o satélite:", erro);
        painel.innerText = "Satélite Offline ❌";
        painel.style.color = "red";
    }
}
buscarClimaAtual();