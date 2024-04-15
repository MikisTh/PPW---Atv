class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial || 0;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    extrato() {
        console.log(`Saldo atual: R$${this.saldo}`);
    }
}

// Exemplo de uso:
const minhaConta = new ContaBancaria(1000);
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.extrato();

// Exemplo onde uma variável recebe uma função:
const mostrarMensagem = function(mensagem) {
    console.log(mensagem);
}

// Apresentando a função no console.log:
console.log(mostrarMensagem);

// Usando a função:
mostrarMensagem("Olá, mundo!");
