// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. Calcular fatorial com laços

function fatorial () {
    var numero = parseInt(prompt("Digite um número inteiro: "));
    var fatorial = 1;
    for (var i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
    }
    alert("O fatorial de " + numero + " é: " + fatorial);

    console.log(fatorial);
}