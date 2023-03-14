function sortChar(){
    //tratamento do input de caracteres
    var char = (document.getElementById('charIn').value).charAt(
                document.getElementById('charIn').length)
    char.trim()
    //Verifica se é um numero ou letra
    switch (char){
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            //exibe o caractere que foi inputado
            document.getElementById('num').value = char
        break
        default:
            //exibe o caractere que foi inputado    
            document.getElementById('string').value = char
    }
    //limpa input de caracteres
    document.getElementById('charIn').value = ''
}