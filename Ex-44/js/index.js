var list = []
list[1] = 'Valor-1'
list['a'] = 'Valor-2'
list[-1] = 'Valor-3'
list[false] = 'Valor-4'

console.log(list)

for (i in list){
    console.log(list[i])
}