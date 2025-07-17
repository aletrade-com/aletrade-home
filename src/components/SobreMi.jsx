import React from "react";
import { Helmet } from "react-helmet-async";

export default function SobreMi() {
  return (
    <>
      <Helmet>
        <title>Aletrade | Sobre mí</title>
        <meta
          name="description"
          content="Conoce a Alejandro Barros, profesional con más de 20 años de experiencia en administración, contabilidad y finanzas. Descubre su trayectoria y cómo puede ayudarte a mejorar tu organización financiera."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Sobre mí</h1>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Foto profesional */}
          <div className="flex-shrink-0">
            <img
              src="/img/Alejandro_Barros_2025.jpg"
              alt="Alejandro Barros"
              className="w-55 h-40 rounded-full object-contain mx-auto p-1 bg-white"
            />
          </div>

          {/* Texto y botón */}
          <div className="text-gray-700 text-lg space-y-5">
            <p>
              👋 ¡Hola! Soy <strong>Alejandro Barros</strong>, profesional con más de 20 años de experiencia en administración, contabilidad y gestión documental.
            </p>
            <p>
              Tras una extensa trayectoria profesional en múltiples empresas y sectores, he decidido emprender un proyecto propio donde pongo al servicio de los demás todo el conocimiento y experiencia acumulados a lo largo de mi carrera.
            </p>
            <p>
              Mi objetivo es ayudarte a organizar tus finanzas personales o profesionales mediante recursos prácticos como plantillas en Excel y LibreOffice, basadas en casos reales y en una metodología clara, sencilla y eficiente.
            </p>
            <p>
              Estos recursos están pensados para emprendedores, empresarios y cualquier persona que desee llevar un mayor control de sus ingresos, gastos, patrimonio o contabilidad, tanto a nivel personal como profesional.
            </p>
            <p>
              Si valoras la claridad, la privacidad y la utilidad práctica, estaré encantado de acompañarte con soluciones accesibles y fáciles de implementar.
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
    </>
  );
}