// Desenvolva uma função que determine se um número é primo ou não. Retorne true se for primo e false se não for.
function primo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primo());
