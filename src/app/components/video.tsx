import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useCart } from '../context'; // Asegúrate de importar el hook correcto
import CartModal from './CartModal';

const GoproGrid: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal
  const { addToCart } = useCart();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleAddToCart = () => {
    // Asegúrate de agregar el precio al agregar al carrito
    addToCart({ id: '3', name: 'Protección', price: 100 }); // Aquí estamos agregando el precio
    setIsModalOpen(true); // Abre el CartModal después de agregar al carrito
  };  

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-screen-lg">
        
        {/* Primer video a la izquierda */}
        <div className="col-span-1 relative">
          <video
            src="https://res.cloudinary.com/dnytuotnv/video/upload/v1729566154/WhatsApp_Video_2024-10-21_at_8.40.31_PM_fnv85o.mp4"
            className="w-full h-auto max-h-[460px] lg:max-h-[500px] object-cover rounded-xl"
            muted
            loop
            preload="metadata"
            poster="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/preview.jpg"
            aria-label="Video de WhatsApp"
            autoPlay={!isMobile}
            controls
          />
        </div>

        {/* Imágenes */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <div
            className="col-span-1 relative"
            onClick={() =>
              openModal(
                'https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/horarios_qukdwx.jpg'
              )
            }
          >
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/horarios_qukdwx.jpg"
              alt="Módulos"
              className="w-full object-cover rounded-xl h-56 cursor-pointer"
              width={400}
              height={240}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">
              Horarios
            </h3>
          </div>

          <div
            className="col-span-1 relative"
            onClick={() =>
              openModal(
                'https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/cumplea%C3%B1os_pjl8yr.jpg'
              )
            }
          >
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/cumplea%C3%B1os_pjl8yr.jpg"
              alt="Soportes"
              className="w-full object-cover rounded-xl h-56 cursor-pointer"
              width={400}
              height={240}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">
              Bebida Gratis
            </h3>
          </div>

          {/* Imagen más ancha con el botón Agregar al carrito */}
          <div
            className="col-span-2 relative"
            onClick={() =>
              openModal(
                'https://res.cloudinary.com/dnytuotnv/image/upload/v1729567222/408825238_122116062506095617_613648774579516949_n_w0fino.jpg'
              )
            }
          >
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729567222/408825238_122116062506095617_613648774579516949_n_w0fino.jpg"
              alt="Protección"
              className="w-full h-52 object-cover rounded-xl cursor-pointer"
              width={800}
              height={100}
            />
            <h3 className="absolute top-4 left-4 text-black text-lg font-semibold bg-white/50 backdrop-blur-2xl px-2 py-1 rounded">
              Paquete
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Evita que se cierre el modal al hacer clic en el botón
                handleAddToCart(); // Llama a la función para agregar al carrito
              }}
              className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-xl hover:text-white text-black px-4 py-2 rounded-lg hover:bg-black/50 transition-colors"
            >
              Agregar al carrito
            </button>
          </div>
        </div>

        {/* Segundo video en la última columna */}
        <div className="col-span-1 relative">
          <video
            src="https://res.cloudinary.com/dnytuotnv/video/upload/v1729566153/WhatsApp_Video_2024-10-21_at_8.40.32_PM_uejzzn.mp4"
            className="w-full h-auto max-h-[460px] lg:max-h-[500px] object-cover rounded-xl"
            muted
            loop
            preload="metadata"
            poster="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/preview2.jpg"
            aria-label="Video de WhatsApp"
            autoPlay={!isMobile}
            controls
          />
        </div>
      </div>

      {/* Modal para imagen a pantalla completa */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-3xl px-4 sm:px-6 lg:px-8">
            <Image
              src={selectedImage}
              alt="Selected Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              width={800}
              height={600}
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Mantén el modal abierto al hacer clic en el botón
                handleAddToCart(); // Agrega el ítem al carrito
              }}
              className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}

      {/* Renderiza el CartModal si isModalOpen es true */}
      {isModalOpen && (
        <CartModal 
          onClose={() => setIsModalOpen(false)}  
        />
      )}
    </div>
  );
};

export default GoproGrid;
