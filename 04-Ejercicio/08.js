/**
 * crear una algoritmo que tome un array de 
 * objetos y devuelva un array de pares
 */

let array = [{
    id: 1,
    name: 'Daniel',
}, {
    id: 2,
    name: 'Ricardo',
}, {
    id: 3,
    name: 'Dragón',
}];

let pares = [
    [1, { name: "Daniel"}],
    [2, { name: "Ricardo"}],
    [3, { name: "Dragón"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];

    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);