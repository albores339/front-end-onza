"use client";  // Esto se asegura que el código se ejecute solo en el cliente

import { FC, ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";  // Añadir Autoplay
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importa estilos necesarios

interface MenuSectionProps {
  title: string;
  children: ReactNode;
}

const Menu: FC<MenuSectionProps> = ({ title, children }) => {
  return (
    <section className="py-4">
      <h2 className="text-4xl font-bold text-center text-emerald-600 mb-10">{title}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,  // Tiempo de delay para cambiar automáticamente (en milisegundos)
          disableOnInteraction: true,  // Detiene autoplay cuando el usuario interactúa
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Pagination, Autoplay]} // Incluye el módulo Autoplay
        className="mySwiper"
      >
        {children}
      </Swiper>
    </section>
  );
};

export default Menu;
