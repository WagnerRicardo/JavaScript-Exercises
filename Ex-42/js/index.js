var list = ['value-1', 'value-2', 'value-3', 'value-4']

list.push('pushed-value-1')

var i = 0

var listLen = list.length

while(i < listLen){
    document.write(list[i] + '<hr />')
    i++
}