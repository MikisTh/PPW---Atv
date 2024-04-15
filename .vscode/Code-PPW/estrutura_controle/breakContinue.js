
//
//O "break" termina o loop atual e pula para a próxima instrução no script. 
//O "continue" termina a iteração atual, salta, volta e executa a próxima iteração. 
//Vamos ver com alguns exemplos práticos. Nos arquivos de exercício, você irá encontrar, dentro da pasta de IES, dois arquivos.27 de jan. de 2020


// Break
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// Continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
