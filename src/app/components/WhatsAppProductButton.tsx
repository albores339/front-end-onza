import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

export const WhatsAppButton = () => {
  return (
    <button className="bg-white/50 backdrop-blur-2xl py-2 px-4 rounded-md hover:bg-green-600 hover:text-white flex items-center">
      <FaWhatsapp className="mr-2" /> {/* Ícono de WhatsApp */}
      Pedir por WhatsApp
    </button>
  );
};