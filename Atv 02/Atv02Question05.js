function saqueLimite (valor){
  i = valor;


  let valor = prompt ("Informe o valor que deseja sacar:");

      if(i%10===0){
          console.log("Saque realizado com sucesso!");
      }else{
          console.log("Valor inválido, digite um valor múltiplo de 10!");
      }
  }
return(valor);
