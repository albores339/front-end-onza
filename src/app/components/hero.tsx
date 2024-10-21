import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
      className="relative bg-gradient-to-r h-screen max-h-[640px] flex items-center justify-center min-w-full"
      style={{
        background: `radial-gradient(circle, #cb525b, 70%, rgba(0, 0, 0, 0.8) 100%)`,
      }}
    >
      {/* Hojas y elementos */}
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_5_cfxxal.png"
        alt="Hoja arriba izquierda"
        className="absolute top-0 left-0 max-w-xs h-56 sm:max-w-sm sm:h-64 blur-sm"
        data-aos="fade-down"
      />
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_7_eyau1w.png"
        alt="Hoja arriba derecha"
        className="absolute top-0 left-56 md:left-96 max-w-xs h-40 sm:max-w-sm sm:h-48 blur-sm"
        data-aos="fade-down"
      />
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_6_mdo6ft.png"
        alt="Hoja abajo izquierda"
        className="absolute bottom-0 left-0 max-w-xs h-56 sm:max-w-sm sm:h-64 blur-sm"
        data-aos="fade-up"
      />
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486984/jaguar_rwlrcf.png"
        alt="Jaguar con bebida"
        className="absolute z-10 h-4/6 md:h-5/6 lg:h-full left-1 md:left-32"
        data-aos="zoom-in"
      />
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729489266/Capa_8_ysvr8n.png"
        alt="Florecita"
        className="absolute bottom-80 left-40 md:left-96 max-w-xs h-20 sm:max-w-sm sm:h-24 blur-sm"
        data-aos="fade-up"
      />

      {/* Título "Onza" */}
      <img
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/letras_onza_r4znpp.png"
        alt="Onza Logo"
        className="absolute right-56 top-20 max-w-md h-56"
        data-aos="fade-right"
      />

      {/* Contenedor para el texto y el botón */}
      <div className="absolute text-center text-white w-96 z-20 bottom-32 right-96 transform translate-x-1/2">
        <p className="text-lg sm:text-2xl font-bold">
          ¡Las fiestas de Halloween y próximas posadas son inigualables con los cócteles Onza! 🍹✨
        </p>

        {/* Botón "Ver Menú" */}
        <Link href="/menu">
          <button className="mt-4 inline-block bg-green-400 text-white font-bold py-2 px-4 rounded animate-bounce">
            Ver Menú
          </button>
        </Link>
      </div>
    </div>
  );
}
