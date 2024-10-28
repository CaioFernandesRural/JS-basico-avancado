function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },
        fala: function(assunto){
            return `${nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // getter
        get imc() {
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Caio', 'Fernandes', 1.75, 93);
p1.nomeCompleto = 'Roberto Cavalcante';
console.log(p1.nomeCompleto);