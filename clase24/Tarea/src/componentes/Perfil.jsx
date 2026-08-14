import UsuarioContext from "../context/usuarioContext";
import { useContext } from "react";

function Perfil() {
    const datos = useContext(UsuarioContext);
    return (
        <>
            {datos.usuario ? (
                <h2>{datos.usuario.nombre}</h2>
            ) : (
                 <h2>No hay usuario</h2>   
                )}
        </>
    );
}
export default Perfil;
