function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true,
    });

    Object.defineProperty(this, 'estoque', {
        writable: true,
        configurable: true,
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 5;
delete p1.estoque;
console.log(p1);