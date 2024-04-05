// Implemente uma função que receba um número como parâmetro e retorne sua representação binária. Utilize essa função para converter diferentes números em binário.

function binario(n) {
    let bin = ''
    while (n > 0) {
        bin += n % 2
        n = Math.floor(n / 2)
    }
    return bin
}

console.log(binario(10000));

