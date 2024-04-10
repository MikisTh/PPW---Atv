//Implemente um método recursivo que receba como entrada um número inteiropositivo N e retorne o seguinte cálculo:
//1 + 1/2 + 1/3 + 1/4 + ... + 1/N.

function fibonacci(n) {
    if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
