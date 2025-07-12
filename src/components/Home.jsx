import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-10 px-6 text-center">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-600 text-center">
  <span className="inline-flex items-center gap-1 justify-center">
    Bienvenido a
    <img src="/logo-horizontal.png" alt="Aletrade" className="h-16 sm:h-20 inline-block" />
  </span>
</h1>

      <p className="text-xl mt-4 text-gray-800">
        Tu asistente para el control de <strong>finanzas personales y profesionales</strong>.
      </p>

      <div className="mt-6">
        <Link
  to="/recursos"
  className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
>
  Ver recursos disponibles
</Link>
      </div>
    </section>
  );
};

export default Home;