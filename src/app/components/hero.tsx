// components/HeroSection.tsx
import React from "react";

export default function HeroSection() {
  return (
    <header
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/images/hero2.gif")' }}
      data-aos="fade-in"
    >
      {/* Filtro negro transparente */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="text-center z-10 p-2">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 drop-shadow-md">
          Bienvenido a <span className="text-yellow-400">Onza</span>
        </h1>
        <p className="text-white text-lg md:text-xl my-8 drop-shadow-md">
          Disfruta de los mejores cócteles tropicales que te transportarán al paraíso.
        </p>
        <a
          href="#menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full"
        >
          Ver Menú
        </a>
      </div>
    </header>
  );
}
