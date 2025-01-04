const produto = {nome: 'produto', preco: 1.8};
const caneca = { 
    ...produto,
    material: 'porcelana'
};

caneca.nome = 'outro';
caneca.preco = 2.5;

console.log(produto)
console.log(caneca)
