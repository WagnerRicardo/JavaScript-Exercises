function addObj(){
    var inputValue = document.getElementById('inputObj').value
    inputValue = inputValue.toLowerCase()
        if (inputValue === '' || isNumber(inputValue) == 0){
            alert('informe um valor vaílido')
        }else if(objectsList.indexOf(inputValue) >= 0){
            alert('Objeto já adicionado')
        }else{
            objectsList.push(inputValue)
            console.log(objectsList)
            document.getElementById('inputObj').value = ''
        }     
}
function sortObjects(){
    objectsList.sort()
    console.log(objectsList)
}
function isNumber(value){
    switch (value){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            return 0
        default:
            return 1

    }
}
//lista de objetos
var objectsList = ['cadeira', 'impressora', 'garfo']