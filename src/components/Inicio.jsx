import React from "react";
import Card from "react-bootstrap/Card";

export const Inicio = () => {
  return (
    <>
      <h1 className=" display-1 text-center">Inicio</h1>
      <Card className="w-50 mx-auto card text-white bg-secondary mb-3">
        <Card.Header as="h5" className="text-center">
          Sharon Monroy
        </Card.Header>
        <Card.Body className="d-flex flex-column justify-center">
          <Card.Img
            className="w-50 mx-auto d-block"
            src="https://sharontatiana.github.io/bit07me/img/me.jpg"
          />
        </Card.Body>
      </Card>
    </>
  );
};
