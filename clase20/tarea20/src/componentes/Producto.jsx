// Tarea 1
function Producto(props) {

    return (
        <div>
            <h1> Su producto es, {props.producto}</h1>
            <p>Precio: ${props.precio}</p>
        </div>
    )
}
export default Producto