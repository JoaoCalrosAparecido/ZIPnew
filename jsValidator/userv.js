const form = document.querySelector("#control")
const emailInput =  document.querySelector("#email")
const passwordInput = document.querySelector("#senha")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o email está vazio
    if (emailInput.value === ""  || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    //Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value)) {
        alert("A senha prescisa de ser no mínimo 8 dígitos.");
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie-o
    form.submit();
})

    //Função que valida email
    function isEmailValid(email) {
        //Cria uma regex para validar email
        const emailRegex = new RegExp(
            //usuario12@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true;
        }

        return false;
    }


    //Função que valida senha
    function validatePassword(password, minDigits) {
        if(password.length >= minDigits) {
            return true
        }
            return false
    }