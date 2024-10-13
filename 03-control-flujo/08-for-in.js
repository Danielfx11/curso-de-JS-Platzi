
// FOR - IN 
let user = {
    id: 1,
    name: 'dragon',
    age: 22,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

// FOR - OF
let animales = ['dog','cat','horse'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}
