function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('aaaaa')
            }
            estoquePrivado = valor;
        }
    });

}
const p1 = new Produto('Camisa', 20, 3);
console.log(p1.estoque);