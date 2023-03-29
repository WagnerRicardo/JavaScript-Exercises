var browserW = window.screen.width
var browserH = window.screen.height

document.write(screen.colorDepth + ' | ' + browserW + ':' + browserH + ' ')

if(browserW <= 420){
    document.write('extra small device')
}else if(browserW <= 780){
    document.write('small device')
}else if(browserW <= 920){
    document.write('medium device')
}else if(browserW <= 1020){
    document.write('large device')
}else if (browserW > 1020){
    document.write('extra large device')
}