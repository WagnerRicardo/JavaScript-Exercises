var data = new Date()

document.write(data.toString())

//setDate dia
document.write('<hr />')
data.setDate(data.getDate() + 1)
document.write(data.toString())

//mes
document.write('<hr />')
data.setMonth(data.getMonth() + 1)
document.write(data.toString())

//ano
document.write('<hr />')
data.setFullYear(data.getFullYear() + 1)
document.write(data.toString())
document.write('<h4>Fim setDate</h4>')

//comparar datas/operações com datas
var data1 = new Date(2023, 2, 10)
var data2 = new Date(2023, 10, 30)

document.write('<hr />')
document.write(data1.toString() + '<br />')
document.write(data2.toString())
document.write('<hr />')

//converter as datas para ms a partir do inicio unix
document.write('<hr />')
document.write(data1.getTime() + '<br />')
document.write(data2.getTime())
document.write('<hr />')

//ms entre datas
var ms_between = Math.abs(data1.getTime() - data2.getTime())
document.write('Há ' + ms_between + 'ms entre a primeria e a segunda data.')
document.write('<hr />')

//ms em 1 dia
var ms_in_day = 24*60*60*1000
document.write('Há ' + ms_in_day + 'ms em um dia.')
document.write('<hr />')

//dias entre datas
document.write('Faltam ' + (Math.ceil(ms_between / ms_in_day)) + ' dias até ' + data2)