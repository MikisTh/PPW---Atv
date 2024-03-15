
//Buttons
const button = this.verificarSaldo('Verificar');
const button1 = this.realizarSaque('Sacar');
const button2 = this.realizarDeposito('Depositar');
const button3 = this.realizarTrasnferencia('Transferir');
const button4 = this.checarChequeEspecial('Checar');
const button5 = this.atualizarCadastro('Atualizar');
const button6 = this.avaliarCredito('Avaliar');

//inputs
const valorSaque = prompt("Digite o valor que deseja sacar:")
const valorDeposito = prompt("Digite o valor que deseja depositar:")
const valorTransferencia = prompt("Digite o valor que deseja transferir:")


//Função menu
function Menu(verificarSaldo, realizarSaque, realizarDeposito, realizarTransferencia, checarChequeEspecial, atualizarCadastro, avaliarCredito) {
    
    this.verificarSaldo = verificarSaldo;
    this.realizarSaque = realizarSaque;
    this.realizarDeposito = realizarDeposito;
    this.realizarTrasnferencia = realizarTransferencia;
    this.checarChequeEspecial = checarChequeEspecial;
    this.atualizarCadastro = atualizarCadastro;
    this.avaliarCredito = avaliarCredito;
   
   
    function verificarSaldo(saldo) {
        if (saldo > 0) {
            alert(`Saldo positivo: R$${saldoAtual}`);
        } else if (saldo < 0) {
            alert(`Saldo negativo: R$${saldoAtual}`);
        } else if (saldo = 0) {
            alert(`Você não possui saldo! R$${saldoAtual}`)
        }
    button.onClick = verificarSaldo();
} 

    function realizarSaque(valorSaque, saldoAtual,) {
        var valorSaque = input.valorSaque;
        if (valorSaque <= saldoAtual) {
            saldoAtual -= valorSaque;
            alert(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
        } else {
            alert(`Saldo insuficiente: R$${saldoAutal}`);
        }
    button1.onClick = realizarSaque();
}
    function realizarDeposito(valorDeposito, saldoAtual) {

        var valorDeposito = input.value;
            alert(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
        return saldoAtual += valorDeposito;
}
    button2.onClick = realizarDeposito();
    
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
        button3.onClick = realizarTransferencia();
}
    function checarChequeEspecial(saldo) {
        if (saldo < 0) {
            alert("Dentro do limite do cheque especial");
        } else {
            alert("Fora do limite do cheque especial");
        }
        button4.onClick = checarChequeEspecial();
}


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
        button5.onClick = atualizarCadastro();
}

    function avaliarCredito(saldo, historicoCredito, rendaMensal) {
        if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
            alert("Crédito aprovado");
        } else {
            alert("Crédito negado");
        }
        button6.onClick = avaliarCredito();
}

}










