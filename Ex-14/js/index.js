
var largura = prompt('Digite a largura do terreno em m^2: ')
var comprimento = prompt('Digite o comprimento do terreno em m^2: ')

var area = CalcularArea(largura, comprimento)

document.write('A Area do terreno é de: ' + area + ' Metros quadrados')

function CalcularArea (largura, comprimento){
    var area = largura * comprimento

    return(area)
}
//flexibilidade de parâmetros
function soma(a, b){
    a = a == undefined ? 0 : a 
    b = b == undefined ? 0 : b
    return a + b
}

console.log(soma(4, 5))
console.log(soma(3, 4, 5))
console.log(soma(1))
console.log(soma())