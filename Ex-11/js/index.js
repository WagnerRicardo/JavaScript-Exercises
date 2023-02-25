var parametro = prompt('Digite um Número de 1 até 5')
//prompt recebe valor string
switch(parseInt(parametro)){ //var parametro de string para int
    case 1:
        document.write('parametro 1')
    break
    case 2:
        document.write('parametro 2')
    break
    case 3:
        document.write('parametro 3')
    break
    case 4:
        document.write('parametro 4')
    break
    case 5:
        document.write('parametro 5')
    break
    default:
        document.write('Valores Inválidos.')
}