import React from "react";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📩 Envíame tu mensaje</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
          <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc4YF8STHUXpB_bbszgznsGsJqAxcLYtLIfp2wdCqME7hVjuw/viewform?embedded=true"
          width="100%"
          height="1200"
          style={{ border: 'none' }}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Formulario de contacto"
          className="border rounded-lg shadow-md"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
        Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos con la finalidad de atender tu consulta.
      </p>

      <div className="text-sm text-gray-700">
        <p className="mb-2">📧 También puedes escribirme a: <a href="mailto:info@aletrade.com" className="text-blue-600 underline">info@aletrade.com</a></p>
        <p>📱 Contacto directo por WhatsApp: <a href="https://wa.me/34660410220" className="text-green-600 underline">+34 660 410 220</a></p>
      </div>

      <style>
        {`
          iframe {
            pointer-events: auto;
          }
          iframe::-webkit-scrollbar {
            display: none;
          }
          /* Oculta mensaje de "Iniciar sesión en Google..." */
          // iframe[src*="google"] {
          //   height: 600px !important;
          // }

          .freebirdFormviewerViewHeader,
          .freebirdFormviewerViewNavigationLeftHeader,
          .freebirdFormviewerViewNavigationNoSubmitHeader,
          .appsMaterialWizHeaderPaperheader,
          .freebirdHeaderMast {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
};

export default Contacto;
