// Altere o programa de cálculo dos números primos, informando, caso o número não seja primo, por quais número ele é divisível.

function primo() {
    var n = parseInt(prompt("Digite um número inteiro: "));
    var contador = 0;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            contador++;
        } else if (n % n != 0)
            prompt("O número não é divisível por ele mesmo")
        }
    if (contador == 2) {
        return true;
    } else {
        return false;
    }
}
console.log(primo);