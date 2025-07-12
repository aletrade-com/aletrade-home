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
        <Route path="/" element={<Home />} />
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