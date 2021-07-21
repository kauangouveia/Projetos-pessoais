const pessoa = {
    nome: 'André',
    idade: 28,
}
console.log(pessoa.idade);

const quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}
console.log(quadrado.area(this.lados));

const menu = {
    width: 800,
    heigt: 50,
    background: '#84E',
    metaeHigh() {
        return this.heigt / 2;
    }
}
menu.background = '#000';
menu.color = 'blue';

menu.esconder = function () {

}

var bg = menu.background
// Exercicios 
const dadosPessoais = {
    nome: 'Kauan',
    sobrenome: 'Gouveia',
    idade: 17,
    sexo: 'masculino',
    time: 'SPFC',
    nomeCompleto() {
        return `Seu nome completo é : ${this.nome} ${this.sobrenome}`;
    }
}

console.log(dadosPessoais.nomeCompleto());

const carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi',

}
carro.preco = 3000;
console.log(carro.preco)

const labrador = {
    cor: '#000',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'latir'
        } else {
            return 'nada'
        }
    },
    patas: 4,
    temDono: true,
}

console.log(labrador.latir('mulher'));
// Tudo é objeto...

const nome = "kauan";

// Propriedades e metodos
nome.length; // 5  numero de caracteres;
nome.charAt(2) // retorna a letra especifica daquele caracter;
nome.replace('ka', 'ko') // troca as letras passadas como parametro :'kouan';
nome // retorna o que esta na variavel 

const nomeGrande = nome.toLocaleUpperCase(nome);
console.log(nomeGrande);

const btn = document.querySelector('.btn');