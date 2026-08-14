import { useState } from "react";


function InterfaceAlumno() {
    
    const [usuario, setUsuario] = useState({

    });

    return (
        <>
            <h1>{usuario.nombre}</h1>
            
        </>
    );
}

export default Alumno;