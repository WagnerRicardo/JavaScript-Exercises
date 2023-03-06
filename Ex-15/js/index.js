//global, função e bloco

//var global
var Ojogo = 'minecraft'

document.write('Teste de escopo global: ' + Ojogo + '<br><br>')

//var de bloco
if (true){
    var OutroJogo = 'Terraria'
    document.write('Teste de escopo de bloco: ' + OutroJogo + '<br><br>')
}
document.write('Teste de escopo global: ' + OutroJogo + '<br><br>')

//var de função
function t(){
    var MaisJogo = 'GTA V'
    document.write('Teste de escopo de função: ' + MaisJogo + '<br><br>')

    if (true){
        var OutroJogo = 'Terraria'
        document.write('Teste de escopo de bloco em uma função: ' + MaisJogo + '<br><br>')
    }
}
t()

document.write('Teste de escopo global: ' + MaisJogo + '<br><br>')