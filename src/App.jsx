import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Ayuda from "./pages/Ayuda";
import Proximamente from "./pages/Proximamente";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Formacion from "./components/Formacion";
import Recursos from "./components/Recursos";
import SobreMi from "./components/SobreMi";
import MiArea from "./components/MiArea";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Confirmacion from "./pages/Confirmacion";
import NavbarResponsive from "./components/NavbarResponsive";

export default function App() {
  return (
    <Router>
     <NavbarResponsive />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-6 text-center">
              <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a Aletrade</h1>
              <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6" role="alert">🔒 Demo privada</p>
              <p>Estás accediendo a una versión de demostración en desarrollo. El contenido puede cambiar sin previo aviso.</p>
              <p className="text-gray-700 text-lg">
                Desde aquí tendrás acceso a servicios con IA, finanzas personales,
                apoyo administrativo y mucho más.
                Pronto el menú y otras secciones estarán activas.
              </p>
            </div>
          }
        />
        <Route path="/servicios" element={<Proximamente />} />
        <Route path="/formacion" element={<Proximamente />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/mi-area" element={<Proximamente />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/ayuda" element={<Ayuda />} />
      </Routes>

      <Footer />

      {/* Asistente IA - Chatbase */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.chatbaseConfig = {
              chatbotId: "-VKRtP1SagkS76xJgj5fa",
            };
          `
        }}
      />
      <script
        src="https://www.chatbase.co/embed.min.js"
        chatbotId="-VKRtP1SagkS76xJgj5fa"
        defer
      ></script>
    </Router>
  );
}