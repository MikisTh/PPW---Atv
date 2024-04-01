//Altere o programa anterior para mostrar no final a soma dos números.

function intervalNumbers(a, b) {
    for(let i = a; i <= b; i++) {
        console.log(i)
    }
}

function sumNumbers(i) {
    let soma = 0;
    for(let i = 0; i < 10; i++) {
        soma += i;
    }
    return soma;
}