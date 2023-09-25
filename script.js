let banana = true;

function mudarTexto() {
    let titulo = document.querySelector('h1')
    titulo.innerText = 'Site Grande RIO'
}


function mudarCSS() {
    let par = document.querySelector('p')
    par.style.color = 'yellow';
    par.style.backgroundColor = '#f15609';
    par.style.textAlign = 'right';
}

function mudaratributo() {
    let imagem = document.querySelector('img');
    if (banana) {
        imagem.setAttribute('src', './imagens/th.jpg');
        banana = false;
    } else {
        imagem.setAttribute('src', './imagens/carnaval-rio.png');
        banana = true;
    }

}


//mudarTexto();
let botao01 = document.querySelector('#bt01');
botao01.addEventListener('click', mudarTexto);

//mudarcss()
let botao02 = document.querySelector('#bt02');
botao02.addEventListener('click', mudarCSS);

//mudarimg()
let botao03= document.querySelector('#bt03');
botao03.addEventListener('click', mudaratributo);