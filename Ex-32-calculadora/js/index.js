//display visual e calculo
function visor(type, value){
    var visorVal = document.getElementById('visor').value
    //clear
    if (type === 'act' && value === 'c'){
        document.getElementById('visor').value = ''
        storeValues = ''
    }
    //expressão
    //ação
    if (type === 'act' && visorVal.length >= 1 && visorVal.charAt(visorVal.length - 1) !== '/'
    && visorVal.charAt(visorVal.length - 1) !== 'x' && visorVal.charAt(visorVal.length - 1) !== '+'
    && visorVal.charAt(visorVal.length - 1) !== '.' && visorVal.charAt(visorVal.length - 1) !== '-'){
        if(value === '/' && visorVal.charAt(visorVal.length - 1) !== '0'){
            document.getElementById('visor').value += value
            storeValues += value
        }else if(value === '+'){
            document.getElementById('visor').value += value
            storeValues += value
        }
        else if ( value === '-'){
            document.getElementById('visor').value += value
            storeValues += value
        }
        else if(value === '.'){
            document.getElementById('visor').value += value
            storeValues += value
        }
        else if(value === '*'){
            storeValues += '*'
            document.getElementById('visor').value += 'x'
        }
        else if (value === '='){
            document.getElementById('visor').value = eval(storeValues)
            console.log(storeValues)
        }
    //numero
    }else if (type === 'num'){
        document.getElementById('visor').value += value
        storeValues += value
    }
}
//armazenamento
var storeValues = ''