// 1️⃣ 

function calcularAreaRectangulo() {
    let base = 10
    let altura = 10
    return base * altura
}
console.log(calcularAreaRectangulo())

// 2️⃣

function esMayorDeEdad(edad) {
    return edad >= 18
}
console.log(esMayorDeEdad(5))

// 3️⃣ 

let pais = "Brasil"

function mostrarRegion() {
    let ciudad = "Sao Paolo"
    return "Es la region de " + pais + " ," + ciudad
}
console.log(mostrarRegion())

// 4️⃣
function repetirTexto(texto, cantidadDeVecesARepetir) {
    for (let i = 0; i < cantidadDeVecesARepetir; i++) {
         console.log(texto)
    }
}
repetirTexto("Mariano",3)