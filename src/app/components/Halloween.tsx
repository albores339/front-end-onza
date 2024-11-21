import { FC, useState } from 'react';
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context";
import CartModal from "./CartModal";

export const HalloweenSection: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    addToCart(item);
    setIsModalOpen(true);
  };

  return (
    <section className="relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-stone-700 text-center">Halloween Menú</h2>
      <div className="flex flex-col md:flex-row gap-1">
        {/* Imagen 1 */}
        <div className="relative flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/462698911_122169739556095617_8880635363241830960_n_y0fn0v.jpg"
            alt="Halloween 1"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
          <button
            onClick={() => handleAddToCart({ id: '2', name: 'Beetlejuice', price: 90 })}
            className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
          >
            <FiShoppingCart size={20} />
            <span>Agregar al carrito</span>
          </button>
        </div>

        {/* Imagen 2 */}
        <div className="relative flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/462965823_122169739562095617_7334671033917416253_n_uvi7oz.jpg"
            alt="Halloween 2"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
          <button
            onClick={() => handleAddToCart({ id: '3', name: 'Beetlejuice y Vampires Sunrise', price: 180 })}
            className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
          >
            <FiShoppingCart size={20} />
            <span>Agregar al carrito</span>
          </button>
        </div>

        {/* Imagen 3 */}
        <div className="relative flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/463049009_122169739538095617_3793139635396292916_n_x3mvbo.jpg"
            alt="Halloween 3"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
          <button
            onClick={() => handleAddToCart({ id: '4', name: 'Vampires Sunrise', price: 90 })}
            className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
          >
            <FiShoppingCart size={20} />
            <span>Agregar al carrito</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <CartModal 
          onClose={() => setIsModalOpen(false)}  
        />
      )}
    </section>
  );
};
