// Faça um programa que mostre todos os primos entre 1 e N sendo N um número inteiro fornecido pelo usuário.
// O programa deverá mostrar também o número de divisões que ele executou para encontrar os números primos.
// Serão avaliados o funcionamento, o estilo e o número de testes (divisões) executados.

function primos() {
    var n = parseInt(prompt("Digite um número inteiro entre 1 e 1000: "));
    var primos = 0;
    for (var i = 2; i <= nu; i++) {
        if (n % i == 0) {
            primos++;
        }
    }
    if (primos == 2) {
        alert("O número " + n + " é primo!");
    } else {
        alert("O número " + n + " não é primo!");
    }
}