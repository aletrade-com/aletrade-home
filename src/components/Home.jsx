import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">Bienvenido a Aletrade</h1>
      <p className="text-center text-gray-700 max-w-xl">
        Esta es la demo inicial de tu nueva página profesional. Desde aquí tendrás acceso a servicios con IA, finanzas personales, apoyo administrativo y mucho más. Pronto el menú y otras secciones estarán activas.
      </p>
    </div>
  );
}