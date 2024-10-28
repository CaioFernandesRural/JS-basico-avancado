function* geradore1(){
    yield 'Valor1';
    yield 'Valor2';
    yield 'Valor3';
}

console.log(geradore1().next().value);
console.log(geradore1().next());
console.log(geradore1().next());