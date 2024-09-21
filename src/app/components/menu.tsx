import React from "react";
import Image from "next/image";

const MenuSection = () => {
  return (
    <section className=" my-2 py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-200 w-full lg:max-w-screen-lg mx-auto rounded-3xl shadow-xl">
      <h2 className="text-4xl font-bold text-center mb-12 text-stone-800">
        Menú
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Primera card - Intensos */}
        <div className="p-6 bg-gradient-to-tr from-pink-500 to-pink-400 text-white rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <h5 className="mb-6 text-3xl font-bold">Intensos</h5>
          <ul className="space-y-2 mb-6 text-lg font-semibold">
            <li>Sunrise - $75.00</li>
            <li>Azulito - $75.00</li>
            <li>Sex on the Beach - $80.00</li>
            <li>Bloody Mary - $90.00</li>
            <li>Piña Colada - $90.00</li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full shadow-md hover:bg-pink-200 transition-colors"
          >
            Ver más
            <svg
              className="rtl:rotate-180 w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Segunda card - Refrescantes */}
        <div className="p-4 bg-gradient-to-tr from-orange-500 to-orange-400 text-white rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <h5 className="mb-6 text-3xl font-bold">Refrescantes</h5>
          <ul className="space-y-2 mb-6 text-lg font-semibold">
            <li>Mojito - $80.00</li>
            <li>Clericot Tinto - $80.00</li>
            <li>Clericot Rosado - $85.00</li>
            <li>Baby Mango - $90.00</li>
            <li>Pikarindo - $90.00</li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-full shadow-md hover:bg-orange-200 transition-colors"
          >
            Ver más
            <svg
              className="rtl:rotate-180 w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Tercera card - Big Shots */}
        <div className="p-6 bg-gradient-to-tr from-teal-500 to-teal-400 text-white rounded-2xl shadow-xl transform transition-transform hover:scale-105">
          <h5 className="mb-6 text-3xl font-bold">Big Shots</h5>
          <ul className="space-y-2 mb-6 text-lg font-semibold">
            <li>Cantarito - $90.00</li>
            <li>Mezcalita - $95.00</li>
            <li>Charro Negro - $75.00</li>
          </ul>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-full shadow-md hover:bg-teal-200 transition-colors"
          >
            Ver más
            <svg
              className="rtl:rotate-180 w-4 h-4 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Cuarta card con imagen completa (Jaguarin) */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
          <div className="absolute inset-x-0 top-64 p-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 w-full transition-colors"
            >
              Ver menú completo
              <svg
                className="rtl:rotate-180 w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <Image
            src="images/jaguarin.gif"
            alt="Jaguarin"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
