function artDisplay(id, callbackSuccess, callbackError){
    //logica
    if (id == 1){
        callbackSuccess('Titúlo', 'lorem ipsum dolor sit amet')
    }else {
        callbackError('Erro: Id não encontrado.')
    }
}

var callbackSuccess = function(header, paragraph){
    document.write('<h1>' + header + '</h1>')
    document.write('<hr />')
    document.write('<p>' + paragraph + '</p>')
}

var callbackError = function(error){
    document.write('<h2>' + error + '</h2>')
}

artDisplay('1', callbackSuccess, callbackError)