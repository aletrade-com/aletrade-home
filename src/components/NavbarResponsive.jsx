
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoAletrade from "../assets/logo_aletrade_horizontal.png";

const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img
              src={logoAletrade}
              alt="Logo Aletrade"
              className="h-16 w-auto mr-4"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Inicio</Link>
          <Link to="/servicios" className="hover:text-blue-500">Servicios</Link>
          <Link to="/formacion" className="hover:text-blue-500">Formación</Link>
          <Link to="/recursos" className="hover:text-blue-500">Recursos</Link>
          <Link to="/sobre-mi" className="hover:text-blue-500">Sobre mí</Link>
          <Link to="/mi-area" className="hover:text-blue-500">Mi Área</Link>
          <Link to="/contacto" className="hover:text-blue-500">Contacto</Link>
        </div>
        <div className="md:hidden">
          <button onClick={handleMenuToggle}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-2 space-y-2">
          <Link to="/" className="block" onClick={closeMenu}>Inicio</Link>
          <Link to="/servicios" className="block" onClick={closeMenu}>Servicios</Link>
          <Link to="/formacion" className="block" onClick={closeMenu}>Formación</Link>
          <Link to="/recursos" className="block" onClick={closeMenu}>Recursos</Link>
          <Link to="/sobre-mi" className="block" onClick={closeMenu}>Sobre mí</Link>
          <Link to="/mi-area" className="block" onClick={closeMenu}>Mi Área</Link>
          <Link to="/contacto" className="block" onClick={closeMenu}>Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarResponsive;
