// pages/contact.tsx
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-600 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-700">
            Si tienes alguna pregunta o comentario, ¡estamos aquí para ayudarte! Escríbenos o visita nuestras redes sociales.
          </p>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="lg:pr-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-emerald-600 mb-4">¿Cómo encontrarnos?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Puedes ponerte en contacto con nosotros a través de las siguientes opciones. Nuestro equipo estará encantado de asistirte.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.7.47 1.6.47 2.3 0L21 8m-9 13l-8.485-5.657a4 4 0 01-1.015-5.657L9 3.172a4 4 0 015.657 0L20 8.485a4 4 0 010 5.657L9 21z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-800">contacto@onza.com</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18M3 18h18M3 6h18" />
                  </svg>
                </div>
                <p className="text-lg text-gray-800">+52 555 123 4567</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-emerald-500 text-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6h12v13H9zm-4 0H3V6h2v13zm2-9h10V8H7v2zm0 4h10v-2H7v2z" />
                  </svg>
                </div>
                <p className="text-lg text-gray-800">Av. Cítricos 123, Ciudad del Cóctel, México</p>
              </div>
            </div>

            <div className="mt-8 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.46 6c-.77.34-1.61.57-2.46.67a4.48 4.48 0 001.96-2.48 8.97 8.97 0 01-2.83 1.08A4.46 4.46 0 0015.51 4a4.48 4.48 0 00-4.49 4.49c0 .35.04.69.1 1.02a12.67 12.67 0 01-9.21-4.68c-.35.6-.55 1.28-.55 2.02a4.49 4.49 0 002 3.74 4.42 4.42 0 01-2.03-.56v.06c0 2.17 1.54 3.98 3.59 4.4-.38.1-.78.15-1.19.15a3.98 3.98 0 01-.84-.08c.57 1.78 2.22 3.08 4.18 3.12a8.97 8.97 0 01-5.57 1.92 8.78 8.78 0 01-1.06-.06A12.63 12.63 0 004 21.55 12.63 12.63 0 0016.29 24a12.66 12.66 0 007.71-2.52A12.67 12.67 0 0024 15.47c0-.2-.01-.39-.03-.58A9.09 9.09 0 0025 12.8c-.8.36-1.66.6-2.54.7z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 12c0 5.177 4.223 9.4 9.4 9.4h.2c5.177 0 9.4-4.223 9.4-9.4v-.2C20.6 6.823 16.377 2.6 11.2 2.6H11C5.823 2.6 1.6 6.823 1.6 12v.2zM7 8h1.5v8H7V8zm8.5 0H17v8h-1.5V8z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3a2 2 0 00-2-2H7a2 2 0 00-2 2v18a2 2 0 002 2h6a2 2 0 002-2v-6m-2 3.9V21M15 3.9V21M9 5.5V21m6-12.5H9m6-3h-3M9 10h6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">Envíanos un Mensaje</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg shadow-sm focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-50"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
