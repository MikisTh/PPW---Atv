//Implemente um método recursivo que receba como entrada dois números inteiros x e k e retorne o valor da operação x^k.
// Não utilize o método Math.pow() do Java. Utilize apenas multiplicação.


function power(x, k) {
    if (k == 0) {
        return 1;
    } else if (k == 1) {
        return x;
    } else {
        return x * power(x, k - 1);
    }
}

console.log(power(2, 3));
