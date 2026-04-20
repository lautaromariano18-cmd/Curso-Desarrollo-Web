// Invertir un array
let numeros = [0, 1, 2, 3, 4, 5]

for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i])
}

// Crear un array y eliminar todos sus elementos usando pop en un loop

let vocales = ["a", "e", "i", "o", "u"];
let cantidadDeVocales = vocales.length;
for (let i = 0; i < cantidadDeVocales; i++) {
    vocales.pop();
    console.log(vocales);
}
//Crear un array y duplicar todos sus elementos en consola (pueden usar strings para que sea mas facil):

//1 -> 11
//2 -> 22
//3 -> 33

let tecnologia = ["auriculares ", "celular ", "TV "]

function duplicarTecnologia() {
    for (let i = 0; i < tecnologia.length; i++)
        console.log((tecnologia[i]) + (tecnologia[i]))
}
duplicarTecnologia()