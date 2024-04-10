// Implemente um método recursivo que receba como entrada um número inteiro positivo N e retorne o seguinte cálculo:
//1 + 2 + 3 + 4 + ... + N.


function somaRecursiva(n) {
    if (n <= 0) {
        return 0;
    } else {
        return n + somaRecursiva(n - 1);
    }
}

console.log(somaRecursiva(10));

