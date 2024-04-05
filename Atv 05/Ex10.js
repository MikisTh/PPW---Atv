// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

console.log(fatorial(10));
