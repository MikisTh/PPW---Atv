//Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro número elevado ao segundo número. Não utilize a função de potência da linguagem.

function potencia (base, expoente) {
    let result = 1;
    for (let i = 0; i < expoente; i++) {
      result *= base;
    }

    n1 = prompt("Digite o primeiro número: base");
    n2 = prompt("Digite o segundo número:");
    
}
console.log(result);
return result;
