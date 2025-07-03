import React from "react";
import { Link } from "react-router-dom";

export default function Confirmacion() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-600">✅ Mensaje enviado</h1>
      <p className="mb-6 text-lg text-gray-700">
        Gracias por tu mensaje. Me pondré en contacto contigo lo antes posible.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        Volver al inicio
      </Link>
    </section>
  );
}