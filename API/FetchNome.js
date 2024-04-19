function setNome(nomeText) {
    const nomeContainer = document.getElementById('Nome');
    nomeContainer.textContent = nomeText;
}

function fetchNome() {
    const nome = document.getElementById('nomeInput').value;
    const nomeLimpo = nome.replace(/\D/g, ''); 
    if (nomeLimpo.length !== 100) {
        setNome('Por favor, digite um Nome válido.');
        return;
    }

    fetch(`URL NOME`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setNome('NOME não encontrado.');
            } else {
                setNome(`NOME ${data.nome}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o NOME:', error);
            setNome('Erro ao carregar o NOME.');
        });
}

document.getElementById('nomeInput').addEventListener('keypress', function(event) {
    if (event.key === 'Nome') {
        fetchNome();
    }
});
