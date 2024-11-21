"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = () => {
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

        <div className="flex items-center space-x-4">
          {/* Botón de menú cuando el menú está oculto */}
          <Link href="/menu" className="text-white font-bold">
            Menú
          </Link>

          {/* Aquí se eliminaron los botones del carrito y el menú hamburguesa */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
