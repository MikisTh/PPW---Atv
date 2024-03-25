//Implemente uma função que inverta a ordem dos elementos em um array. Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
function inverterArray(arr) {
    return arr.reverse();
  }

let numeros = [1, 2, 3, 4, 5];
let letras = ['a', 'b', 'c', 'd', 'e'];

numeros = inverterArray(numeros);
letras = inverterArray(letras);

console.log(numeros); 
console.log(letras); 