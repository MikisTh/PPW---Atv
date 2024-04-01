// Altere o programa de cálculo do fatorial, permitindo ao usuário calcular o fatorial várias vezes e limitando o fatorial a números inteiros positivos e menores que 16.

function fatorial () {
    var numero = parseInt(prompt("Digite um número inteiro: "));
    var fatorial = 1;
    for (var i = 1; i < 16; i++) {
        if (numero % i == 0) {
            fatorial = fatorial * i;
        } else {
            prompt("O número não é válido, digite um número positivo menor que 16.")    
        }

        
    }
    alert("O fatorial de " + numero + " é: " + fatorial);

    console.log(fatorial);
}
