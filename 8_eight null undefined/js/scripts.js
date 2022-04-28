// Hoisting - içamento apenas faz a pré inicialização no topo do código
console.log(sobrenome);
console.log(numero);

var nome = null;
var sobrenome = "Nogueira"

console.log(nome);
console.log(sobrenome);

nome = "Gustavo";

console.log(nome);

var numero = 5;