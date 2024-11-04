const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobro = numeros.map(valor => valor * 2);

console.log(numerosDobro)

const pessoas = [
    {nome : 'Luiz', idade: 62},
    {nome : 'Maria', idade: 23},
    {nome : 'Eduardo', idade: 55},
    {nome : 'Leticia', idade: 19},
    {nome : 'Rosana', idade: 32},
    {nome : 'Wallacea', idade: 47},
];

const nomes = pessoas.map(pessoa => pessoa.nome);

const semNomeComId = pessoas.map((pessoa, indice) => {
    const newObj = {...pessoa};
    delete newObj.nome;
    newObj.id = indice;
    return newObj;
});

console.log(nomes);
console.log(semNomeComId);