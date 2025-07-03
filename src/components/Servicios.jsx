import React from "react";

export default function Servicios() {
  
  const servicios = [
    {
      titulo: "📑 Apoyo administrativo",
      descripcion: "Gestión documental, control de facturas y trámites para autónomos y PYMES.",
    },
    {
      titulo: "💰 Asesoría financiera personal",
      descripcion: "Te ayudo a organizar tu dinero y crear ingresos pasivos sostenibles.",
    },
    {
      titulo: "🤖 Automatización con IA",
      descripcion: "Digitaliza procesos repetitivos y mejora la eficiencia usando inteligencia artificial.",
    },
    {
      titulo: "🧾 Facturación y contabilidad",
      descripcion: "Supervisión de ingresos, gastos, impuestos y herramientas online como Holded o Sage.",
    },
    {
      titulo: "📈 Acompañamiento a emprendedores",
      descripcion: "Te guío desde la idea hasta la ejecución: trámites, fiscalidad y organización.",
    },
    {
      titulo: "🧠 Soporte técnico y consultoría",
      descripcion: "Asistencia para sistemas de gestión, cuentas, seguridad digital y herramientas de trabajo.",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Servicios</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{servicio.titulo}</h2>
            <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
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