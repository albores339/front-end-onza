import { FC } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "@/app/context";

interface CardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  copy: string;
  imageUrl: string;
  onAddToCart: () => void; // Nueva prop
}

const Card: FC<CardProps> = ({ id, name, description, price, copy, imageUrl, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
    onAddToCart(); // Llama a la función para abrir el modal
  };

  return (
    <div className="relative shadow-lg rounded-2xl mb-10 hover:shadow-xl transition-shadow duration-300 m-4 overflow-hidden">
      <div
        className="relative w-full h-[500px] flex flex-col justify-between text-white"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 p-6">
          <h3 className="text-2xl font-bold drop-shadow-md">{name}</h3>
          <p className="text-base mt-4 mb-2 drop-shadow-md">{description}</p>
          <p className="text-lg font-semibold text-emerald-400 drop-shadow-md">
            ${price.toFixed(2)}
          </p>
          <p className="text-sm mt-4 italic drop-shadow-md">{copy}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="relative z-10 w-[90%] max-w-[90%] mx-6 mb-6 bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
        >
          <FiShoppingCart size={20} />
          <span>Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
