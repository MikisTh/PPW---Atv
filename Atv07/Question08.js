// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
//Um número primo é aquele que é divisível somente por ele mesmo e por 1. Números primos com laços

function primo() {
    var numero = parseInt(prompt("Digite um número inteiro: "));
    var contador = 0;
    for (var i = 2; i <= numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }
    if (contador == 2) {
        return true;
    } else {
        return false;
    }


}

console.log(primo);