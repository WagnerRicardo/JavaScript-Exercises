function focous(){
    document.getElementById('field').style.background = 'yellow'
}
function outFocous(){
    var value = document.getElementById('field').value
    var leng = value.length
    if (leng < 3){
        document.getElementById('field').style.background = 'red'
    }else if(leng >= 3){
        document.getElementById('field').style.background = 'green'
    }
}