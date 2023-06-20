/*
Codigo de validacao de formulario de login
*/
function Validar(){
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    
    if(!email || !senha){
        alert("Campos de preenchimento obrigatorio. Favor preencher");
    }else{
        alert("campos preenchidos com sucesso");
    }
}