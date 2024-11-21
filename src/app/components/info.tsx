import { useEffect, useState } from "react";
import { SparklesIcon, MapPinIcon, InboxIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTruck, FaPhoneAlt, FaConciergeBell } from "react-icons/fa";

export function Iphone15ProDemo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dnytuotnv/image/upload/v1729571553/WhatsApp_Image_2024-10-21_at_10.30.46_PM_epshau.jpg",
    "https://res.cloudinary.com/dnytuotnv/image/upload/v1729571553/WhatsApp_Image_2024-10-21_at_10.30.47_PM_2_pjtbl8.jpg",
    "https://res.cloudinary.com/dnytuotnv/image/upload/v1729571553/WhatsApp_Image_2024-10-21_at_10.30.47_PM_1_aqczhc.jpg"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row md:justify-between py-8 mx-8">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[12px] rounded-[2.5rem] max-h-[480px] h-[480px] w-[240px] shadow-xl">
        <div className="w-[120px] h-[12px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[36px] w-[2px] bg-gray-800 absolute -left-[14px] top-[90px] rounded-l-lg"></div>
        <div className="h-[36px] w-[2px] bg-gray-800 absolute -left-[14px] top-[140px] rounded-l-lg"></div>
        <div className="h-[48px] w-[2px] bg-gray-800 absolute -right-[14px] top-[110px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[216px] h-[456px] bg-white dark:bg-gray-800">
          {images.map((src, index) => (
            <Image
              key={index}
              loading="lazy"
              src={src}
              alt={`Imagen del iPhone ${index + 1}`}
              className={`absolute w-full h-full object-cover rounded-3xl transition duration-500 ease-in-out transform ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              fill
            />
          ))}
        </div>
      </div>

      {/* Información de contacto */}
      <div className="md:w-1/2 flex flex-col justify-center pl-10 mt-8">
        <h2 className="text-3xl font-bold mb-4 text-stone-700">Contacto</h2>
        <div className="mb-2 flex items-center">
          <MapPinIcon className="h-5 w-5 mr-2 text-pink-600" />
          <h3 className="text-xl font-semibold">Dirección</h3>
        </div>
        <p>4ta Avenida Oriente Sur #69, Comitán, Chiapas, México</p>

        <div className="mb-2 flex items-center">
          <FaPhoneAlt className="h-5 w-5 mr-2 text-pink-600" />
          <h3 className="text-xl font-semibold">Teléfono</h3>
        </div>
        <p>963 230 4352</p>

        <div className="mb-2 flex items-center">
          <InboxIcon className="h-5 w-5 mr-2 text-pink-600" />
          <h3 className="text-xl font-semibold">Correo electrónico</h3>
        </div>
        <p>onza.comitan@gmail.com</p>

        <div className="mb-2">
          <h3 className="text-xl font-semibold">Servicios</h3>
          <ul>
            <li className="flex items-center">
              <FaTruck className="h-5 w-5 mr-2 text-blue-500" />
              <span>Cocktail a domicilio</span>
            </li>
            <li className="flex items-center">
              <FaConciergeBell className="h-5 w-5 mr-2 text-red-500" />
              <span>Para llevar</span>
            </li>
            <li className="flex items-center">
              <SparklesIcon className="h-5 w-5 mr-2 text-yellow-500" />
              <span>Reservas online</span>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Síguenos en</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/onza.oz/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600">
              <FaInstagram />
              <span className="ml-2">Instagram</span>
            </a>
            <a href="https://www.facebook.com/onza.oz" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600">
              <FaFacebook />
              <span className="ml-2">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
