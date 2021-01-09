/////Arrays

var avengers = ['Homem de ferro', 'Capitão América', 'Thor'];

console.log(avengers);

avengers.push('Hulk');

console.log(avengers);

avengers.push('Homem aranha');
/* avengers.pop(); //pop remove o ultimo registro do meu array
avengers.shift(); //shift remove o primeiro registro do meu array */

var indice = avengers.indexOf('Homem aranha')
avengers.splice(indice)

avengers.push('Viuva negra');
avengers.push('Gavião Arqueiro');

console.log(avengers);

var newAvengers = ['Homem aranha', 'Capitao Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newAvengers)
console.log(result)