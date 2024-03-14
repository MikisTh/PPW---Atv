function Menu(verificarSaldo, realizarSaque, realizarDeposito, realizarTransferencia, checarChequeEspecial, atualizarCadastro, avaliarCredito) {
    
    this.verificarSaldo = verificarSaldo;
    this.realizarSaque = realizarSaque;
    this.realizarDeposito = realizarDeposito;
    this.realizarTrasnferencia = realizarTransferencia;
    this.checarChequeEspecial = checarChequeEspecial;
    this.atualizarCadastro = atualizarCadastro;
    this.avaliarCredito = avaliarCredito;
    
}

function verificarSaldo(saldo) {
    if (saldo > 0) {
        alert(`Saldo positivo: R$${saldoAtual}`);
    } else if (saldo < 0) {
        alert(`Saldo negativo: R$${saldoAtual}`);
    } else if (saldo = 0) {
        alert(`Você não possui saldo! R$${saldoAtual}`)
    }
}
var button = document.querySelector("Verificar");
button.onClick = verificarSaldo();

function realizarSaque(valorSaque, saldoAtual,) {
    var valorSaque = input.valorSaque;
    if (valorSaque <= saldoAtual) {
        saldoAtual -= valorSaque;
            alert(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
            alert(`Saldo insuficiente: R$${saldoAutal}`);
    }
}
var valorSaque = document.querySelector("input")

var button = document.querySelector("Sacar");
button.onClick = realizarSaque();

function realizarDeposito(valorDeposito, saldoAtual) {

    var valorDeposito = input.value;
        alert(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
    return saldoAtual += valorDeposito;
}
var valorDeposito = document.querySelector("input")

var button = document.querySelector("Depositar");
button.onClick = realizarDeposito();

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {

    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
        saldoOrigem -= valorTransferencia;
        saldoDestino += valorTransferencia;
            alert("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
            alert("Saldo insuficiente para transferência");
    } else {
            alert("Valor excede o limite de transferência");
    }
}
var valorTransferencia = document.querySelector("input")

var button = document.querySelector("Transferir");
button.onClick = realizarTransferencia();

function checarChequeEspecial(saldo) {
    if (saldo < 0) {
        alert("Dentro do limite do cheque especial");
    } else {
        alert("Fora do limite do cheque especial");
}
}
var button = document.querySelector("Checar");
button.onClick = checarChequeEspecial();

function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
        if (saldo > 0) {
            alert("Cadastro ativo e saldo positivo");
        } else {
            alert("Cadastro ativo, mas precisa regularizar saldo");
            }
    } else {
            alert("Por favor, atualize seu cadastro");
    }
}
var button = document.querySelector("Atualizar");
button.onClick = atualizarCadastro();

function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
        alert("Crédito aprovado");
    } else {
        alert("Crédito negado");
    }
}
var button = document.querySelector("Avaliar");
button.onClick = avaliarCredito();