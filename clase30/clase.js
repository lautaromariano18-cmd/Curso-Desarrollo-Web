/* class cuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto) {
        this.saldo = this.saldo + monto
    }
    extraer(monto) {
        if (monto <= this.saldo) {
            this.saldo = this.saldo - monto
        } else {
            console.log("no hay suficiente dinero")
        }
    }
    consultarSaldo() {
        console.log("Su saldo actual es: ", this.saldo)
    }
}
 */


class personaje {
    constructor(nombre, vida, ataque) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }
    recibirDanio(cantidad){
        if(cantidad >= this.vida) {
             this.vida = 0;
            console.log("Se realizo el ataque pero la vida queda en 0")
        } else {
            this.vida -= cantidad;
        }
    }
        
    curar(cantidad){
        this.vida += cantidad;
        console.log("Tu vida se reestablecio a un porcentaje de %: ", cantidad ) 
    }
    mostrarEstado() {
        console.log(
            "Nombre:", this.nombre,
            "Vida:" , this.vida,
            "Ataque:", this.ataque,
        );
    }
}

const avatar = new personaje ("Ang", 100, 100)

avatar.mostrarEstado();
avatar.recibirDanio(1000);
avatar.mostrarEstado();
