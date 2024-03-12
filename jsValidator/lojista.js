const form   = document.getElementById('control');
const campos = document.querySelectorAll('.required');
const spans  = document.querySelectorAll('.span-required');
const cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        cpfValidate();
        mainPasswordValidate();
    })



function setError(login_do_fornecedor){
    campos[login_do_fornecedor].style.border = '1px solid #e63636'
}

function removeError(login_do_fornecedor){
    campos[login_do_fornecedor].style.border = ''
}


function cpfValidate(){
    if(!cpfRegex.test(campos[0].value))
    {
        setError(0);
    }
    else{
        removeError(0);
    }
}

function mainPasswordValidate(){
    if(campos[1].value.length < 8)
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

