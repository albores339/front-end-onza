'use client'; // Asegura que este componente sea tratado como un Client Component

import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

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
    <nav className="bg-emerald-400/90 backdrop-blur fixed top-0 z-30 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <Image
            src="/images/logo onza.webp"
            width={40}
            height={40}
            className="h-10"
            alt="Onza Logo"
            loading="lazy"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Onza</span>
        </a>

        {/* Botón de menú hamburguesa / cerrar */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Abrir menú</span>
          {menuOpen ? (
            <FaTimes className="w-6 h-6 text-white" /> // Ícono para cerrar el menú
          ) : (
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        {/* Menú de navegación */}
        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-emerald-400 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white">
            <li>
              <Link
                href="/menu"
                className="block py-2 px-3 text-white hover:text-emerald-500 rounded hover:bg-white md:hover:bg-transparent md:p-0"
                aria-current="page"
              >
                Menú
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 rounded text-white hover:text-emerald-500 hover:bg-white md:hover:bg-transparent md:p-0"
              >
                Conócenos+
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 rounded text-white hover:text-emerald-500 hover:bg-white md:hover:bg-transparent md:p-0"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
