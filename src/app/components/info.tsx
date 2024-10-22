import { useEffect, useState } from "react";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import { BeakerIcon, FireIcon, SparklesIcon, MapPinIcon, InboxIcon, PhoneIcon } from "@heroicons/react/24/solid"; // Importa los íconos correspondientes
import Image from "next/image";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row md:justify-between py-8 mx-8">
      <div className="relative flex justify-center w-full md:w-1/2 md:max-h-[500px] mb-10">
        <Iphone15Pro
          className="size-full"
          src="https://via.placeholder.com/430x880" // Placeholder para el mockup del iPhone
        />
        <div className="absolute inset-0 flex justify-center items-center md:max-h-[500px] rounded-3xl">
          {/* Imágenes en el mockup del iPhone */}
          {images.map((src, index) => (
            <Image
              key={index}
              loading="lazy"
              src={src}
              alt={`Imagen del iPhone ${index + 1}`} // Texto alternativo descriptivo
              className={`absolute w-full p-2 h-full object-contain rounded-3xl transition duration-500 ease-in-out transform ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
              fill
            />
          ))}
        </div>
      </div>

      {/* Información de contacto */}
      <div className="md:w-1/2 flex flex-col justify-center pl-10">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <div className="mb-2 flex items-center">
          <MapPinIcon className="h-5 w-5 mr-2 text-gray-500" />
          <h3 className="text-xl font-semibold">Dirección</h3>
        </div>
        <p>4ta Avenida Oriente Sur #69, Comitán, Chiapas, México</p>

        <div className="mb-2 flex items-center">
          <PhoneIcon className="h-5 w-5 mr-2 text-gray-500" />
          <h3 className="text-xl font-semibold">Teléfono</h3>
        </div>
        <p>963 230 4352</p>

        <div className="mb-2 flex items-center">
          <InboxIcon className="h-5 w-5 mr-2 text-gray-500" />
          <h3 className="text-xl font-semibold">Correo electrónico</h3>
        </div>
        <p>onza.comitan@gmail.com</p>

        <div className="mb-2">
          <h3 className="text-xl font-semibold">Servicios</h3>
          <ul>
            <li className="flex items-center">
              <BeakerIcon className="h-5 w-5 mr-2 text-blue-500" />
              <span>Entrega a domicilio</span>
            </li>
            <li className="flex items-center">
              <FireIcon className="h-5 w-5 mr-2 text-red-500" />
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
              <FaInstagram/>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/onza.oz" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600">
              <FaFacebook/>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
