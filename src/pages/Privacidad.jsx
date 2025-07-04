// src/pages/Privacidad.jsx
export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
      <p>
        En cumplimiento con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo 
        y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas 
        en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos 
        (RGPD), te informo de la política de privacidad aplicada en esta web.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Responsable del tratamiento</h2>
      <p>
        Nombre: <strong>Alejandro Barros González</strong><br />
        Email: <strong>info@aletrade.com</strong><br />
        Domicilio: <strong>36000 - Vigo (Pontevedra)</strong>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Finalidad de los datos recabados</h2>
      <p>
        Los datos personales facilitados a través del formulario de contacto, suscripción o 
        cualquier otro medio de esta web se utilizarán con la única finalidad de dar respuesta 
        a tus solicitudes, prestar servicios, gestionar comunicaciones y mejorar la experiencia de usuario.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Legitimación</h2>
      <p>
        La base legal para el tratamiento de tus datos es tu consentimiento libre, informado y específico.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Destinatarios</h2>
      <p>
        No se cederán tus datos a terceros, salvo obligación legal o requerimiento judicial.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación, portabilidad y 
        oposición enviando un correo electrónico a <strong>info@aletrade.com</strong>.
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Última actualización: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}