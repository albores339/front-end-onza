import React, { FC } from 'react';
import Image from 'next/image';

const DrinksGrid: FC = () => {
  return (
    <div className='p-8'>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-800">Los favoritos ❤️</h2> 
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        {/* Imagen grande con capa negra */}
        <div className="relative col-span-2 lg:col-span-2 lg:h-auto h-64"> {/* Ajusté la altura */}
          <Image
            src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/449466327_122153755724095617_1526239504369994817_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tNB6bx4SMNEQ7kNvgFoRiQb&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=Aw8PvbwBgsJz5PKoI-g7syM&oh=00_AYAfDvXREPsgyWPUrEnsAmTHhV-1V-h5nBnhgf1JW2bdZA&oe=66F42379"
            alt="Accesorios GoPro"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
        </div>

        {/* Cuadrícula de imágenes a la derecha */}
        <div className="grid grid-rows-2 gap-4"> {/* Cambié a 2 filas en vez de 3 */}
          <div className="relative">
            <Image
              src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/448927135_122153755742095617_1912110749344797718_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xMwVHlLl_rMQ7kNvgHEno1A&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=A770jXBfnSQW_fHxkDxlQB1&oh=00_AYCoSWwyv6V7yg3-5pQDJBEREl1Qj_nY8JF8dPshTHsLUA&oe=66F4068A"
              alt="Módulos"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
          </div>
          <div className="relative">
            <Image
              src="https://scontent.ftgz3-1.fna.fbcdn.net/v/t39.30808-6/449192468_122153755748095617_3476063084310155202_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yCtlAa2Ml_AQ7kNvgHPzEFq&_nc_ht=scontent.ftgz3-1.fna&_nc_gid=AU7IA6p7gI8VNcrb6mxGtVj&oh=00_AYCDV_nTf_rO8IPBw8bJTuxg_17PBhLlnxO3-r5aKCgTbw&oe=66F3FEAA"
              alt="Soportes"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrinksGrid;
