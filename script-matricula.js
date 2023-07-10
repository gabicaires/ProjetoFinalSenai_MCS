var nome = document.querySelector("#nome")
var email = document.querySelector("#email")
var senha = document.querySelector("#senha")
var confirmarSenha = document.querySelector("#confirmar-senha")
var data = document.querySelector("#data")
var senhaInformada = document.querySelector("#senha-informada")



var validarSenha = ()=>{
    if(senha.value == confirmarSenha.value){
        senhaInformada.innerHTML = "Senhas conferem!"
        senhaInformada.style.color = 'green'
        
        localStorage.setItem('nome',nome.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('senha',senha.value)
        location.href = 'index.html'
        return true
    } else{
        senhaInformada.innerHTML = "Senhas não conferem!"
        senhaInformada.style.color = 'red'
        return false
    }
}

confirmarSenha.addEventListener('focusout', validarSenha)
