// Crear objeto usuario 

class usuario {
    constructor(nombre, edad, email, activo, pais) {
        this.nombre = nombre,
            this.edad = edad,
            this.email = email,
            this.activo = activo,
            this.pais = pais
    }
    mostrarUsuario() {
        console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.")
    }
    esMayorDeEdad() {
        return this.edad >= 18
    }
    mostrarEstadoActivo() {
        if(this.activo) {
            console.log ("Usuario activado")
        } else {
            console.log ("Usuario desactivado")
        }
    }
    mostrarNacionalidad () {
        if (this.activo && this.esMayorDeEdad()) {
            console.log ("Usuario activo de " + this.pais )
        } else {
            console.log ("No cumple con las condiciones")
        }
    }
    cambiarEdad(nuevaEdad) { this.edad = nuevaEdad }
}

const persona1 = new usuario("Mariano", 17, "lautaromariano@gmmail.com", true, "Argentina")

persona1.mostrarUsuario()
console.log(persona1.esMayorDeEdad())
persona1.cambiarEdad(26)
console.log(persona1.esMayorDeEdad())
persona1.mostrarEstadoActivo()
persona1.mostrarNacionalidad()




