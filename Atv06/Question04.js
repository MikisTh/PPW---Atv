//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. 
//Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

function calcularAnosParaUltrapassarPopulacao(populacaoA, populacaoB) {

    let anos = 0;
    while (populacaoA < populacaoB) {
        populacaoA = populacaoA * (1 + 100/0,3);
        populacaoB = populacaoB * (1 + 100/0,15);
        anos++;
    }
    return anos;
}

function taxaCrescimento() {

let populacaoA = int(80000);
let populacaoB = int(200000);
let taxaA = float(0.03);
let taxaB = float(0.015);

if(populacaoA >= populacaoB) {
    let anos = int(populacaoA/populacaoB);
    console.log(anos)
} else {
    let anos = int(populacaoB/populacaoA);
    console.log(anos)
}

}