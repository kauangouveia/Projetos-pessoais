// 'use strict'

// const menu =  document.querySelector('.Menu');

// menu.classList.add('ativo');
// menu.classList.remove('ativo');
// menu.classList.toggle('azul')

// if (menu.classList.contains('azul')) {
//     menu.classList.add('ativo');
// };
// const animais = document.querySelector('.animais');
// console.log(animais.attributes[1]);

// const img  = document.querySelector('img');

// console.log(img.setAttribute('alt', 'kauan'));

const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
console.log(height)

const animaisto = listaAnimais.offsetTop
console.log(animaisto);

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft
console.log(h2left);
