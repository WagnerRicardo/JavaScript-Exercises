function modBox(){
    if (i == 0 || i == undefined){
        document.getElementById('box').className = 'boxStyle2'
        i = 1
    }else{
        document.getElementById('box').className = 'boxStyle'
        i = 0
    }
}
var i