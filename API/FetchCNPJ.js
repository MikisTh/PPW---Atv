function setCnpj(cnpjText) {
    const cnpjContainer = document.getElementById('CNPJ');
    cnpjContainer.textContent = cnpjText;
}

function fetchCnpj() {
    const cnpj = document.getElementById('cnpjInput').value;
    const cnpjLimpo = cnpj.replace(/\D/g, ''); 

    if (cnpjLimpo.length !== 12) {
        setCnpj('Por favor, digite um CNPJ válido com 12 dígitos no formato a seguir (00.000.000/0000-00).');
        return;
    }

    fetch(`URL CNPJ`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setCnpj('CNPJ não encontrado.');
            } else {
                setCnpj(`CNPJ ${data.cnpj}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o CNPJ:', error);
            setCnpj('Erro ao carregar o CNPJ.');
        });
}


document.getElementById('cnpjInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchCnpj();
    }
});
