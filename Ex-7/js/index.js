var nota = prompt('Digite Sua Nota: ')
var NotaMin = 5

if (nota <=10){
    if (nota >= NotaMin){
        document.write('<h1>Aprovado!</h1>')
    }
    else{
        document.write('<h2>REPROVADO</h2>')
    }    
}
else{
    document.write('<h3>Nota Inválida</h3>')
}
