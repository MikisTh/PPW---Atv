// Crie uma função que calcule o fatorial de um número. Utilize essa função para calcular o fatorial de diferentes números.

function calcularFatorial(num) {
    if (num < 0) 
      return 'Número inválido. O fatorial não é definido para números negativos.';
    
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }
    return fatorial;
  }

console.log(calcularFatorial(num))
