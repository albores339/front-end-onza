import React from "react";

const DetallesSection = () => {
  return (
    <section className="p-8 w-full lg:max-w-screen-lg mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-800">
        Detalles
      </h2>

      {/* Sección de detalles con contenido importante */}
      <div className="bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-200 p-8 rounded-xl shadow-lg">
        <p className="text-lg font-semibold text-center mb-6 text-white">
          ¡Somos la nueva forma de disfrutar de tus cócteles y bebidas favoritas
          en Comitán!
        </p>

        {/* Información general */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dirección */}
          <address className="flex items-center bg-white bg-opacity-70 p-4 rounded-lg shadow-lg not-italic">
            <i className="fas fa-map-marker-alt text-2xl text-pink-500"></i>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Dirección</h4>
              <p className="text-sm">4ta Avenida Oriente Sur #69, Comitán, Chiapas, México</p>
            </div>
          </address>

          {/* Teléfono */}
          <div className="flex items-center bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
            <i className="fas fa-phone-alt text-2xl text-pink-500"></i>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Teléfono</h4>
              <p className="text-sm">963 230 4352</p>
            </div>
          </div>

          {/* Correo */}
          <div className="flex items-center bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
            <i className="fas fa-envelope text-2xl text-pink-500"></i>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Correo electrónico</h4>
              <p className="text-sm">onza.comitan@gmail.com</p>
            </div>
          </div>

          {/* Servicios */}
          <div className="flex items-center bg-white bg-opacity-70 p-4 rounded-lg shadow-lg">
            <i className="fas fa-truck text-2xl text-pink-500"></i>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Servicios</h4>
              <p className="text-sm">Entrega a domicilio · Para llevar · Reservas online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Google Maps */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-stone-800 mb-4">Ubicación</h3>
        <div className="w-full h-64 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.452377961655!2d-92.1338420544073!3d16.248569144503627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858d3962e1f58b7f%3A0x605034749a70e3fd!2sONZA!5e0!3m2!1sen!2smx!4v1726896115403!5m2!1sen!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            title="Ubicación de Onza en Comitán"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default DetallesSection;
