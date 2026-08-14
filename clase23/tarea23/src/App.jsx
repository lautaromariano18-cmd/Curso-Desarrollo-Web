import { useState } from "react";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    genero: "",
  });

  const [error, setError] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    genero: "",
  });

  function validarDatos(usuarioActualizado) {
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]*$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexEdad = /^(?:[1-9][0-9]?|100)$/;

    const nuevosErrores = {
      nombre:
        usuarioActualizado.nombre.length === 0
          ? "Este espacio debe ser completado"
          : !regexNombre.test(usuarioActualizado.nombre)
            ? "El nombre debe contener letras y espacios"
            : "",
      apellido:
        usuarioActualizado.apellido.length === 0
          ? "Este espacio debe ser completado"
          : !regexApellido.test(usuarioActualizado.apellido)
            ? "El apellido debe contener letras y espacios"
            : "",
      email:
        usuarioActualizado.email.length === 0
          ? "Este espacio debe ser completado"
          : !regexEmail.test(usuarioActualizado.email)
            ? "El email debe ser valido"
            : "",
      edad:
        usuarioActualizado.edad.length === 0
          ? "Este espacio debe ser completado"
          : !regexEdad.test(usuarioActualizado.edad)
            ? "El campo debe ser completado solo con Números del 1 - 100"
            : "",
    };

    setError(nuevosErrores);
    return nuevosErrores;
  }

  function enviar(event) {
    event.preventDefault();
    validarDatos(usuario);
  }

  function guardarCambio(event) {
    const nuevoUsuario = {
      ...usuario,
      [event.target.name]: event.target.value,
    };

    setUsuario(nuevoUsuario);

    if (error[event.target.name].length !== 0) {
      validarDatos(nuevoUsuario);
    }
  }

  function limpiarFormulario() {

    setUsuario({
      nombre: "",
      apellido: "",
      edad: "",
      email: "",
      genero: "",
    });


    setError({
      nombre: "",
      apellido: "",
      edad: "",
      email: "",
      genero: "",
    });
  }

  return (
    <>
      <h1 className="titulo">Fórmulario</h1>
      <form onSubmit={enviar}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Escriba su nombre.."
          value={usuario.nombre}
          onChange={guardarCambio}
        />
        {error.nombre.length !== 0 ? <label className="input-error">{error.nombre}</label> : <></>}

        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          placeholder="Escriba su apellido.."
          value={usuario.apellido}
          onChange={guardarCambio}
        />
        {error.apellido.length !== 0 ? <label className="input-error">{error.apellido}</label> : <></>}

        <label>Edad</label>
        <input
          type="number"
          name="edad"
          placeholder="Coloque su Edad.."
          value={usuario.edad}
          onChange={guardarCambio}
        />
        {error.edad.length !== 0 ? <label className="input-error">{error.edad}</label> : <></>}

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Escriba su Email.."
          value={usuario.email}
          onChange={guardarCambio}
        />
        {error.email.length !== 0 ? <label className="input-error">{error.email}</label> : <></>}

        <label htmlFor="genero">Género</label>
        <select name="genero" value={usuario.genero} onChange={guardarCambio}>
          <option value="" disabled>Coloque su género</option>
          <option>Femenino</option>
          <option>Masculino</option>
        </select>

        <div className="botones">
          <button type="submit" className="btn-enviar">Enviar</button>
          <button type="button" className="btn-limpiar" onClick={limpiarFormulario}>Limpiar</button>
        </div>
      </form>

      {usuario.nombre && usuario.apellido && usuario.edad && usuario.email &&
        !error.nombre && !error.apellido && !error.edad && !error.email ? (
        <div className="mostrarDatosActualizados">
          <h2>Datos Registrados Exitosamente:</h2>
          <p><strong>Nombre:</strong> {usuario.nombre}</p>
          <p><strong>Apellido:</strong> {usuario.apellido}</p>
          <p><strong>Edad:</strong> {usuario.edad}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Género:</strong> {usuario.genero || "No especificado"}</p>
        </div>
      ) : null}
    </>
  );
}

export default App;