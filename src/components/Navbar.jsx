import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50">
      {/* LOGO y Botón hamburguesa */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <NavLink to="/" className="flex items-center">
          <img
            src="/img/logo_aletrade_horizontal_200px.png"
            alt="Logo Aletrade"
            className="h-14 w-auto bg-gray-200 p-1 rounded shadow"
          />
        </NavLink>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menú de enlaces */}
      <ul
        className={`md:flex md:items-center gap-6 text-gray-800 font-medium ${
          menuOpen ? "block mt-4" : "hidden"
        } md:mt-0`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600"
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recursos"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600"
            }
          >
            Recursos
          </NavLink>
        </li>
        <li>
  <span className="text-gray-400 cursor-not-allowed" title="Próximamente">Mi Área</span>
</li>
        <li>
          <NavLink
            to="/sobremi"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "text-gray-600"
            }
          >
            Sobre mí
          </NavLink>
        </li>
        <li>
  <span className="text-gray-400 cursor-not-allowed" title="Próximamente">Servicios</span>
</li>
        <li>
  <span className="text-gray-400 cursor-not-allowed" title="Próximamente">Formación</span>
</li>
      </ul>
    </nav>
  );
}