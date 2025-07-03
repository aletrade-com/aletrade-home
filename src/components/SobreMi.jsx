import React from "react";

export default function SobreMi() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre mí</h1>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Foto profesional */}
        <div className="flex-shrink-0">
          <img
            src="/img/Alejandro_Barros_2024.png"
            alt="Alejandro Barros"
            className="w-55 h-40 rounded-full object-contain mx-auto p-1 bg-white"
          />
        </div>

        {/* Texto y botón */}
        <div className="text-gray-700 text-lg space-y-5">
          <p>
            👋 ¡Hola! Soy <strong>Alejandro Barros</strong>, profesional con amplia experiencia en administración, contabilidad y gestión documental.
          </p>
          <p>
            Me especializo en ofrecer un servicio personalizado, fiable y adaptado a las necesidades reales de autónomos, pymes y personas que buscan organizar sus finanzas o su negocio con eficiencia.
          </p>
          <p>
            Trabajo con herramientas digitales modernas, y combino la experiencia humana con el poder de la inteligencia artificial para ayudarte a tomar mejores decisiones, ahorrar tiempo y evitar errores.
          </p>
          <p>
            Si valoras la confidencialidad, la claridad y la cercanía, estaré encantado de acompañarte en tu camino profesional o personal.
          </p>

          <div className="space-y-2">
            <p className="text-sm text-gray-500 italic">
              “La confianza se construye con hechos. Yo estoy aquí para demostrártelo.”
            </p>
            <a
              href="/docs/CV_Alejandro_Barros.pdf"
              download
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm shadow"
            >
              Descargar CV en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}