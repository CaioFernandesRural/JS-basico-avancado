function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camisa', 100)

const p2 = {
    nome: 'canetaa',
    preco: 100
}
Object.setPrototypeOf(p2, Produto.prototype)

p1.desconto(80)
console.log(p1)
p2.aumento(50)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 42
    },
    tamanho2: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 42
    }
});

p3.aumento(20)
console.log(p3)