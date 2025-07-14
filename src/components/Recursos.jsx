
import React from "react";

const recursos = [
  {
    categoria: "Finanzas personales",
    items: [
      {
        titulo: "📊 Control de gastos e ingresos",
        descripcion: "Plantilla para registrar movimientos mensuales.",
        etiquetas: ["Gratuito", "Editable", "Actualizado"],
        archivo: "/recursos/control-gastos.xlsx",
      },
      {
        titulo: "💰 Patrimonio neto",
        descripcion: "Suma tus activos y resta tus deudas.",
        etiquetas: ["Gratuito", "Editable"],
        archivo: "/recursos/patrimonio-neto.xlsx",
      },
    ],
  },
  {
    categoria: "Finanzas profesionales",
    items: [
      {
        titulo: "📈 Ciclo contable básico",
        descripcion: "Control de ingresos, gastos y resultados mensuales.",
        etiquetas: ["Editable", "Actualizado"],
        archivo: "/recursos/ciclo-contable.xlsx",
      },
      {
        titulo: "💼 Control de tesorería",
        descripcion: "Seguimiento de flujos de caja semanales.",
        etiquetas: ["Gratuito"],
        archivo: "/recursos/tesoreria.xlsx",
      },
    ],
  },
];

export default function Recursos() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Recursos</h1>
      {recursos.map((bloque) => (
        <div key={bloque.categoria} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{bloque.categoria}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {bloque.items.map((recurso, idx) => (
              <div key={idx} className="border rounded-xl p-6 shadow bg-white">
                <h3 className="text-lg font-bold mb-2">{recurso.titulo}</h3>
                <p className="text-gray-600 mb-3">{recurso.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recurso.etiquetas.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={recurso.archivo}
                  download
                  className="inline-block bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700"
                >
                  Descargar
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
