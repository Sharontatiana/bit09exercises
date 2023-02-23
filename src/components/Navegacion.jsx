import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Ejercicios } from "./Ejercicios";

export const Navegacion = () => {
  return (
    <BrowserRouter>
      <nav className="py-4 text-center bg-dark" data-bs-theme="dark">
        <Link className="mx-2 btn btn-dark" to="/">
          Inicio
        </Link>
        <Link className="mx-2  btn btn-dark" to="/Ejercicios">
          Ejercicios
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ejercicios" element={<Ejercicios />} />
      </Routes>
    </BrowserRouter>
  );
};
