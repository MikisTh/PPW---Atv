function setRg(cnpjText) {
    const rgContainer = document.getElementById('CNPJ');
    rgContainer.textContent = rgText;
}

function fetchRg() {
    const rg = document.getElementById('rgInput').value;
    const rgLimpo = rg.replace(/\D/g, ''); 

    if (rgLimpo.length !== 7) {
        setRg('Por favor, digite um RG válido com 7 dígitos no formato a seguir (0.000.000).');
        return;
    }

    fetch(`URL RG`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setRg('RG não encontrado.');
            } else {
                setRg(`RG ${data.rg}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o RG:', error);
            setRg('Erro ao carregar o RG.');
        });
}

document.getElementById('rgInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchRg();
    }
});
