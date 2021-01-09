
//Loops (Laços de repetição)

//for é movido por declaração

//for(var a = 0; a < 10; a++){
//    console.log(`Repetindo por que ${a} é menor que 10.`);
//}

/////While é movido por uma condição, e fica no laço enquanto esta condição for true(verdadeira)

/* var i = 0;
while(i <= 10){
    console.log(`Repetindo por que ${i} é menor ou igual a 10.`);
    i++;
}
 */

var avengers = ['Ironman', 'Spiderman', 'Thor', 'Captain America', 'Black Pather', 'Black Window'];

avengers.forEach(function(value, key){
    console.log(`${value} na posição ${key}`)
})