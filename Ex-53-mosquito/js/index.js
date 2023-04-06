//Tamanho da tela atualiza
function screenSize(){ 
    screenHeight = window.innerHeight
    screenWidth = window.innerWidth
}
//posições aleatorias na tela
function mosPosition(){
    //mosquito existe?
    var mosquitoElement = document.getElementById('mosquito')
    if(mosquitoElement){
        mosquitoElement.remove()
        if (health <= 1){
            window.location.href = 'gameover.html'
        }
        document.getElementById('hp' + health).src = 'img/coracao_vazio.png'
        health--
    }

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
    mosquito.id = 'mosquito'
    mosquito.onclick = mosClick

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
//executar a cada segundo
function mosTimer(){
    //mosquito
    mosPosition()
}
//cronometro
function timerFunction(){
    //cronometro
    timer--
    if (timer < 0){
        clearInterval(timerMosquito)
        clearInterval(timerInterval)
        window.location.href = 'gamewin.html'
    }else{
        document.getElementById('timer').innerHTML = timer
    }               
}
//ao clicar no mosquito
function mosClick(){
    this.remove()
}
//reiniciar jogo
function resertGame(){
    window.location.href = 'game.html'
}
//iniciar jogo
function startGame(){
    var level = document.getElementById('levelSelect').value
    if (level !== ''){
        sessionStorage.setItem('difficulty', level)
        window.location.href = 'game.html'
    }else{
        alert('escolha um nivel!')
    }
}
//voltar para a pag inicial
function returnHome(){
    window.location.href = 'index.html'
}

//Tamanho da tela, variaveis auxiliares
var screenHeight = 0
var screenWidth = 0
screenSize()
//vidas, var auxiliar
var health = 3
//cronometro
var timer = 10
var timerInterval = setInterval(timerFunction, 1000)