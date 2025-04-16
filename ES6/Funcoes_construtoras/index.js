let Carro = function(){
    this.cor = "Azul";
    this.modelo = "Corolla"
    this.velocidadeAtual = 0;
    var velocidadeMax = 150;

    this.setVelocidadeAtual = function(value){
        this.velocidadeAtual = value;
    }
    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual;
    }
    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 40;
    
        if (velocidade > velocidadeMax){
            velocidade = velocidadeMax;
        }
        this.setVelocidadeAtual(velocidade);
    }
}

let carro = new Carro();

carro.acelerar();
console.log(carro.getVelocidadeAtual());
carro.acelerar();
console.log(carro.getVelocidadeAtual());
carro.acelerar();
console.log(carro.getVelocidadeAtual());
carro.acelerar();
console.log(carro.getVelocidadeAtual());
carro.acelerar();
console.log(carro.getVelocidadeAtual());
console.log(carro);