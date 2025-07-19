import React from "react";
import { Helmet } from "react-helmet-async";

export default function AvisoLegal() {
  return (
    <>
      <Helmet>
        <title>Aletrade | Aviso Legal</title>
        <meta
          name="description"
          content="Consulta el aviso legal y condiciones de uso del sitio web Aletrade, propiedad de Alejandro Barros González."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Aviso Legal</h1>
        <p>
          En cumplimiento con el deber de información recogido en la Ley 34/2002 de Servicios de la Sociedad
          de la Información y el Comercio Electrónico (LSSI-CE), se informa que el presente sitio web es
          propiedad de:
        </p>
        <ul className="list-disc list-inside mt-4 mb-4">
          <li><strong>Nombre completo:</strong> Alejandro Barros González</li>
          <li><strong>Email:</strong> info@aletrade.com</li>
          <li><strong>Domicilio fiscal:</strong> 36000 - Vigo (Pontevedra)</li>
        </ul>
        <p>
          El acceso y uso de esta web atribuye la condición de Usuario, que acepta, desde dicho acceso y/o uso,
          las presentes condiciones de uso. Estas condiciones serán de aplicación independientemente de las
          condiciones generales de contratación que en su caso resulten de obligado cumplimiento.
        </p>
        <p className="mt-4">
          El contenido del sitio web (textos, imágenes, sonido, animaciones, software y el resto del contenido
          incluido en este website) es propiedad exclusiva de Alejandro Barros González o de sus licenciantes.
          Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación
          pública total o parcial debe contar con el consentimiento expreso de Alejandro Barros González.
        </p>

        {/* Nueva sección: Uso del asistente virtual */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Uso del asistente virtual (IA)</h2>
          <p>
            El sitio web www.aletrade.com pone a disposición de los usuarios un asistente virtual automatizado (IA),
            diseñado para proporcionar información general sobre los servicios, contenidos y recursos ofrecidos por Aletrade.
          </p>
          <p className="mt-2">
            Este asistente no sustituye el asesoramiento profesional, técnico o financiero personalizado. Sus respuestas
            se generan a partir de contenido público previamente configurado, y podrían contener errores, omisiones o
            interpretaciones imprecisas.
          </p>
          <p className="mt-2">
            Para obtener información precisa o atención personalizada, se recomienda contactar directamente a través del
            correo electrónico <a href="mailto:info@aletrade.com" className="text-blue-600 underline">info@aletrade.com</a>,
            por WhatsApp al <a href="https://wa.me/34604549528" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">+34 604 549 528</a>,
           o mediante el formulario de contacto en <a href="https://www.aletrade.com/contacto" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.aletrade.com/contacto</a>.
          </p>
          <p className="mt-2">
            El uso del asistente implica la aceptación de estas condiciones. Aletrade no se responsabiliza del uso inadecuado,
            interpretación errónea o decisiones basadas exclusivamente en las respuestas generadas por el asistente.
          </p>
        </div>
      </div>
    </>
  );
}