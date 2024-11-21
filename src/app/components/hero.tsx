"use client"; // Asegura que el componente sea del lado del cliente para usar hooks

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  // Lista de posiciones para las florecitas
  const flowerPositions = [
    { bottom: "80", left: "10", height: "16" },
    { bottom: "10", left: "10", height: "10" },
  ];

  useEffect(() => {
    AOS.init();
    setColor(theme === "dark" ? "#ffffff" : "#ffffff");
  }, [theme]);

  return (
    <div
      className="relative bg-gradient-to-r max-w-screen-2xl h-[640px] flex items-center justify-center min-w-full flex-col"
      style={{
        background: `radial-gradient(circle, #cb525b, 90%, #8b3a41 100%)`,
      }}
    >
      {/* Efecto de partículas */}
      <Particles
        className="absolute inset-0 z-10"
        quantity={200}
        ease={500}
        color={color}
        refresh
        size={1.5}
        vy={.5}
      />

      {/* Hojas y elementos */}
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_5_cfxxal.png"
        alt="Hoja arriba izquierda"
        width={200} // Especifica el ancho
        height={200} // Especifica la altura
        className="absolute top-0 left-0 max-w-none h-56 sm:h-64 blur-sm"
        data-aos="fade-down"
      />
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_7_eyau1w.png"
        alt="Hoja arriba derecha"
        width={200} // Especifica el ancho
        height={200} // Especifica la altura
        className="absolute top-32 left-56 md:left-[400px] rotate-180 max-w-none h-40 sm:max-w-sm sm:h-48 blur-sm hidden md:block"
        data-aos="fade-down"
      />
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/Capa_6_mdo6ft.png"
        alt="Hoja abajo izquierda"
        width={200} // Especifica el ancho
        height={200} // Especifica la altura
        className="absolute bottom-0 left-4 md:left-20 max-w-none h-56 sm:h-64 blur-sm"
        data-aos="fade-up"
      />

      {/* Jaguar en móvil centrado */}
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486984/jaguar_rwlrcf.png"
        alt="Jaguar con bebida"
        width={470} // Especifica el ancho
        height={200} // Especifica la altura
        className="z-10 h-full bottom-0 md:h-full left-1 md:left-32 lg:left-36 md:absolute md:block hidden" 
        data-aos="zoom-in"
      />
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486984/jaguar_rwlrcf.png"
        alt="Jaguar con su bebida Onza"
        width={370} // Especifica el ancho
        height={200} // Especifica la altura
        className="z-10 h-4/5 md:hidden block mx-auto absolute bottom-0"  // Centrando en móvil
        data-aos="zoom-in"
      />

      {/* Map para las florecitas */}
      {flowerPositions.map((position, index) => (
        <Image
          key={index}
          src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729489266/Capa_8_ysvr8n.png"
          alt="Florecita"
          width={50} // Especifica el ancho
          height={50} // Especifica la altura
          className={`absolute bottom-${position.bottom} left-${position.left} max-w-none h-${position.height} blur-sm`}
          data-aos="fade-up"
        />
      ))}

      {/* Título "Onza" */}
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/letras_onza_r4znpp.png"
        alt="Onza Logo"
        width={370} // Especifica el ancho
        height={100} // Especifica la altura
        className="right-10 md:right-44 md:top-80 lg:right-48 lg:top-20 h-40 md:w-56 lg:w-[370px] lg:h-60 md:absolute hidden md:block md:z-20"
        data-aos="fade-right"
      />
      <Image
        src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729486983/letras_onza_r4znpp.png"
        alt="Onza Logo"
        width={200} // Especifica el ancho
        height={100} // Especifica la altura
        className="absolute top-2 block md:hidden h-40 mx-auto mt-4" // Centrando en móvil
        data-aos="fade-right"
      />

      {/* Contenedor para el texto y el botón */}
      <div className="absolute bottom-10 text-center text-white max-w-screen-2xl w-80 md:w-96 z-20 md:absolute md:bottom-8 lg:bottom-48 md:right-28 lg:right-40 justify-center items-center">
        <p className="text-lg lg:text2xl font-bold">
          ¡Las fiestas de Halloween y próximas posadas son inigualables con los cócteles Onza! 🍹✨
        </p>

        {/* Botón "Ver Menú" */}
        <Link href="/menu">
          <button className="mt-4 inline-block bg-emerald-500 text-white font-bold py-3 px-6 rounded mx-auto animate-bounce text-2xl">
            Ver Menú
          </button>
        </Link>
      </div>
    </div>
  );
}
