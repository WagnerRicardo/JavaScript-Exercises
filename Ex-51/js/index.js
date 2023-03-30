function locationAct(value){
    switch (value){
        case 0:
            location.reload()
        break
        case 1:
            location.href = 'https://www.youtube.com'
        break
        case 2:
            var origin = location.origin
            document.getElementById('displayResults').innerHTML = origin
        break
        case 3:
            document.getElementById('displayResults').innerHTML = location.protocol
    }
}