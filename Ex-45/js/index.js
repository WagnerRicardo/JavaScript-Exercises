var list = ['value-1', 'value-2', 'value-3']
var eachDo = function(val, index, array){
    if(val == 'value-1' && array == list){
        document.write('Valor 1')
    }else if(array == list){
        document.write('<hr />Não primeiro  ')
    }
    if(array == list2){
        document.write('<br/ >' + val)
    }
}
var list2 = ['obj-1', 'obj-2', 'obj-3']

console.log(list)

list.forEach(eachDo)
list2.forEach(eachDo)