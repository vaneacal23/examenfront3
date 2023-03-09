import { useState } from "react";
import Card from "./Card";
import "./style.css";

function App() {
  const [textoValidacion, setTextoValidacion] = useState("");
  function validacionFormulario(e) {
    e.preventDefault();
    const nombre = e.target[0].value;
    const apellido = e.target[1].value;
    if (nombre.length < 3 || nombre[0] == " " || apellido.length < 6) {
      setTextoValidacion("Por favor chequea que la información sea correcta");
    } else {
      setTextoValidacion("");
    }
  }

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={validacionFormulario}>
        <label>
          Nombre:
          <input type="text" name="nombre" placeholder="ingrese nombre" />
        </label>
        <label>
          Apellido:
          <input type="text" name="apellido" placeholder="ingrese apellido" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <span>{textoValidacion}</span>
      <Card />
    </div>
  );
}
export default App;
