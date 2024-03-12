class Data {
    // dia = 1
    // mes = 1
    // ano = 1970

    constructo(dia = 1, mes = 1, ano = 1970) {
        this.date = dia;
        this.mes = mes;
        this.ano = ano;
    };

    exibirData() {
        return '${this.dia}/${this.mes}/${this.ano}'
    };
};

const d1 = new Data();
const d2 = new Data(02, 12, 2022);

console.log(d1);
console.log(d2);
console.log(d2.exibirData());

// Polimorfismo

class Cliente {
   
    constructo(name, cpf, rg){
        this.name = name;
        this.cpf = cpf;
        this.rg = rg;
    };

    exibirCliente() {
        return '${this.name}/${this.cpf}/${this.rg}'
    };
};

const c1 = new Cliente();
const c2 = new Cliente(name, cpf, rg);

console.log(c1);
console.log(c2);
console.log(c2.exibirCliente());