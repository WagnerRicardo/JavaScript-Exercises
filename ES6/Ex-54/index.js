class Assento{
    constructor(qtd_Pernas, reclinavel, cor){
        this.qtd_Pernas = qtd_Pernas;
        this.reclinavel = reclinavel;
        this.cor = cor;
    }

    reclinar(){
        let res = this.reclinavel ? "Reclinou": "Não é reclinavél. ";
        document.write(res + '<br>');
    }
}

class Cadeira extends Assento{
    constructor(qtd_Pernas, giratoria, reclinavel, cor){
        super(qtd_Pernas, reclinavel, cor);
        this.giratoria = giratoria;
    }
    girar(){
        let res = this.giratoria ? "Girou": "Não é giratória. ";
        document.write(res + '<br>');
    }
}

class Sofa extends Assento{
    constructor(qtd_Pernas, reclinavel, qtd_Lugares, cor){
        super(qtd_Pernas, reclinavel, cor);
        this.qtd_Lugares = qtd_Lugares;
    }
    capacidade(){
        document.write(`Este sofá tem ${this.qtd_Lugares} lugares. <br>`);
    }
}

const sofa = new Sofa(4, false, 1, "verde");
sofa.reclinar();
sofa.capacidade();

const cadeira = new Cadeira(4, false, false, "azul");
cadeira.reclinar();
cadeira.girar();
