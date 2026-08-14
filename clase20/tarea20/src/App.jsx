import Header from "./componentes/Header";
import Producto from "./componentes/Producto";
import Perfil from "./componentes/Perfil";
import Footer from "./componentes/Footer";
import "./App.css";

//Tarea 4

function App() {
  return (
    <>
      <Header></Header>
      <Perfil nombre =" Mariano" edad="26" correo="launfnfnfnf@gmail.com"></Perfil>
      <Producto producto="Coca-Cola" precio={250} />
      <Producto producto="Sprite" precio={250} />
      <Producto producto="Alfajor" precio={100} />
      <Footer></Footer>
      
    </>
  )
}

export default App;