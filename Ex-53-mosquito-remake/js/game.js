//importar modulos
import * as utils from '../js/util.js';

//ao carregar pagina
document.addEventListener('DOMContentLoaded', () => {
    //valida acesso
    const savedPlayer = utils.getValidatedPlayerSettings();
    if(!savedPlayer){
        window.location.href = 'index.html?erro=invalidPlayerSettings';
    }
});
//Elementos do DOM
const  vidas = document.querySelectorAll('.hp');
const  timerObj = document.querySelector('#timer');

let jogador = utils.getValidatedPlayerSettings();
//reseta score
jogador.score = 0;

//VARIÁVEIS GLOBAIS
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
//vidas, var auxiliar
let health = vidas.length;
//cronometro
let timer = 15;
//timers
const vel = getVelocidade();
let mosquitoTimer = setInterval(spawnMosquito, vel);
let cronometro = setInterval(timerFunction, 1000);

//Tamanho da tela atualiza
window.onresize = () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
};

//UTILITÁRIOS

function getVelocidade(){
    switch(parseInt(jogador.dificuldade)){
        case 1: return 2000;
        case 2: return 1000;
        case 3: return 666;
        default: return 1000;
    }
}
//posições aleatorias na tela
function spawnMosquito(){
    //mosquito existe?
    let mosquitoElement = document.getElementById('mosquito');
    if(mosquitoElement){
        mosquitoElement.remove()
        uptVida()
    }

    //gerador de posição
    const posX = Math.max(0, Math.floor(Math.random() * screenWidth - 20) - 90);
    const posY = Math.max(20, Math.floor(Math.random() * screenHeight) - 90);
    //inserir mosquito'
    let mosquito = createMosca(posX, posY);

    document.body.appendChild(mosquito)
}
//cria mosca
function createMosca(posX, posY){
    let mosquito = document.createElement('img')
    mosquito.src = 'img/mosca.png'
    mosquito.className = mosSize() + ' ' + mosFacing()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = mosClick
    mosquito.alt = 'mosquito'

    return mosquito;
}

//tamanho aleatório/classe aleatória mosquito
function mosSize(){
    let i = Math.floor(Math.random() * 3)

    return ['mosquito1', 'mosquito2', 'mosquito3'][i];
}
//direção aleatória
function mosFacing(){
    let i = Math.floor(Math.random() * 2)

    return ['facingL', 'facingR'][i];
}
//vida e tempo
function uptVida(){

    vidas[health-1].src = 'img/coracao_vazio.png';
    vidas[health-1].alt = 'vida vazia';
    health--

    if (health == 0){
        fimDeJogo(false);
    }
}

function fimDeJogo(venceu){
    clearInterval(cronometro);
    clearInterval(mosquitoTimer);
    setHighScore()
    localStorage.setItem('playerSettings', JSON.stringify(jogador));
    window.location.href = venceu ? 'gamewin.html' : 'gameover.html';
}


function timerFunction(){
    //cronometro
    timer--
    if (timer < 0){
        fimDeJogo(true);
    }
    timerObj.textContent = timer
}
//ao clicar no mosquito
function mosClick(){
    jogador.score += 1;
    this.remove();
}
//setar nova pontuação maxima
function setHighScore(){
    if(jogador.score > jogador.highScore){
        jogador.highScore = jogador.score;
    }
}
