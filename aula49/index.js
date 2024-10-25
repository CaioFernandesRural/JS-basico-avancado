// function goisting
// a função é levada para o topo do arquivo pela engine
falaOi();

function falaOi() {
    console.log('Oie');
}

// funções são objetos de 1a classe
const souUmDado = function () {
    console.log('aaa');
};
souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

//isso é maluquice

//Arrow function
const funcaoArrow = () => {
    console.log('flecha');
};
funcaoArrow();

const obj = {
    falar: function () {
        console.log('aaaaa');
    }
};
obj.falar();