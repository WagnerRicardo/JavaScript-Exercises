var listaFrutas = ['banana', 'morango', 'maçã', 'uva']

document.write('<hr /> Lista de Frutas com FOR <br />')

for(i = 0; i < listaFrutas.length; i++){
    document.write(listaFrutas[i] + '<br />')
}

document.write('<hr /> Tabuada com WHILE <br />')
var i = 1
while(i <= 10){
    var k = 1
    while(k <=10){
        document.write(i + ' x ' + k + ' = ' + (i * k) + '<br />')
        k++
    }
    document.write('<hr />')
    i++
}