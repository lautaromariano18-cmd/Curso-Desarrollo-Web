import { createContext } from "react"

const CarritoContext = createContext();

export function carritoProvider({children}) {
    const [carrito, setCarrito] = useState({
    producto1: "IrishRed",
    producto2: "Honey",
    });

    function agregarProducto(){
        return (
            <>
                <h2>
                    
                </h2>
            </>
        )
    }
    
    function quitarProducto(){

    }


}

    

    function
