function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function () {
            return '${this.dia}/${this.mes}/${this.ano}'
        }
    };
};

const d1 = criarData(dia1, mes, ano);
const d2 = criarData(dia2, mes, ano);
const d3 = criarData(dia3, mes, ano);

console.log(d1);
console.log(d2);
console.log(d3);

function criarCliente(name, cpf, rg) {
    return {
        name: name,
        cpf: cpf,
        rg: rg,
        exibirCliente; function () {
            return '${this.name}/${this.cpf}/${this.rg}'
        }
    }
}

const c1 = criarCliente(name1, cpf, rg);
const c2 = criarCliente(name2, cpf, rg);
const c3 = criarCliente(name3, cpf, rg);

console.log(c1);
console.log(c2);
console.log(c3);

function criarPedido(código, item, preço) {
    
}