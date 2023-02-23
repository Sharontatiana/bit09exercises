import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useEffect } from "react";

export const Exe1 = () => {
  const [contador, setcontador] = useState(0);
  const [color, setcolor] = useState(null);

  useEffect(() => {
    if (contador > 0) setcolor("success");
    else if (contador < 0) setcolor("danger");
    else setcolor("secondary");
  }, [contador]);

  return (
    <>
      <section>
        <h1 className="display-4">
          Contador{" "}
          <Badge className="mx-auto my-3" bg={color}>
            {contador}
          </Badge>
        </h1>
        <ButtonGroup className="mb-2">
          <Button
            className="btn btn-danger"
            onClick={() => setcontador(contador - 1)}>
            Disminuir
          </Button>
          <Button className="btn btn-secondary" onClick={() => setcontador(0)}>
            Resetear
          </Button>
          <Button
            className="btn btn-success"
            onClick={() => setcontador(contador + 1)}>
            {" "}
            Aumentar
          </Button>
        </ButtonGroup>
      </section>
    </>
  );
};
