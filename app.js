const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senhaConfirmacao = document.getElementById('senha-confirmacao');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    

    if (usernameValue == "" ) {
        mensagemDeErro(username, "O nome de usuário é obrigatório");
    } else {
        mensagemDeSucesso(username);
    }
} 

function mensagemDeErro(input, message) {
    const controleForm = input.parentElement;
    const small = controleForm.querySelector("small");

    small.innerText = message;

    controleForm.className = "controle-form error"
}

function mensagemDeSucesso(input) {
    const controleForm = input.parentElement;

    controleForm.className = "controle-form sucess"
}