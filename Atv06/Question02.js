//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

function AutenticantionUser () {

let nome = prompt("Informe o nome:");
console.log(nome);

let senha = prompt("Informe a senha:");
console.log(senha);

while( nome === senha){
    alert ("nome e senha iguais, por favor reescreva ambos diferentes!")
    nome = prompt("recreva o nome novamente")
    senha = prompt("escreva a senha novamente")
    
    }alert("cadastro realizado!")

}
