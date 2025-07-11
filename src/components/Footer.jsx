import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-center p-4 mt-10 border-t">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Link to="/aviso-legal" className="hover:underline">Aviso legal</Link>
        <span className="hidden sm:inline">|</span>
        <Link to="/privacidad" className="hover:underline">Política de privacidad</Link>
        <span className="hidden sm:inline">|</span>
        <Link to="/contacto" className="hover:underline">Contacto</Link>
        <span className="hidden sm:inline">|</span>
        <Link to="/ayuda" className="hover:underline">Ayuda / FAQ</Link>
      </div>
      <p className="mt-2 text-gray-500">© {new Date().getFullYear()} Alejandro Barros - aletrade.com</p>
      <div className="mt-4 flex justify-center items-center gap-2 text-sm text-gray-500">
        <img
          src="/img/Alejandro_Barros_miniatura_footer.png"
          alt="Foto de Alejandro Barros"
          className="w-6 h-6 rounded-full object-cover border"
        />
        Alejandro Barros
      </div>
    </footer>
  );
}