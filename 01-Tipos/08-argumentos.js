function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(8,5 ,4, 1);
console.log(resultado);
console.log(typeof suma);