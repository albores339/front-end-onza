import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <header className="relative w-full h-screen bg-cover bg-center flex items-center justify-center" data-aos="fade-in">

      {/* Imagen para móviles */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 md:hidden brightness-95"  // Se muestra solo en móviles
        style={{ backgroundImage: 'url("/images/onza.jpeg")' }} // Cambia esta URL por la imagen para móviles
      ></div>

      {/* Imagen para pantallas grandes */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hidden md:block brightness-75"  // Se muestra solo en pantallas medianas o más grandes
        style={{ backgroundImage: 'url("/images/hero2.gif")' }}  // Mantiene la imagen que ya tienes para laptops
      ></div>

      {/* Contenido del Hero */}
      <div className="text-center z-10 p-6 py-8 mt-64 md:mt-0">
        <h1 className="hidden md:block text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
          Bienvenido a <span className="text-yellow-400">Onza</span>
        </h1>
        <p className="hidden md:block text-white text-lg md:text-xl my-4 drop-shadow-md">
          Disfruta de los mejores cócteles tropicales que te transportarán al paraíso.
        </p>
        <Link
          href="/menu"
          className=""
        >
          <button className="animate-bounce bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold mt-6 py-3 px-8 rounded-full">
            Ver Menú
          </button>
        </Link>
      </div>
    </header>
  );
}
