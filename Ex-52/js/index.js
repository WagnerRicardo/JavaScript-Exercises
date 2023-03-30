var redirect = function(){
    if (i <= 5 && i >=  0){
        document.getElementById('timerDisplay').innerHTML = 'you will be redirected in ' + i
    }else{
        clearInterval(timer)
        location.href = 'https://www.youtube.com'
    }
    i--
}
i = 5
var timer = setInterval(redirect, 1000)