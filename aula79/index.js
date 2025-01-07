const flar = {
    flar(){
    console.log('fffffffff')
    }
};
const cmer = {
    cmer(){
        console.log('ccccccccc')
    }
};
const bber = {
    bber(){
        console.log('bbbbbbbbb')
    }
};

const pessoaPrototype = { ...flar, ...bber, ...comer}

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype,{
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criaPessoa('Caio', 'Fernandes')
const p2 = criaPessoa('Caio', 'Fernandes')
console.log(p1);
console.log(p2);