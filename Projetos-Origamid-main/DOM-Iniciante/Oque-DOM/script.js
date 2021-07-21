window.alert('teste');

const h1Selecionado = document.querySelector('h1');
const h1Classe = h1Selecionado.classList;

function callbackH1(){
    console.log('foi clicado no ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click',callbackH1);
const test = location
console.log(test)