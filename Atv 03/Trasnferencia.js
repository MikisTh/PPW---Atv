function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
  
      saldoOrigem -= valorTransferencia;
  
      saldoDestino += valorTransferencia;
  
      console.log("Transferência realizada com sucesso");
  
    } else if (valorTransferencia > saldoOrigem) {
  
      console.log("Saldo insuficiente para transferência");
  
    } else {
  
      console.log("Valor excede o limite de transferência");
  
    }
  
  }