import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importa el icono de WhatsApp desde react-icons

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5219632304352"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" /> {/* Uso del icono de React Icons */}
    </a>
  );
}
