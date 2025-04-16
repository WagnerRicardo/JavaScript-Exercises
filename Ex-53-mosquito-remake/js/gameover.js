//importar modulos
import * as utils from '../js/util.js';

//ao carregar pagina
document.addEventListener('DOMContentLoaded', () => {
    //valida acesso
    const data = utils.getValidatedPlayerSettings();
    if(!data){
        window.location.href = 'index.html?erro=invalidPlayerSettings';
    }

    const jogador = data;

    //HTML obj
    const pontosMax = document.querySelector('#pontosMax');
    const pontos = document.querySelector('#pontos');
    //mostrar pontos
    pontosMax.textContent = jogador.highScore;
    pontos.textContent = jogador.score;

});
//HTML obj
const btnOptions = document.querySelectorAll('nav.secondaryNav button')
//voltar para a pag inicial
btnOptions[0].addEventListener('click', () => {
    window.location.href = 'index.html'
})
//reiniciar jogo
btnOptions[1].addEventListener('click', () => {
    window.location.href = 'game.html'
})
