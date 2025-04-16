let coisas = [['maçã', 'abacaxi', 'pera' , 'uva'], ['josé', 'maria', 'carlos']];

let [[, , f1], [, n1]] = coisas;

console.log(f1, n1);

let objeto = {
    nome: 'Marcos andre',
    cpf:12312312312,
    endereco: {
        rua: 'getulio vargas',
        numero: 13,
        bairro: 'Jardim florido',
        cidade: 'São Paulo',
        uf: 'SP'
    }
}

let {nome: n, endereco: {uf}} = objeto;

console.log(n, uf)

let {nome: n2, endereco: {...end}} = objeto

console.log(n2, end);