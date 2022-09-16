const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senhaConfirmacao = document.getElementById('senha-confirmacao');

form.addEventListener('submit', (e) => {
    e.preventDefault()
});

function checarInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const senhaConfirmacaoValue = senhaConfirmacao.value;

    if(usernameValue == "" ) {
        mensagemDeErro(username, "O nome de usuário é obrigatório");
    }
} 

function mensagemDeErro(input, mensagem) {
    
}