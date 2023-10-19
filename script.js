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
function gerarLinhasdaTabela() { // dentro da variável declarada por let inserimos a coluna td
    let tabela = document.querySelector('table');
    let tr = document.createElement('tr'); 
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
  
    td1.innerText = 0;
    td2.innerText = 'Maria Lúcia Mercedes'; //Esses três eram inicialmente para inicialmente inserirmos valores fixos 
    td3.innerText = 45;

    tr.append(td1);
    tr.append(td2);
    tr.append(td3); 
    tabela.append(tr);  //Tudo o que está movido ali seja movido para tela. Apende vincula
}

function novoRegistro(evento){ // Aqui nós declaramos e inserirmos as td
    evento.preventDefault();
    let tabela = document.querySelector('table');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let div = document.querySelector('div')
    td1.innerText = 0;
    td2.innerText = document.querySelector('#nome').value;
    td3.innerText = document.querySelector('#idade').value;
    tr.append(td1);
    tr.append(td2);
    tr.append(td3); 
    tabela.append(tr); 
    div.style.display = 'none';

}

function mostraformulario(){ //mostra ou não o formulário
    let div = document.querySelector('div');
    div.style.display = 'flex';
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

//gerarlinhatabela()
let botao04 = document.querySelector('#bt04');
botao04.addEventListener('click', gerarLinhasdaTabela);

// novoregistro
let botaoAdd = document.querySelector('form button');
botaoAdd.addEventListener('click', novoRegistro);

// mostraformulário
let botaoNovo = document.querySelector('#btNovo');
botaoNovo.addEventListener('click', mostraformulario);