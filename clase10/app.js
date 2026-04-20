// Datos de la persona

let nombre = "Mariano"

let pais = "Argentina"

let edad = 18

let mayorEdad = edad >= 18

let tieneTrabajo = false


let trabajo
if (tieneTrabajo) {
   trabajo = "Tengo trabajo"
} else {
   trabajo = "No tengo trabajo"
}

/*1*/
console.log("hola, soy " + nombre + " soy de ", pais + " y tengo una edad de ", edad + " años" + " y ", trabajo)

/*2*/
if (mayorEdad) {
   console.log("Es mayor de edad")
} else {
   console.log("Es menor de edad")
}
/*3*/
console.log(trabajo)

/*4*/

if (tieneTrabajo && mayorEdad) {
   console.log("Está trabajando")
} else if (!tieneTrabajo && mayorEdad) {
   console.log("Puede Trabajar")
} else {
   console.log("No puede trabajar")
}

