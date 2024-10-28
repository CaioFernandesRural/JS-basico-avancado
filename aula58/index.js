function Pessoa(nome, sobrenome){
    const ID = 123456;

    const metodoInterno = function(){

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' AAAAAAAAAAAAA')
    };
}

const p1 = new Pessoa('Caio', 'Fernandes');
const p2 = new Pessoa('Eshley', 'Bispo');

p1.metodo()