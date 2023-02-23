import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

export const Exe2 = () => {
  const [img, setimg] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, seterror] = useState(false);

  const handleClick = () => {
    setCargando(true);
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => {
        setimg(data.url);
        setTimeout(() => {
          setCargando(false);
        }, 1000);
      })
      .catch((error) => {
        seterror(true);
        setCargando(false);
      });
  };

  return (
    <>
      <h2 className="display-4">Imagen de patos</h2>
      <div className="d-flex flex-column align-items-center">
        <Button
          variant="warning"
          className="mb-3 btn btn-outline btn-lg"
          size="lg"
          onClick={handleClick}>
          Mostar Img
        </Button>
        {error ? (
          <Alert variant="danger">
            Ha ocurrido un error al cargar la imagen
          </Alert>
        ) : cargando ? (
          <Spinner animation="grow" variant="warning" />
        ) : (
          img && (
            <img src={img} alt="Imagen aleatoria" className="img-thumbnail" />
          )
        )}
      </div>
    </>
  );
};
