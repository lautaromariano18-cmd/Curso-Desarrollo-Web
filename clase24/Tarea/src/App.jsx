import { UsuarioProvider } from "./context/usuarioContext";
import Navbar from "./componentes/Navbar";
import Perfil from "./componentes/Perfil";

import './App.css'

function App() {
  
  return (
    <>
      <UsuarioProvider>
        <Navbar></Navbar>
        <Perfil></Perfil>
      </UsuarioProvider>
    </>
  );
}

export default App;
