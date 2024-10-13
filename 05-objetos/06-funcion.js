

function Usuario(nombre) {
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let User = new U('Daniel');

console.log(User);

function of(Fn, arg) {
    return new Fn(arg);

}

let user1 = of(Usuario, ' ricardo');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola mundo');
    }
}

let saludo = returned();
saludo();