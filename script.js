var fadeLogin = document.querySelector('#fade-login')
var modalLogin = document.querySelector('#modal-login')
var abrirModalLogin = document.querySelector('#abrir-modal-login')
var entrar = document.querySelector('#entrar')
// var cadastrar = document.querySelector('#botao-matricula-aluno-confirmar')

var ativaModalLogin = [fadeLogin,abrirModalLogin]

var toggleModal = ()=>{
    fadeLogin.classList.toggle('hide-login')
    modalLogin.classList.toggle('hide-login')
}

ativaModalLogin.map((el)=>{
    el.addEventListener('click',  ()=>toggleModal())
})

// entrar.addEventListener('click',()=>{
//     alert("Login realizado")
//     toggleModal()
// })

// function confirmarCadastro() {
//     var confirmacao = confirm("Deseja confirmar o cadastro?");
  
//     if (confirmacao) {
//       alert("Cadastro realizado com sucesso! Verifique seu email para continuar o processo");
//     } else {
//       alert("Cadastro cancelado.");
//     }
//   }
  
function confirmarFaleConosco() {
    var confirmacao = confirm("Deseja enviar sua mensagem?");
  
    if (confirmacao) {
      alert("Sua mensagem foi enviada com sucesso!");
    } else {
      alert("Mensagem não enviada!");
    }
  }
  
// -------------------------------Carrossel Manual------------------------------------- 

var img = document.querySelectorAll('#img img')
var imgs = document.querySelector('#img')

var slideAtual = 0


function carrossel(){
    slideAtual ++

    if(slideAtual > img.length - 1){
        slideAtual=0

        // imgs.style.transition = 'none'
    }

    imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`
}

setInterval(carrossel, 3000)
  
// -------------------------Carrossel Manual-----------------------------------------

var carrossel2 = document.querySelector('#carrossel2')
var slides = document.querySelectorAll  ('.slide')
var left = document.querySelector('#esquerda')
var right = document.querySelector('#direita')

var slideAtual2 = 0
var qtdSlides = slides.length

left.addEventListener('click', ()=>{
    slideAtual2--
    if(slideAtual2 < 0){
        slideAtual2 = qtdSlides - 1
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

right.addEventListener('click',()=>{
    slideAtual2++

    if(slideAtual2 > qtdSlides - 1){
        slideAtual2 = 0
    }
    
    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

// -------------------------------Menu Sanduiche----------------------------------------

var fadeSanduiche = document.querySelector('#fade-sanduiche')
var modalSanduiche = document.querySelector('#modal-sanduiche')
var abrirModalSanduiche = document.querySelector('ion-icon[name=menu]')
var ativaModalSanduiche = [fadeSanduiche,abrirModalSanduiche]


var toggleModalSanduiche = ()=>{
    fadeSanduiche.classList.toggle('hide-sanduiche')
    modalSanduiche.classList.toggle('hide-sanduiche')
}

ativaModalSanduiche.map((el)=>{
    el.addEventListener('click', ()=>toggleModalSanduiche())
})


// ------------------------------Local Storage=-----------------------------------------

var email= document.querySelector('#email')
var senha = document.querySelector('#senha')
var btnLogin = document.querySelector("#entrar")

btnLogin.addEventListener('click', ()=>{
    let emailRecuperado = localStorage.getItem('email')
    let senhaRecuperada = localStorage.getItem('senha')

    if(email.value == emailRecuperado && senha.value == senhaRecuperada){
        alert("Login efetuado com sucesso!")
    } else{
        alert("Login ou senha invalidos!")
        email.style.border = "1px solid red"
        senha.style.border = "1px solid red"
    }
})