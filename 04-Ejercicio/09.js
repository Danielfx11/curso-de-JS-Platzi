/**
 * crear una algoritmo que devuelva un
 * array de objetos en base a pares
 */
let pairs = [
    [1, { name: "Daniel"}],
    [2, { name: "Ricardo"}],
    [3, { name: "Dragón"}],
];

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

function toCollection(arr) {
    let colletion = [];
    for (idx in arr) {
        let elemento = arr[idx];
        colletion[idx] = elemento[1];
        colletion[idx].id = elemento[0];
    }
    return colletion;
}
let resultado = toCollection(pairs);
console.log(resultado);