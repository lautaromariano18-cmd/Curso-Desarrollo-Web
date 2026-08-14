import {createContext, useState} from "react";

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
    const [usuario, setUsuario] = useState(null)  /* {
        nombre: "Mariano",
        pais: "Argentina",
    }); */
    function login() {
    setUsuario({
        nombre: "Mariano",
        pais: "Argentina",
    });
}

function logout() {
    setUsuario(null);
}
    return (
        <UsuarioContext.Provider value = {{usuario, login, logout}}>
            {children}
        </UsuarioContext.Provider>
    );
}

export default UsuarioContext;
















/* import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home
        className={"home" + theme == "light" ? "home-light" : "home-dark"}
      />
    </ThemeContext.Provider>
  );
}
 */