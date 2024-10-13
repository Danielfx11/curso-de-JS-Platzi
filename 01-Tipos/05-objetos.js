//personaje de TV
let nombre = "Daniel";
let anime = "chingeky"
let edad = 15;

let personaje = {
    nombre : "Daniel",
    anime : "chingeky",
    edad : 15,
}
console.log(personaje);
console.log(personaje.anime);
console.log(personaje["edad"]);

personaje.edad = 12;

let llave = "edad";
personaje[llave] = 16;

delete personaje.anime;

console.log(personaje);