'use client';

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/hero";
import MenuSection from "./components/menu";
import CelebrationSection from "./components/video";
import FavoriteSection from "./components/favoritos";
import { Iphone15ProDemo } from "./components/info";
import { HalloweenSection } from "./components/Halloween";
import MyMapComponent from "./components/map";
import CartModal from "./components/CartModal"; // Importamos el modal del carrito
import { ShoppingCartIcon } from "@heroicons/react/24/solid"; // Asegúrate de tener Heroicons

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abrir el modal
  const handleOpenModal = () => setIsModalOpen(true);

  // Cerrar el modal
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center relative">
      <HeroSection />
      <MenuSection />
      <CelebrationSection />
      <HalloweenSection />
      <FavoriteSection />
      <Iphone15ProDemo />
      <MyMapComponent />

      {/* Modal del carrito */}
      {isModalOpen && <CartModal onClose={handleCloseModal} />}

      {/* Botón flotante con animación bounce */}
      <button
        onClick={handleOpenModal}
        className="fixed bottom-20 right-4 bg-pink-500 p-4 rounded-full shadow-lg text-white hover:bg-indigo-600 focus:outline-none animate-bounce z-50"
      >
        <ShoppingCartIcon className="h-8 w-8" />
      </button>
    </div>
  );
}
