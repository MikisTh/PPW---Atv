// Como estamos rodando isso possivelmente em Node.js, não podemos usar 'prompt', que é uma função do navegador.
// Em vez disso, vamos usar o módulo 'readline' para ler a entrada do usuário no terminal.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler um número do terminal
function readNumber(question) {
    return new Promise(resolve => {
        readline.question(question, (input) => {
            resolve(Number(input)); // Converte a entrada do usuário para número
        });
    });
}

async function main() {
    try {
        const v1 = await readNumber("Digite o primeiro número: ");
        const v2 = await readNumber("Digite o segundo número: ");
        const v3 = await readNumber("Digite o terceiro número: ");

        console.log(`Os números digitados foram: ${v1}, ${v2}, ${v3}`);
    } finally {
        readline.close(); // Isso é importante para fechar o programa adequadamente.
    }
}

main(); // Executar o programa
