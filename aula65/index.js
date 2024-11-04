// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]



// const filtrados = numeros.filter(valor => valor > 10);

// console.log(filtrados);

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallacea', idade: 47},
];

const pessoasComNomao = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasVeia = pessoas.filter(obj => obj.idade >= 50);
const pessoasTerminaA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomao)
console.log(pessoasVeia)
console.log(pessoasTerminaA)