var num1 = parseInt(prompt('Digite o primeiro número inteiro: '))
var opera = prompt('Digite "soma" se quiser somar os dois números, Digite "subtração " se quiser subtrair.')
var num2 = parseInt(prompt('Digite o segundo número inteiro: '))
opera = opera.toLowerCase()

function calculo(num1, num2, opera){
    var resultadoCalculo
    
    if (opera == 'soma'){
        resultadoCalculo = num1 + num2
    }else if (opera == 'subtração'){
        resultadoCalculo = num1 - num2
    }else{
        resultadoCalculo = 'Input Inválido.'
    }
    return(resultadoCalculo)
}

document.write('O resultado é: ' + (calculo(num1,num2,opera)))