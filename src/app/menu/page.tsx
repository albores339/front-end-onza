"use client"; // Esto asegura que el código se ejecute solo en el cliente

import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { SwiperSlide } from "swiper/react";
import CartModal from "../components/CartModal";
import Card from "../components/menu/menu-card";

// Usamos dynamic para importar Swiper en el cliente
const MenuSection = dynamic(() => import("../components/menu-section"), { ssr: false });

const MenuPage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white max-w-screen-lg mx-auto">
      <header className="text-center text-stone-700 p-6">
        <h1 className="text-5xl font-bold">Menú de Cocteles</h1>
        <p className="text-xl">¡Explora nuestras deliciosas opciones y sabores únicos!</p>
      </header>

      {isModalOpen && <CartModal onClose={handleCloseModal} />}

      {/* Sección Intensos */}
      <MenuSection title="Intensos">
        <SwiperSlide>
          <Card
            name="Sunrise"
            description="Comiteco, jugo de naranja, granadina"
            price={75}
            copy="El clásico refrescante con un toque local y cítrico."
            imageUrl="/images/sunrise1.png"
            id="9"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Azulito"
            description="Vodka, blue curaçao, volt, refresco de lima-limón, gomitas"
            price={75}
            copy="Explosión de dulzura tropical con un toque energético."
            imageUrl="/images/azulito.jpg"
            id="10"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Sex on the Beach"
            description="Vodka, licor de durazno, jugo de naranja, jugo de arándano"
            price={80}
            copy="Dulce, afrutado y perfecto para un día soleado en la playa."
            imageUrl="/images/sunrise.jpg"
            id="11"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Bloody Mary"
            description="Vodka, jugo de tomate, salsa inglesa, tabasco"
            price={90}
            copy="Fresco y picante, con un toque clásico."
            imageUrl="/images/bloodymary.png"
            id="12"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Piña Colada"
            description="Ron, crema de coco, jugo de piña"
            price={90}
            copy="Cremoso y tropical, el sabor del paraíso en un vaso."
            imageUrl="/images/piñacolada.png"
            id="13"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
      </MenuSection>

      {/* Sección Refrescantes */}
      <MenuSection title="Refrescantes">
        <SwiperSlide>
          <Card
            name="Mojito"
            description="Ron, jugo de limón, agua mineral, hierbabuena"
            price={80}
            copy="Refrescante y vibrante, con un toque natural."
            imageUrl="/images/mojito.png"
            id="14"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Clericot Tinto"
            description="Vino tinto, sangría, refresco de lima-limón, manzana, fresas"
            price={80}
            copy="Un clásico elegante, con frutas frescas."
            imageUrl="/images/pikarindo.png"
            id="15"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Clericot Rosado"
            description="Vino rosado, jarabe natural, jugo de limón, fresas"
            price={85}
            copy="Ligero, afrutado y perfecto para cualquier ocasión."
            imageUrl="/images/clericotrosa.png"
            id="16"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Baby Mango"
            description="Vodka, mango congelado, tajín, chamoy"
            price={90}
            copy="Una combinación de dulce y picante, llena de sabor."
            imageUrl="/images/babymango.png"
            id="17"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Pikarindo"
            description="Vodka tamarindo, picafresa, chamoy, jarabe natural"
            price={90}
            copy="Explosión de sabores con tamarindo y picante."
            imageUrl="/images/pikarindo.png"
            id="18"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
      </MenuSection>

      {/* Sección Big Shots */}
      <MenuSection title="Big Shots">
        <SwiperSlide>
          <Card
            name="Cantarito"
            description="Tequila, jugo de toronja, jugo de naranja, refresco de toronja"
            price={90}
            copy="El equilibrio perfecto entre dulzor y amargor."
            imageUrl="/images/sunrise1.png"
            id="19"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Mezcalita"
            description="Mezcal, jugo de piña, tajín, jugo de limón"
            price={95}
            copy="Sabor ahumado y tropical que eleva la experiencia."
            imageUrl="/images/mezcalita.png"
            id="20"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Charro Negro"
            description="Tequila, refresco de cola, jugo de limón"
            price={75}
            copy="Un toque mexicano clásico con frescura cítrica."
            imageUrl="/images/charronegro.jpg"
            id="21"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
      </MenuSection>

      {/* Sección Micheladas */}
      <MenuSection title="Micheladas">
        <SwiperSlide>
          <Card
            name="Clásica"
            description="Tequila, jugo de toronja, jugo de naranja, refresco de toronja"
            price={90}
            copy="El equilibrio perfecto entre dulzor y amargor."
            imageUrl="/images/micheclasica.jpg"
            id="22"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Mango"
            description="Mezcal, jugo de piña, tajín, jugo de limón"
            price={95}
            copy="Sabor ahumado y tropical que eleva la experiencia."
            imageUrl="/images/michemango.jpg"
            id="23"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Tamarindo"
            description="Tequila, refresco de cola, jugo de limón"
            price={75}
            copy="Un toque mexicano clásico con frescura cítrica."
            imageUrl="/images/michetamarindo.jpg"
            id="24"
            onAddToCart={handleOpenModal}
          />
        </SwiperSlide>
      </MenuSection>
    </div>
  );
};

export default MenuPage;
