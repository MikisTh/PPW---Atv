function Menu(verificarSaldo, realizarSaque, realizarDeposito, realizarTransferencia, checarChequeEspecial, atualizarCadastro, avaliarCredito) {
    
    this.verificarSaldo = verificarSaldo;
    this.realizarSaque = realizarSaque;
    this.realizarDeposito = realizarDeposito;
    this.realizarTrasnferencia = realizarTransferencia;
    this.checarChequeEspecial = checarChequeEspecial;
    this.atualizarCadastro = atualizarCadastro;
    this.avaliarCredito = avaliarCredito;
    
}


function verificarSaldo(Saldo) {

    if (Saldo > 0) {
  
      console.log("Saldo positivo");
  
    } else {
  
      console.log("Saldo negativo");
  
    }
  
  }

function realizarSaque(saldoAtual, valorSaque) {

    if (valorSaque <= saldoAtual) {
  
      saldoAtual -= valorSaque;
  
      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
  
    } else {
  
      console.log("Saldo insuficiente");
  
    }
  
  }


function realizarDeposito(saldoAtual, valorDeposito) {

    saldoAtual += valorDeposito;
  
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
  
  }

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


function checarChequeEspecial(Saldo) {

    if (Saldo < 0) {
  
      console.log("Dentro do limite do cheque especial");
  
    } else {
  
      console.log("Fora do limite do cheque especial");
  
    }
  
  }

function atualizarCadastro(cadastroAtivo, saldo) {

    if (cadastroAtivo) {
  
      if (saldo > 0) {
  
        console.log("Cadastro ativo e saldo positivo");
  
      } else {
  
        console.log("Cadastro ativo mas precisa regularizar saldo");
  
      }
  
    } else {
  
      console.log("Por favor, atualize seu cadastro");
  
    }
  
  }

function avaliarCredito(saldo, historicoCredito, rendaMensal) {

    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
  
      console.log("Crédito aprovado");
  
    } else {
  
      console.log("Crédito negado");
  
    }
  
  }
  