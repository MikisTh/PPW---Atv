/*QUADRADO 
var matrizQuadradaMagica = function(){

  console.log("Quantidade de Parametros: " + arguments.length);
  //VERIFICANDO SE TODOS OS PARAMETROS SAO NUMEROS
  for (var i = arguments.length - 1; i >= 0; i--) {
    if (isNaN(arguments[i])) {
      //alert('São aceitos apenas numeros');
      console.log("O parametro de nº"+i+1+" não é um numero");
      return false;
    }
  }

  //TIRANDO A RAIZ QUADRADA DA QUANTIDADE DE TERMOS PARA VER O NUMERO DE LINHAS E COLUNAS
  var calc = Math.sqrt(arguments.length);

  //TRANSFORMANDO EM A RAIZ EM UM NUMERO INTEIRO PARA DEPOIS EFETUAR A COMPARACAO
  //PODE SER FEITO DE ALGUMAS FORMAS...USEI ESSAS DUAS COMO EXEMPLO
    //NESSA RETIREI AS CASAS DECIMAIS PASSANDO PARA UM NUMERO INTEIRO
    var calc2 = Number.parseInt(calc);
    //JA COM O ROUND...ELE TRANSFORMA NO NUMERO INTEIRO MAIS PROXIMO...EX.: (x = Math.round(20.49) == 20) E (x = Math.round(20.5) == 21)
    var calc2 = Math.round(calc);

  //FAZENDO A COMPARACCAO ENTRE A RAIZ E O NUMORO INTEIRO TIRADO A PARTIR DELA, SE FOREM DIFERENTES A RAIZ NAO É UM NUMERO INTEIRO, LOGO A MATRIZ NAO É QUADRADA
  if(calc != calc2){
    //alert("Não é quadrada.");
    console.log("Raiz Quadrada do tamanho da matriz: " +calc+ " Não é um numero inteiro!! \nLogo matriz nem chega a ser quadrada.");
    return false;
  }

  console.log("Numero de linhas e colunas: " + calc);

  //PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
  var matriz = [];
  var arr = [];
  var cont = 0;
  var cont2 = 0;

  //PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
  for (var i = arguments.length - 1; i >= 0; i--) {

    if(cont < calc){
      arr[cont] = arguments[i];
      // console.log("Argumentos"+i+": "+arguments[i]);
    }

    if(cont == calc-1){

      matriz[cont2] = arr.reverse();

      var arr = [];
      cont2++;
      cont = -1;
    }
    cont++;
  }

  // console.log("Matriz: " + matriz.toString());
  console.log("Matriz: " + matriz.reverse().toString());
  //console.log("Tamanho da matriz : " + matriz.length);

  matriz = matriz.reverse();

  /*var matriz =
  [
    [2,7,6],
    [9,5,1],
    [4,3,8]
  ];*/



  /*QUADRADO 
Matematicamente, um Quadrado Mágico é uma matriz quadrada (mesmo número de linhas e colunas)
de ordem n (n linhas e n colunas) cujos elementos (números naturais) variam sucessivamente 
de  1 até n.n(nxn) que são arrumados de modo que a soma de cada linha, 
cada umas das duas diagonais principais ou de cada coluna seja sempre uma constante.

*/


let matriz = [[2, 7, 6], 
             [9, 5, 1], 
             [4, 3, 8]]; // Exemplo de matriz

             let somad = 0;
let somad2 = 0;
let somal = [];
let somac = [];
let retorno = 1;

// Fazendo a soma dos lados, colunas e diagonal principal
for (let i = 0; i < matriz.length; i++) {
  somad += matriz[i][i];
  somal[i] = 0;
  somac[i] = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    somal[i] += matriz[i][j];
    somac[i] += matriz[j][i];
    console.log("Matriz " + j + "-" + i + ": " + matriz[j][i]);
  }

  // Conferindo se a soma dos lados e colunas são diferentes
  if (somal[i] !== somac[i]) {
    retorno = 0;
  }
  console.log("Soma da Linha nº" + (i + 1) + ": " + somal[i]);
  console.log("Soma da Coluna nº" + (i + 1) + ": " + somac[i]);
}

// Fazendo a soma da diagonal secundária
for (let i = matriz.length - 1, j = 0; i >= 0; i--, j++) {
  somad2 += matriz[i][j];
}

console.log("Soma da Diagonal Principal: " + somad);
console.log("Soma da Diagonal Secundária: " + somad2);

// Conferindo se as somas das diagonais são iguais
if (somal[0] !== somad || somad !== somad2) {
  retorno = 0;
}

// Pegando o retorno para definir se é uma matriz quadrada mágica ou não
if (retorno) {
  console.log("É quadrada mágica");
  return true;
} else {
  console.log("Não é quadrada mágica");
  return false;
}
  


//CHAMANDO A FUNCAO PASSANDO ALGUNS PARAMETROS
// matrizQuadradaMagica(2,7,6,9,5,1,4,3,8);
// matrizQuadradaMagica(2,3,4,9,3,1,1,3,3);
// matrizQuadradaMagica(1,1,1,1,1,1,1,1,1);
matrizQuadradaMagica(1,7,1,3,1,56,1,1,1,1,1,1,1,5,1,1,3);