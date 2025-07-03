import React from "react";

export default function Recursos() {
  const recursos = [
    {
      titulo: "📄 Plantillas de control financiero",
      descripcion: "Hojas de cálculo listas para usar: presupuestos, control de gastos, y planificación mensual.",
      disponible: true,
    },
    {
      titulo: "📚 Guías prácticas de gestión documental",
      descripcion: "Pasos claros para organizar, clasificar y archivar documentos físicos y digitales.",
      disponible: true,
    },
    {
      titulo: "🛠️ Herramientas digitales recomendadas",
      descripcion: "Listado comentado de apps y plataformas útiles para autónomos y pequeños negocios.",
      disponible: false,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recursos</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recursos.map((recurso, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{recurso.titulo}</h2>
            <p className="text-gray-600 mb-4">{recurso.descripcion}</p>
            {recurso.disponible ? (
              <a
                href="/contacto"
                className="inline-block mt-auto text-blue-600 hover:underline text-sm"
              >
                Solicitar acceso →
              </a>
            ) : (
              <span className="inline-block text-sm text-gray-400 italic">Disponible próximamente</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}