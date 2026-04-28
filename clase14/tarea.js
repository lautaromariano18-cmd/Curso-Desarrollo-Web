// Crear un nuevo array con todos los números multiplicados por 2
let numero1 = [5, 10, 15, 20]

let multiplicarTodos = numero1.map((indice) => { return indice * 2 })

console.log(multiplicarTodos)

// Crear un nuevo array sumando 5 a cada número

let sumarCinco = numero1.map((indice) => { return indice + 5 })

console.log(sumarCinco)

// Obtener todos los números mayor a 10

let numero2 = [3, 12, 7, 20, 1, 18]

let mayorADiez = numero2.filter((indice) => { return indice > 10 })

console.log(mayorADiez)

// Encontrar el número mayor 

let numero3 = [2, 33, 4, 6, 29, 8]

let mayorNumero = numero3.reduce((acumulador, num) => {
    if (num > acumulador) {
        return num
    } else {
        return acumulador
    }
}, 0)

console.log(mayorNumero)