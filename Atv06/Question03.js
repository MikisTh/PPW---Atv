//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';
//Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length


function Validation() {

let nome = char(3);
let idade = int(0,150);
let salario = float(0);
let sexo = char('f', 'm');
let estado_civil = char('s', 'c', 'v', 'd');


if(nome.length > 3) {
    prompt("Nome maior que 3 caracteres")
    console.log(nome)
} else {
    prompt("Nome Inválido! Insira um nome com mais de 3 caracteres")
}

if(idade < 0) {
prompt("Idade Inválida")
} else {
    console.log(idade)
}

if(salario < 0) {
prompt("Salário Inválido")
} else {
    console.log(salario)
}

if(sexo != 'f' && sexo != 'm') {
prompt("Sexo Inválido")
} else {
    console.log(sexo)
}

if(estado_civil != 's' && estado_civil != 'c' && estado_civil != 'v' && estado_civil != 'd') {
prompt("Estado Civil Inválido")
} else {
    
}

}
