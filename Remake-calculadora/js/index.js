//display visual e calculo
function visor(type, value){
    //visor
    var visorElement = document.getElementById('visor')
    var visorVal = document.getElementById('visor').value
    //tratamento de avisos
    if(visorVal == 'Infinity'){
        visorElement.value = ''
        storeValues = ''
        dots = 0
    }
    if(visorVal == 'NaN'){
        visorElement.value = ''
        storeValues = ''
        dots = 0    
    }
    if(visorVal == 'undefined'){
        visorElement.value = ''
        storeValues = ''
        dots = 0    
    }
    //clear
    if(value === 'ac'){
        visorElement.value = ''
        storeValues = ''
        dots = 0    
    }
    //delete
    if(value === 'del'){
            dots = 0
        visorElement.value = visorVal.slice(0, -1)
        storeValues = storeValues.slice(0, -1)
    }
    //verifica se o comando anterior é ação
    var previousChar = visorVal.charAt(visorVal.length - 1)
    var previousIsAct = false
    //se o comando atual é ação
    if (type === 'act' && visorVal.length >= 1){
        for(i = 0; i < actions.length; i++){
            if (previousChar == actions[i] || previousChar == 'x'){
                previousIsAct = true
                break
            }    
        }
        //monta expressão
        if(previousIsAct === false){
            for(i = 0; i < actions.length; i++){
                if (value == actions[i]){
                    if(value === '.' && dots < 1){
                        document.getElementById('visor').value += value
                        storeValues += value
                        dots = 1   
                    }else if(value !== '.'){
                        if(value === '/'){
                            addValue(value)
                        }else if (value === '='){
                            document.getElementById('visor').value = eval(storeValues)
                            storeValues = document.getElementById('visor').value
                        }else{
                            addValue(value)    
                        }
                        if (value !== '='){
                            var operators = 1        
                        }
                        if(operators == 1){
                            dots = 0
                        }
                            
                    }                                    
                }               
            }  
        }   
    }else if (type === 'num' && value !== 0){ //numeros tratamneto
        addValue(value)  
    }else if(type === 'num' && value == 0 && previousChar !== '/'){
        addValue(value)
    }else if(value == 0 && previousChar == '/'){
        alert('INVALID EXPRESSION.')
    }
}
//adicionar valores ao armazenamento e ao visor
function addValue(val){
    console.log(val)
    console.log(dots)
    if(val === '*'){
        storeValues += '*'
        document.getElementById('visor').value += 'x'
    }else{
        document.getElementById('visor').value += val
        storeValues += val    
    }
    console.log(storeValues)
}

//actions array
var actions = ['/', '.', '*', '-', '+', '=']
//armazenamento
var storeValues = ''
var dots = 0
var operators = 0