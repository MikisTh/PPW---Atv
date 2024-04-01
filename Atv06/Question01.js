//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

var nota;
prompt("Insira uma nota de 0 a 10");

if( nota <= 0) {
    console.log("Valor Inválido")
} else if (nota > 10) {
    console.log("Valor Inválido")
}