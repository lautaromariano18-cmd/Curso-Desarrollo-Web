import AlumnoCard from './componentes/AlumnoCard'
import { alumno1, alumno2 } from "./componentes/Alumnos";
import './App.css'



function App() {

  return (
    <>
      <h1>Alumnos del curso de Ambox</h1>
      <AlumnoCard alumno={ alumno1}></AlumnoCard>
      <AlumnoCard alumno={ alumno2}></AlumnoCard>
    </>
  );
}

export default App;

