//atributo lenght
document.write('Lorem Ipsum dolor sits'.length + '<br />')
//método charAt
document.write('Lorem Ipsum dolor sits'.charAt(21) + '<br />')
//método indexOf
var teste = 'A A a a'

document.write(teste.indexOf('a') + '<br />')//===
///método replace()

var nome = 'Wagner Ricardo'

document.write(nome.replace('Ricardo', 'Paula') + '<br />')
//métdo substr

document.write(nome.substring(0, nome.indexOf(' ')) + '<br />')
//método uppercase
document.write(teste.toUpperCase() + '<br />')
//método lowercase
document.write(teste.toLowerCase() + '<br />')
//método trim
var teste = ' A a A a '
document.write('-' + teste + '-' + teste.trim() + '-')