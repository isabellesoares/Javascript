/* html => Página

h1 = Cabeçalhos/Títulos
p = Parágrafos
u1 = Agrupadores de Listas
li= os itens de listas do elemento ul
a = link 
form = formulários
input do tipo texto = campos de texto
input do tipo check = checkbox
input do tipo radio = botoes de radio
textarea = paragrafos
button = botoes
span = elementos genericos
tables = tabelas
tds = colunas
divs = divisoes
labels= textos
*/

function somaValores(){
    var n1 = document.getElementById("number1").value;
    var n2 = document.getElementById("number2").value;

    var result = parseInt(n1) + parseInt(n2);

    var divResultado = document.getElementById("resultado");

    divResultado.append("O resultado da soma é: " + result);
    console.log(result);
}