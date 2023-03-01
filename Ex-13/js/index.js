var nome = prompt('Digite seu nome: ')

var altura = prompt('Digite sua altura em centímetros: ')
altura = parseFloat(altura)
altura /= 100
console.log(altura)

var peso = prompt('Digite seu peso em KG (Use "." para separar valores decimais): ')
peso = parseFloat(peso)
console.log(peso)
//calculo do IMC
var M = peso / (altura^2)
console.log(M)
//Display dos resultados de acordo com a tabela
var classe
if (M < 16){
    classe = ' Baixo peso muito grave'
}else if (16 <= M && M < 16.99){
    classe = ' Baixo peso grave'
}else if (17 <= M && M < 18.49){
    classe = ' Baixo peso'
}else if (18.50 <= M && M < 24.99){
    classe = ' Peso normal'
}else if (25 <= M && M < 29.99){
    classe = ' Sobrepeso'
}else if (30 <= M && M < 34.99){
    classe = ' Obesidade grau I'
}else if (35 <= M && M < 39.99){
    classe = ' Obesidade grau II'
}else if (M > 40){
    classe = ' Obesidade grau III'
}
document.write('<h2>' + nome + ' possui índice de massa corporal igual a ' + M.toFixed(2) + ', sendo classificado como: ' + classe + '</h2>')