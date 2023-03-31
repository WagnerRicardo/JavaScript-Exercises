//Tamanho da tela atualiza
function screenSize(){ 
    screenHeight = window.innerHeight
    screenWidth = window.innerWidth
}
//posições aleatorias na tela
function mosPosition(){
    //gerador de posição
    var posX = Math.floor(Math.random() * screenWidth) - 90
    var posY = Math.floor(Math.random() * screenHeight) - 90

    posX = (posX < 0)? 0 : posX
    posY = (posY < 0)? 0 : posY
    //inserir mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = mosSize() + ' ' + mosFacing()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'

    document.body.appendChild(mosquito)
}
//tamanho aleatório/classe aleatória mosquito
function mosSize(){
    var i = Math.floor(Math.random() * 3)

    switch (i){
        case 0:
            return ('mosquito1')
        case 1:
            return ('mosquito2')
        case 2:
            return ('mosquito3')
    }
}
//direção aleatória
function mosFacing(){
    var i = Math.floor(Math.random() * 2)

    switch (i){
        case 0:
            return ('facingL')
        case 1:
            return ('facingR')
    }
}
//Tamanho da tela, variaveis auxiliares
var screenHeight = 0
var screenWidth = 0
screenSize()

