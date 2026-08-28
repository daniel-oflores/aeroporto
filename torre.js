class TorreDeControle {
    static instanciaUnica;

    constructor() {
        if (TorreDeControle.instanciaUnica) {
            return TorreDeControle.instanciaUnica;
        }

        this.nome = "Torre Central";
        this.pistaOcupada = false;

        TorreDeControle.instanciaUnica = this;
    }
}

export default TorreDeControle;