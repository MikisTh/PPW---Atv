//Faça um programa que calcule o mostre a média aritmética de N notas.

function mediaNotas() {
    var soma = 0;
    for (var i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    return soma / notas.length;
}