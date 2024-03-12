class Contabancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial || 0;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual:${saldo}`)
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual:${saldo}`)
    }

    transferir(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo += valor;
        console.log(`Transferência de R$${valor} realizado. Saldo atual:${saldo}`)
    }

    extrato() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

const minhaConta = new Contabancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.transferir(200);
minhaConta.extrato();

const mostrarMensagem = function (mensagem) {
    console.log(mensagem);
};


//ÁRVORE (ORGANIZAÇÃO ESTRUTURAL)