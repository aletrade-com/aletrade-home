
import React from "react";

export default function AvisoLegal() {
  return (
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
    </div>
  );
}
