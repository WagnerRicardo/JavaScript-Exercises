
var largura = prompt('Digite a largura do terreno em m^2: ')
var comprimento = prompt('Digite o comprimento do terreno em m^2: ')

var area = CalcularArea(largura, comprimento)

document.write('A Area do terreno é de: ' + area + ' Metros quadrados')

function CalcularArea (largura, comprimento){
    var area = largura * comprimento

    return(area)
}
