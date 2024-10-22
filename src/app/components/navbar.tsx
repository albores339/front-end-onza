"use client";

import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!document.getElementById('navbar-default')?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-emerald-500/90 backdrop-blur fixed top-0 z-30 w-full text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <Link href="/" className="flex items-center space-x-3" aria-label="Onza Home">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729556497/logo_onza_n32p5f.png"
            width={40}
            height={40}
            className="h-10"
            alt="Onza Logo"
            priority // Priorizar la carga de la imagen
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Onza</span>
        </Link>

        {/* Botón de menú hamburguesa / cerrar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menú de navegación */}
        {menuOpen && (
          <div className="w-full md:block md:w-auto text-white" id="navbar-default">
            <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-emerald-400 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="/menu"
                  className="block py-2 px-3  hover:text-emerald-500 rounded hover:bg-white md:hover:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Menú
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 rounded hover:text-emerald-500 hover:bg-white md:hover:bg-transparent md:p-0"
                >
                  Conócenos+
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 rounded hover:text-emerald-500 md:hover:bg-transparent md:p-0"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
