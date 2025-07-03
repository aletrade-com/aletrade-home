import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">

      <h1 className="titulo-responsive">
        🚀 Nueva versión publicada en Aletrade
      </h1>

      {/* ALERTA ROJA */}
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6" role="alert">
        <p className="font-bold">🔒 Demo privada</p>
        <p>Estás accediendo a una versión de demostración en desarrollo. El contenido puede cambiar sin previo aviso.</p>
      </div>

      <p className="text-center text-gray-700 max-w-xl mt-6">
        Esta es la demo inicial de tu nueva página profesional. Desde aquí tendrás acceso a servicios con IA, 
        finanzas personales, apoyo administrativo y mucho más.
      </p>

    </div>
  );
}