function isPrime(number){
    if (number <= 2){
        return true
    }else{
        var i = 0
        var bool = true
        while (i <= 10){
            if(number%i == 0 && i > 1 && i !== number){
                bool = false
            }
            i++
        }
        if (bool === true){
            return true
        }else{
            return false
        }
    }
}

var i = 1

document.write('Lista <br />')

while (i <= 100){
    if (isPrime(i) === true){
        document.write(i + '<br />')
    }
    i++
}