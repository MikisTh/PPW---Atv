//Os números fibonacci são definidos pela seguinte recursão:
// Implemente um método recursivo que receba por parâmetro um número inteiro positivo
// N e mostre e retorne o N-ésimo número da sequência de Tribonacci.

function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
}

console.log(fibonacci(10));
