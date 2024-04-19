// Função para ler dados do teclado
function lerDado(texto) {
  let valor = prompt(texto);
  return valor;
}

// Função principal
function main() {
  // Leitura da entrada do usuário
  let tipoComida = lerDado("Qual tipo de comida você deseja? (vegetariana, carne, peixe): ");
  let acompanhamento = lerDado("Qual acompanhamento você deseja? (arroz, batata frita, salada): ");
  let sobremesa = lerDado("Qual sobremesa você deseja? (pudim, bolo, sorvete): ");

  // Verificação do tipo de comida
  if (tipoComida === "vegetariana") {
    // Opções vegetarianas
    if (acompanhamento === "arroz") {
      console.log("Você escolheu um prato vegetariano com arroz. Uma ótima escolha!");
    } else if (acompanhamento === "batata frita") {
      console.log("Você escolheu um prato vegetariano com batata frita. Hmmm, delicioso!");
    } else if (acompanhamento === "salada") {
      console.log("Você escolheu um prato vegetariano com salada. Uma opção leve e saudável!");
    } else {
      console.log("Acompanhamento inválido. Por favor, escolha entre arroz, batata frita ou salada.");
    }
  } else if (tipoComida === "carne") {
    // Opções com carne
    if (acompanhamento === "arroz") {
      console.log("Você escolheu um prato com carne e arroz. Um clássico!");
    } else if (acompanhamento === "batata frita") {
      console.log("Você escolheu um prato com carne e batata frita. Perfeito para quem gosta de uma combinação saborosa!");
    } else if (acompanhamento === "salada") {
      console.log("Você escolheu um prato com carne e salada. Uma opção completa e equilibrada!");
    } else {
      console.log("Acompanhamento inválido. Por favor, escolha entre arroz, batata frita ou salada.");
    }
  } else if (tipoComida === "peixe") {
    // Opções com peixe
    if (acompanhamento === "arroz") {
      console.log("Você escolheu um prato com peixe e arroz. Uma escolha leve e saborosa!");
    } else if (acompanhamento === "batata frita") {
      console.log("Você escolheu um prato com peixe e batata frita. Uma combinação irresistível!");
    } else if (acompanhamento === "salada") {
      console.log("Você escolheu um prato com peixe e salada. Uma opção saudável e refrescante!");
    } else {
      console.log("Acompanhamento inválido. Por favor, escolha entre arroz, batata frita ou salada.");
    }
  } else {
    console.log("Tipo de comida inválido. Por favor, escolha entre vegetariana, carne ou peixe.");
  }

  // Verificação da sobremesa
  if (sobremesa === "pudim") {
    console.log("Você escolheu pudim de sobremesa. Uma delícia tradicional!");
  } else if (sobremesa === "bolo") {
    console.log("Você escolheu bolo de sobremesa. Uma opção saborosa para todos os gostos!");
  } else if (sobremesa === "sorvete") {
    console.log("Você escolheu sorvete de sobremesa. Perfeito para um dia quente!");
  } else {
    console.log("Sobremesa inválida. Por favor, escolha entre pudim, bolo ou sorvete.");
  }

  // Mensagem final
  console.log("Obrigado por escolher nosso restaurante! Desejamos a você uma ótima refeição!");
}

// Chamada da função principal
main();
