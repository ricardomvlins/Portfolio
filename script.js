document.getElementById('forma-contato').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
});
