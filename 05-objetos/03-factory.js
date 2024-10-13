function createUser(name,email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...');
        },
    };
}

let user1 = createUser('Daniel', 'daniel@holamundo.io');
let user2 = createUser('lalo', 'lalo@gmail.com');

console.log(user1, user2);