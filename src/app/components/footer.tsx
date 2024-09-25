import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        
        {/* Información de la marca */}
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-xl font-semibold">Onza</h2>
          <p className="text-sm">Cócteles tropicales que te transportan al paraíso.</p>
        </div>

        {/* Enlaces de navegación */}
        <nav aria-label="Enlaces principales">
          <ul className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <li><a href="#menu" className="hover:underline">Menú</a></li>
            <li><a href="#about" className="hover:underline">Conócenos+</a></li>
            <li><a href="#services" className="hover:underline">Servicios</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <div className="text-center text-sm mt-4">
        <p>© 2024 Onza. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
