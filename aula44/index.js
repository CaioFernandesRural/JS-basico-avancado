

function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('aaaaaa');
    }

    return x + y;
}
try {
    console.log(soma('opa',2))
} catch (error) {
    console.log('aaa')    
    // console.log(error)    
}