// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// };

// const nome = 'nome';

// console.log(pessoa[nome]);

// pessoa.falar = function () {
//     console.log(`${this.nome} aaaaaaaaaa`)
// }

// pessoa.falar();

// pessoa.idade = 22;

// pessoa.getNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// }

// console.log(pessoa.getNascimento());

// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Caio', 'Fernandes');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Caio', 'Fernandes');
const p2 = new Pessoa('Roger', 'Destruidor');


console.log(p1)
console.log(p2)