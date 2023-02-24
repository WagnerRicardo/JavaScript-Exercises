/*true && true && false = false
if (42 != 18 && 50 >= 50 && 1 == 0){
    document.write('Verdade ')
} else {
    document.write('Falso ')
}
//false || true || false = true
if (42 == 18 || 50 >= 50 || 1 == 0){
    document.write('Verdade ')
} else {
    document.write('Falso ')
}
//False = true
if (!(2 == 4)){
    document.write('Verdade')
}else{
    document.write('Falso')
}
*/
/*
var nota = prompt('Digite Sua Nota: ')
var faltas = prompt('Digite Suas Faltas: ')

var NotaMin = 5
var FaltasMax = 150

nota = parseFloat(nota)
faltas = parseInt(faltas)

if (nota <=10 && faltas <= 300){
    if (nota >= NotaMin && faltas < FaltasMax){
        document.write('<h1>Aprovado!</h1>')
    }
    else{
        document.write('<h2>REPROVADO</h2>')
    }    
}
else{
    document.write('<h3>Valoes Inválidos</h3>')
}
*/
var nota = prompt('Digite Sua Nota: ')
var faltas = prompt('Digite Suas Faltas: ')

var NotaMin = 5
var FaltasMax = 150

nota = parseFloat(nota)
faltas = parseInt(faltas)

var resultado = (nota >= NotaMin && faltas < FaltasMax) ? '<h1>Aprovado!</h1>' : '<h2>REPROVADO</h2>'

if (nota <= 10 && faltas <= 300){
    document.write(resultado)
} else{
    document.write('<h3>Valores inválidos</h3>')
}