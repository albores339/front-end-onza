import { FC } from 'react';
import { WhatsAppButton } from './WhatsAppProductButton';
import Image from 'next/image';

const GoproGrid: FC = () => {
  return (
    <div className='py-10'>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-screen-lg">
        
        {/* Primer video a la izquierda */}
        <div className="col-span-1 relative">
          <video 
            src="https://res.cloudinary.com/dnytuotnv/video/upload/v1729566154/WhatsApp_Video_2024-10-21_at_8.40.31_PM_fnv85o.mp4" 
            className="w-full h-[460px] lg:h-[500px] object-cover rounded-xl" 
            autoPlay 
            muted 
            loop
            preload="metadata" // Cambiado a "metadata" para cargar solo los metadatos
            poster="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/preview.jpg" // Imagen previa
            aria-label="Video de WhatsApp" // Etiqueta accesible
          />
          <div className="absolute bottom-4 left-4 z-10">
            <WhatsAppButton />
          </div>
        </div>

        {/* Imágenes */}
        <div className='col-span-2 grid grid-cols-2 gap-2'>
          <div className="col-span-1 relative">
            <Image 
              loading="lazy" 
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/horarios_qukdwx.jpg"
              alt="Módulos" 
              className="w-full object-cover rounded-xl"
              width={500} // Añadido para mejorar el rendimiento
              height={300} // Añadido para mejorar el rendimiento
            />
          </div>
          
          <div className="col-span-1 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/cumplea%C3%B1os_pjl8yr.jpg"
              alt="Soportes"
              className="w-full object-cover rounded-xl"
              width={500} // Añadido para mejorar el rendimiento
              height={300} // Añadido para mejorar el rendimiento
            />
          </div>
          
          <div className="col-span-2 relative">
            <Image
              loading="lazy"
              src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729567222/408825238_122116062506095617_613648774579516949_n_w0fino.jpg"
              alt="Protección"
              className="w-full h-[240px] object-cover rounded-xl"
              width={800} // Añadido para mejorar el rendimiento
              height={240} // Añadido para mejorar el rendimiento
            />
          </div>
        </div>
        
        {/* Segundo video en la última columna */}
        <div className="col-span-1 relative">
          <video 
            src="https://res.cloudinary.com/dnytuotnv/video/upload/v1729566153/WhatsApp_Video_2024-10-21_at_8.40.32_PM_uejzzn.mp4" 
            className="w-full h-[460px] lg:h-[500px] object-cover rounded-xl" 
            autoPlay 
            muted 
            loop
            preload="metadata" // Cambiado a "metadata" para cargar solo los metadatos
            poster="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566151/preview2.jpg"
            aria-label="Video de WhatsApp" // Etiqueta accesible
          />
          <div className="absolute bottom-4 left-4 z-10">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoproGrid;
