// Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). Retorne true se for um palíndromo e false se não for.
function ehPalindromo(palavra) {
    var palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
  }
console.log(ehPalindromo(palavra)); 
