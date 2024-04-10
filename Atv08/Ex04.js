//Os números Tribonacci são definidos pela seguinte recursão:
// Implemente um método recursivo que receba por parâmetro um número inteiro positivo
// N e mostre e retorne o N-ésimo número da sequência de Tribonacci.

function tribonacci(n) {
  if (n <= 2) {
    return 1;
  }
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

console.log(tribonacci(10));
