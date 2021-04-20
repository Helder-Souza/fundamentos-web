let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let anime = window.document.getElementById('anime')
let nomeOk = false
let emailOk = false
let comentarioOk = false
let mapa = document.querySelector('#mapa')
let imagem = document.querySelector('#imagem')

nome.style.width = '100%'
email.style.width = '100%'
anime.style.width = '95%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaComentario() {
    let txtComentario = document.querySelector('#txtComentario')
    if(comentario.value.length >= 100) {
        txtComentario.innerHTML = 'O comentário é muito grande, digite no máximo 100 caracteres'
        txtComentario.style.color = 'red'
        txtComentario.style.display = 'block'
    } else {
        txtComentario.style.display = 'none'
        comentarioOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true &&comentarioOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '700px'
    mapa.style.height = '500px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}

function imagemZoom() {
    imagem.style.width = '700px'
    imagem.style.height = '500px'
}

function imagemNormal() {
    imagem.style.width = '500px'
    imagem.style.height = '350px'
}

function mudaFoto(foto){
    document.getElementById("icone").src=foto;
}
function mudaFoto2(foto){
    document.getElementById("icone2").src=foto;
}