// Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.


function numMaiorMenor () {
    let menor = 0;
    let maior = 0;

    for (let i = 0; i < 1000; i++) {
        if (n[i] > maior) {
            maior = n[i];
        }
        if (n[i] < menor) {
            menor = n[i];
        }
    }
    return [menor, maior];
}
console.log(numMaiorMenor);

function soma() {
    let soma = 0;
    for (let i = 0; i < 1000; i++) {
        soma += n[i];
    }
    return soma;
}
console.log(soma);