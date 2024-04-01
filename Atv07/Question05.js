// Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

function numMaiorMenor () {
    let menor = 0;
    let maior = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }
    return [menor, maior];
}
console.log(numMaiorMenor);

function soma() {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}
console.log(soma);