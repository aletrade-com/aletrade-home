import React from 'react';

const Home = () => {
  return (
    <section className="py-10 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-600">
        <span className="inline-flex items-center gap-2">
          Bienvenido a 
          <img src="/logo-horizontal.png" alt="Aletrade" className="h-8 inline-block" />
        </span>
      </h1>

      <p className="text-xl mt-4 text-gray-800">
        Tu asistente para el control de <strong>finanzas personales y profesionales</strong>.
      </p>

      <div className="mt-6">
        <a
          href="/recursos"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Ver recursos disponibles
        </a>
      </div>
    </section>
  );
};

export default Home;