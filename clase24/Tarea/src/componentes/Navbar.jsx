import { useContext } from "react";
import UsuarioContext from "../context/usuarioContext";


function Navbar() {

    const datos = useContext(UsuarioContext);
    return (
        <>
            {datos.usuario ? (
                <>
                <h1>Hola, {datos.usuario.nombre}</h1>
                <button onClick={datos.logout}>LOGOUT</button>
                </>
            ) : (
                <>
                    <h1>No hay ningún usuario logueado</h1>
                    <button onClick={datos.login}>LOGIN</button>
                </>
            )}
        </>
    );
}

export default Navbar;