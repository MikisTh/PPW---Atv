//Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.
function calcularMedia(numeros) {
    const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
    return soma / numeros.length;
  }
  
const conjunto1 = [10, 20, 30, 40, 50];
const media1 = calcularMedia(conjunto1);
console.log(`A média do conjunto1 é: ${media1}`);

const conjunto2 = [5, 15, 25, 35, 45];
const media2 = calcularMedia(conjunto2);
console.log(`A média do conjunto2 é: ${media2}`);