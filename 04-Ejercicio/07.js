/**
 * crear un algoritmo que devuelva
 * el precio del porducto
 * mas impuesto
 */

function precioCompleto(precio, impuesto) {
    return precio + precio * impuesto;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);