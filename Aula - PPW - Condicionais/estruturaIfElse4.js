const hora = 15;
let saudacao;

if (hora < 12) {
    saudacao = 'bom dia';
} else if ( hora < 18 ) {
    saudacao = 'boa tarde';
} else if (hora < 22) {
    saudacao = 'boa noite';
} else {
    saudacao = 'Muito tarde';
}

console.log(saudacao);
