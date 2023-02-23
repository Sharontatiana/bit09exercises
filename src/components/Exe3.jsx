import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export const Exe3 = () => {
  const [directorio, setdirectorio] = useState([]);
  const [cargado, setcargando] = useState(false);
  const [error, seterror] = useState(false);

  useEffect(() => {
    setcargando(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (data) => setdirectorio(data),
        setTimeout(() => {
          setcargando(false);
        }, 1000)
      )
      .catch((error) => {
        seterror(true);
        setcargando(false);
      });
  }, []);

  return (
    <>
      <h2 className="display-4">Directorio Telefonico</h2>
      {error ? (
        <Alert variant="danger">
          Ha ocurrido un error al cargar el directorio
        </Alert>
      ) : cargado ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      ) : (
        directorio.length > 0 && (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {directorio.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.name}</td>
                  <td>{persona.phone}</td>
                  <td>{persona.email}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      )}
    </>
  );
};
