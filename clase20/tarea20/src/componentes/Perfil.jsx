// Tarea 2
function Perfil(props) {

    return (
        <div>
            <h1>Hola, soy {props.nombre}!</h1>
            <p> Tengo {props.edad} años de edad.</p>
            <p>Mi correo es; {props.correo}</p>
        </div>
    )
}
export default Perfil