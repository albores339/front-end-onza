import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/images/hero2.gif")' }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
          Bienvenido a <span className="text-yellow-400">Onza</span>
        </h1>

        <p className="text-white text-lg md:text-xl my-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
          Disfruta de los mejores cócteles tropicales que te transportarán al paraíso.
        </p>

        <a href="#menu" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full">
          Ver Menú
        </a>
      </div>
    </section>
  );
};

export default Hero;
