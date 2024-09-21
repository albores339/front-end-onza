import React, { FC } from 'react';
import Image from 'next/image';

const DrinksGrid: FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-800">Los favoritos ❤️</h2> 
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        {/* Imagen grande con capa negra */}
        <div className="relative col-span-2 lg:col-span-2 lg:h-auto h-64"> {/* Ajusté la altura */}
          <Image
            src="/images/1.jpg"
            alt="Accesorios GoPro"
            className="w-full h-full object-cover rounded-2xl"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
        </div>

        {/* Cuadrícula de imágenes a la derecha */}
        <div className="grid grid-rows-2 gap-4"> {/* Cambié a 2 filas en vez de 3 */}
          <div className="relative">
            <Image
              src="/images/2.jpg"
              alt="Módulos"
              className="w-full h-full object-cover rounded-2xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
          </div>
          <div className="relative">
            <Image
              src="/images/3.jpg"
              alt="Soportes"
              className="w-full h-full object-cover rounded-2xl"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrinksGrid;
