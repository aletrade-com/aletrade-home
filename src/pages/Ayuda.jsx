import { Link } from 'react-router-dom';

export default function Ayuda() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes (FAQ)</h1>

      <div className="space-y-6">
        <div>
          <h2 className="font-semibold">¿Qué tipo de servicios administrativos ofreces?</h2>
          <p>Ofrezco servicios administrativos integrales: gestión documental, apoyo contable, atención a proveedores y clientes, logística básica y soporte operativo a pymes y autónomos.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Trabajas de forma remota o presencial?</h2>
          <p>Ambas modalidades. Trabajo de forma remota para toda España, y presencial en Vigo y alrededores. También puedo desplazarme puntualmente.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Cómo puedo solicitar un presupuesto personalizado?</h2>
          <p>Puedes utilizar el <Link to="/contacto" className="text-blue-600 underline hover:text-blue-800">formulario de contacto</Link> o escribirme directamente a info@aletrade.com indicando tus necesidades y te responderé lo antes posible.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Mis datos están protegidos si te envío documentación?</h2>
          <p>Sí. Cumplo con el RGPD y aplico medidas de confidencialidad estrictas para proteger toda la información que gestiono.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Puedes ayudarme si ya tengo un sistema contable o de gestión?</h2>
          <p>Sí. Me adapto al sistema que ya utilices (Holded, Sage, mygestion.com, ClassicGes, etc.), y puedo ayudarte a optimizarlo o mantenerlo actualizado.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Qué experiencia tienes en el área administrativa?</h2>
          <p>Cuento con más de 20 años de experiencia, tanto en empresas como en proyectos freelance, gestionando tareas clave en entornos dinámicos y con responsabilidad.</p>
        </div>

        <div>
          <h2 className="font-semibold">¿Trabajas también con particulares o sólo con empresas?</h2>
          <p>También atiendo particulares que necesiten apoyo administrativo (organización de trámites, gestión digital de documentos, asesoramiento básico, etc.).</p>
        </div>
      </div>
    </div>
  );
}