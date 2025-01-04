function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    this.estoque = estoque
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camisa('regata', 7.5, 'preta');
const caneca = new Caneca('caneca', 13, 'plastico', 5)
console.log(camiseta)
console.log(caneca)