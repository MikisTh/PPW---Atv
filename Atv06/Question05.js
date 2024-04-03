//Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide a entrada e permita repetir a operação.


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