var listStr = ['B', 'C', 'D', 'A']

console.log(listStr.sort())

//num

var listNum = [12, 34, 4, 15, 43]

console.log(listNum.sort(numSort))

function numSort(a, b){
    return a - b
}