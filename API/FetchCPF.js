function setCpf(cpfText) {
    const cpfContainer = document.getElementById('CPF');
    cpfContainer.textContent = cpfText;
}

function fetchCpf() {
    const cpf = document.getElementById('cpfInput').value;
    const cpfLimpo = cpf.replace(/\D/g, ''); 

    if (cpfLimpo.length !== 11) {
        setCpf('Por favor, digite um CPJ válido com 11 dígitos no formato a seguir (000.000.000-00).');
        return;
    }

    fetch(`URL CPF`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setCpf('CPF não encontrado.');
            } else {
                setCpf(`CPF ${data.cpf}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o CPF:', error);
            setCnpj('Erro ao carregar o CPF.');
        });
}


document.getElementById('cpfInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchCpf();
    }
});
