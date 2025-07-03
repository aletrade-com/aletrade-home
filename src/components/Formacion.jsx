import React from "react";

export default function Formacion() {
  const formaciones = [
    {
      titulo: "📘 Cursos en PDF",
      descripcion: "Material descargable con teoría, ejercicios prácticos y plantillas para gestionar tu dinero o negocio.",
    },
    {
      titulo: "🎯 Talleres en vivo",
      descripcion: "Sesiones en directo con contenido aplicable, interacción grupal y resolución de casos reales.",
    },
    {
      titulo: "🤖 Tutorías con IA + soporte humano",
      descripcion: "Acompañamiento personalizado asistido por inteligencia artificial y seguimiento directo conmigo.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Formación</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formaciones.map((formacion, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{formacion.titulo}</h2>
            <p className="text-gray-600 mb-4">{formacion.descripcion}</p>
            <a
              href="/contacto"
              className="inline-block mt-auto text-blue-600 hover:underline text-sm"
            >
              Solicitar información →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}