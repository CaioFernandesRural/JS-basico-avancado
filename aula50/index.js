//arguments vem sempre e guarda todos os argumentos enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7, 8);

// function funcao(a, b = 2, c = 10) {
    
//     console.log(a + b + c);
// }
// funcao(2, undefined, 6);

// function funcao([a, b, c]) {
//     console.log(a, b, c);
// };
// funcao(['ah', 'be', 'ce'])
function funcao(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    };
    console.log(acumulador);
};
funcao('+', 200, 20, 30, 40, 50);