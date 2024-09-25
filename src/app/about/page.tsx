// pages/about.tsx
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-600 mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-700">
            En <span className="text-yellow-500">Onza</span>, nos dedicamos a brindarte una experiencia única con los mejores cócteles tropicales.
            Nuestro equipo está comprometido con la calidad, el sabor y el disfrute de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Sección de nuestra historia */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-emerald-600 mb-4">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 mb-6">
              Onza nació de la pasión por los sabores tropicales y la cultura de los cócteles artesanales. Desde nuestros inicios,
              nos hemos dedicado a fusionar ingredientes frescos y técnicas innovadoras para crear bebidas que transporten a nuestros
              clientes a un paraíso de sabores. Con cada cóctel, buscamos ofrecer una experiencia inigualable.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Ya sea que estés disfrutando de un día soleado o una noche especial, en <span className="font-semibold">Onza</span> siempre encontrarás una bebida
              que se adapte perfectamente a tu momento.
            </p>
          </div>

          {/* Imagen de fondo */}
          <div className="relative w-full h-96">
            <Image
              src="/images/about.jpg"
              alt="Sobre Onza"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
