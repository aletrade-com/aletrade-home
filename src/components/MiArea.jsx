import React from "react";

export default function MiArea() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Mi Área (B2B)</h1>
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6 rounded">
        <p className="text-sm text-yellow-800">
          🔒 Esta sección está reservada para clientes con productos contratados. Si ya tienes acceso, pronto podrás iniciar sesión aquí.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-2">📁 Perfil y configuración</h2>
          <p className="text-gray-600 text-sm">Gestiona tus datos, solicitudes activas y preferencias de servicio.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-2">📦 Servicios contratados</h2>
          <p className="text-gray-600 text-sm">Consulta el detalle de tus servicios y productos activos.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border">
          <h2 className="text-xl font-semibold mb-2">📨 Soporte y contacto directo</h2>
          <p className="text-gray-600 text-sm">Accede a asistencia técnica, documentación o tutorías según tu plan.</p>
        </div>
      </div>
    </div>
  );
}