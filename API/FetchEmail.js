function setEmail(emailText) {
    const emailContainer = document.getElementById('EMAIL');
    emailContainer.textContent = emailText;
}

function fetchEmail() {
    const email = document.getElementById('emailInput').value;
    const emailLimpo = email.replace(/\D/g, ''); 
    if (emailLimpo.length !== 100) {
        setEmail('Por favor, digite um E-MAIL válido...');
        return;
    }

    fetch(`URL EMAIL`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                setEmail('EMAIL não encontrado.');
            } else {
                setEmail(`EMAIL ${data.email}`);
            }
        })
        .catch(error => {
            console.error('Falha ao buscar o E-MAIL:', error);
            setEmail('Erro ao carregar o E-MAIL.');
        });
}

document.getElementById('emailInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchEmail();
    }
});
