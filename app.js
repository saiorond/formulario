const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmacao = document.getElementById('senha-confirmacao');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checarInputs();
});

function checarInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const confirmacaoValue = confirmacao.value;
   

    if (usernameValue === "" ) {
        mensagemDeErro(username, "O nome de usuário é obrigatório");
    } else {
        mensagemDeSucesso(username);
    }

    if (emailValue === "" ) {
        mensagemDeErro(email, "O e-mail é obrigatório");
    } else if (!checkEmail(emailValue)) {
        mensagemDeErro(email, "Por favor, insira um e-mail válido")
    } else {
        mensagemDeSucesso(email);
    }

    if (senhaValue === "" ) {
        mensagemDeErro(senha, "A senha é obrigatória");
    } else if (senhaValue.length < 7) {
        mensagemDeErro(senha, "A senha deve ter no mínimo 7 caracteres")
    } else {
        mensagemDeSucesso(senha);
    }

    if (confirmacaoValue === "" ) {
        mensagemDeErro(confirmacao, "A confirmação da senha é obrigatória")
    } else if (confirmacaoValue !== senhaValue) {
        mensagemDeErro(confirmacao, "As senhas não conferem")
    } else {
        mensagemDeSucesso(confirmacao);
    }

    const controlesForms = form.querySelectorAll(".controle-form");

    const validandoForm = [...controlesForms].every((controleForm) => {
        return controleForm.className === "controle-form sucess";
    });

    if (validandoForm) {
        alert("O formulário está preenchido corretamente!")
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

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }