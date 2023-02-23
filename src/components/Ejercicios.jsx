import React, { useState } from "react";
import { Exe1 } from "./Exe1";
import { Exe2 } from "./Exe2";
import { Exe3 } from "./Exe3";
import { Exe4 } from "./Exe4";
import { Exe5 } from "./Exe5";
import Button from "react-bootstrap/Button";

export const Ejercicios = () => {
  const [ejercicio, setEjercicio] = useState(null);

  return (
    <>
      <section>
        <h1 className=" display-1 text-center">Exercicios</h1>
        {!ejercicio ? (
          <ol className="d-grid gap-2 col-6 mx-auto">
            <li
              className="btn btn-outline-danger btn-lg"
              onClick={() => setEjercicio(<Exe1 />)}>
              Exercicio 1: Contador
            </li>
            <li
              className="btn btn-outline-danger btn-lg"
              onClick={() => setEjercicio(<Exe2 />)}>
              Exercicio 2: Mostrar imagen
            </li>
            <li
              className="btn btn-outline-danger btn-lg"
              onClick={() => setEjercicio(<Exe3 />)}>
              Exercicio 3: Directorio telefonico
            </li>
            <li
              className="btn btn-outline-danger btn-lg"
              onClick={() => setEjercicio(<Exe4 />)}>
              Exercicio 4:
            </li>
            <li
              className="btn btn-outline-danger btn-lg"
              onClick={() => setEjercicio(<Exe5 />)}>
              Exercicio 5:
            </li>
          </ol>
        ) : (
          <div className="text-center">
            {ejercicio}
            <Button variant="link" onClick={() => setEjercicio(null)}>
              <i className="bi bi-skip-start-btn btn btn-dark btn-lg">
                {" "}
                Regresar
              </i>
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
