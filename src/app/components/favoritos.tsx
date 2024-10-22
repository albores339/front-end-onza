import { FC } from 'react';
import { WhatsAppButton } from './WhatsAppProductButton';
import Image from 'next/image';

const GoproGrid: FC = () => {
  return (
    <section className='py-10'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-screen-lg mx-auto">
        
        {/* Primera imagen grande a la izquierda */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 relative">
          <Image
            loading="lazy"
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/1_x8pzun.jpg" 
            alt="Accesorios premium para tu GoPro en promoción"
            className="w-full md:h-[440px] lg:h-[500px] object-cover rounded-xl p-0 m-0" 
            width={500} 
            height={600}
          />
          <div className="absolute bottom-4 left-4">
            <WhatsAppButton />
          </div>
        </div>

        <div className='col-span-2 grid grid-cols-2 gap-2'>
          
          {/* Módulos */}
          <div className="col-span-1 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/448931627_122153755676095617_2010928985721353811_n_pxaezu.jpg"
              alt="Diferentes módulos para GoPro"
              className="w-full object-cover rounded-xl"
              width={240} 
              height={300}
            />
            <div className="absolute bottom-4 left-4">
              <WhatsAppButton />
            </div>
          </div>
          
          {/* Soportes */}
          <div className="col-span-1 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/2_b7amwd.jpg"
              alt="Soportes para GoPro"
              className="w-full object-cover rounded-xl"
              width={240} 
              height={300}
            />
            <div className="absolute bottom-4 left-4">
              <WhatsAppButton />
            </div>
          </div>
          
          {/* Protección */}
          <div className="col-span-2 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/3_bgux8l.jpg"
              alt="Accesorios de protección para GoPro"
              className="w-full h-[240px] object-cover rounded-xl"
              width={800} // Añadido para mejorar el rendimiento
              height={240}
            />
            <div className="absolute bottom-4 left-4">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoproGrid;
