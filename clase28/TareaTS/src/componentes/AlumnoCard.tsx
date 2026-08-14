import type { Alumno } from "./Alumnos";


interface AlumnoCardProps {
    alumno: Alumno;
}

function AlumnoCard({ alumno }: AlumnoCardProps){

    return (
        <>
        <div>
            <h2>Nombre del alumno: {alumno.nombre}</h2>
            <h3>numero de identificacion: {alumno.id}</h3>
            <h3>curso perteneciente: {alumno.curso}</h3>
            <h3>nota: {alumno.nota}</h3>
        </div>
        </>
    );

    
}
export default AlumnoCard;