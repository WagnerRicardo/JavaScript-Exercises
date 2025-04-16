//importar modulos
import * as utils from '../js/util.js';

//Classe jogador
class PlayerSettings{
    constructor(dificuldade, score = 0, validaAcesso, highScore = 0){
        this.dificuldade = dificuldade;
        this.score = score;
        this.validaAcesso = validaAcesso;
        this.highScore = highScore;
    }
}

// Elementos do DOM

const levelSelect = document.querySelector('#levelSelect');
const erroForm = document.querySelector('.erroForm');
const btnStart = document.querySelector('#btnStart');


//iniciar jogo
btnStart.addEventListener('click', startGame);
function startGame(){
    if(!levelSelect.value){
        erroForm.textContent = 'Favor selecione a dificuldade!';
        return;
    }
    erroForm.textContent = '';

    //criar objeto do jogador

    let jogador = utils.getValidatedPlayerSettings();

    if(!jogador){
        jogador = new PlayerSettings(levelSelect.value, 0, true, 0);
    }
    
    jogador.dificuldade = levelSelect.value;

    localStorage.setItem('playerSettings', JSON.stringify(jogador));

    window.location.href = 'game.html';
}
