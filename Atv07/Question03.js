//A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.
//Sequência de Fibonacci com laços A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,34,55,... 
//Faça um programa que gere a série até que o valor seja maior que 500.

function fibonacci() {
    var i = 0;
    var j = 1;
    var k = 0;
    while (k < 500) {
        console.log(k);
        k = i + j;
        i = j;
        j = k;
    }
}