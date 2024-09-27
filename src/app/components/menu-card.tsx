import Image from "next/image";
import { FC } from "react";

interface CardProps {
  name: string;
  description: string;
  price: number;
  copy: string;
  imageUrl: string;
  icon: JSX.Element;
}

const Card: FC<CardProps> = ({ name, description, price, copy, imageUrl, icon }) => {
  return (
    <div
      className="relative shadow-lg rounded-2xl mb-10 hover:shadow-xl transition-shadow duration-300 m-4"
      style={{
        backgroundImage: 'url("/images/onza.jpeg")', // Imagen de fondo global para todas las tarjetas
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="shadow-lg backdrop-blur-md p-4 rounded-2xl min-h-[500px] bg-white/75 text-stone-700"> {/* Se agrega altura mínima */}
        <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{name}</h3>
        <Image 
          src={imageUrl} 
          alt={name} 
          width={400} 
          height={300} 
          className="rounded-lg mb-4 hover:scale-110 transition-transform duration-300 object-cover my-4 h-64 w-full filter-none" 
        />
        <div className="absolute top-2 right-2 p-2 bg-white rounded-full">{icon}</div>
        <p className="text-base mb-2 drop-shadow-md">{description}</p>
        <p className="text-lg font-semibold mb-4 text-emerald-600">${price.toFixed(2)}</p>
        <p className="text-base drop-shadow-md">{copy}</p>
      </div>
    </div>
  );
};

export default Card;
