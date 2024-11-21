import { FC, useState } from 'react';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context';
import CartModal from './CartModal';

const FavoriteGrid: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (item: { id: string; name: string; price: number }) => {
    addToCart(item);
    setIsModalOpen(true);
  };

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-4 text-stone-700 text-center">Favoritos</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-screen-lg mx-auto">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 relative">
          <Image
            loading="lazy"
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/1_x8pzun.jpg" 
            alt="Accesorios premium para tu GoPro en promoción"
            className="w-full md:h-[440px] lg:h-[500px] object-cover rounded-xl p-0 m-0" 
            width={500} 
            height={600}
          />
          <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">Piña Colada</h3>
          <button
            onClick={() => handleAddToCart({ id: '5', name: 'Piña Colada', price: 90 })}
            className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
          >
            <FiShoppingCart size={20} />
            <span>Agregar al carrito</span>
          </button>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-2">
          <div className="col-span-1 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/448931627_122153755676095617_2010928985721353811_n_pxaezu.jpg"
              alt="Diferentes módulos para GoPro"
              className="w-full object-cover rounded-xl"
              width={240} 
              height={300}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">Perla Negra</h3>
            <button
              onClick={() => handleAddToCart({ id: '6', name: 'Perla Negra', price: 90 })}
              className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
            >
              <FiShoppingCart size={20} />
              <span>Agregar al carrito</span>
            </button>
          </div>

          <div className="col-span-1 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/2_b7amwd.jpg"
              alt="Soportes para GoPro"
              className="w-full object-cover rounded-xl"
              width={240} 
              height={300}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">Daiquiri Frozen Durazno</h3>
            <button
              onClick={() => handleAddToCart({ id: '7', name: 'Daiquiri Durazno', price: 90 })}
              className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
            >
              <FiShoppingCart size={20} />
              <span>Agregar al carrito</span>
            </button>
          </div>

          <div className="col-span-2 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/3_bgux8l.jpg"
              alt="Accesorios de protección para GoPro"
              className="w-full h-[240px] object-cover rounded-xl"
              width={800} 
              height={240}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">White Russian</h3>
            <button
              onClick={() => handleAddToCart({ id: '8', name: 'White Russian', price: 90 })}
              className="absolute bottom-4 left-4 w-[90%] max-w-[90%] bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-3 rounded-lg hover:bg-black/50 transition-colors flex items-center justify-center space-x-2"
            >
              <FiShoppingCart size={20} />
              <span>Agregar al carrito</span>
            </button>
          </div>
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

export default FavoriteGrid;
