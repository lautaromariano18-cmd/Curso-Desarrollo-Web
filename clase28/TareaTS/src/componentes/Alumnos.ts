export interface Alumno {
    id: number,
    nombre: string,
    curso: string,
    nota: number,

};

export let alumno1: Alumno = {
    id:20,
    nombre: "Mariano",
    curso: "React",
    nota: 10,

};

export let alumno2: Alumno = {
    id: 23,
    nombre: "Milagros",
    curso: "React",
    nota: 5,
};

export let arrayDeAlumnos: Alumno[] = [alumno1, alumno2];


export function calcularPromedio(alumnos: Alumno[]): number {

    let suma = 0;
    for (let i = 0; i < alumnos.length; i++) {
        suma+=alumnos[i].nota;
    }
  return suma / alumnos.length
};

console.log(calcularPromedio(arrayDeAlumnos));

