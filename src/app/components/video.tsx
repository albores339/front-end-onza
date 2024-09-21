import React from "react";

const VideoSection = () => {
  return (
    <section className="py-10 px-6 bg-gradient-to-br from-blue-50 to-teal-100 w-full lg:max-w-screen-lg mx-auto rounded-3xl shadow-xl">
      <div className="flex flex-col lg:flex-row items-center">
        
        {/* Contenedor del video con animación */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 flex justify-center relative transition-transform transform hover:scale-105">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1162802011451755%2F&show_text=false&width=267&t=0"
            width="267"
            height="476"
            className="rounded-2xl shadow-2xl"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          {/* Decoración con icono festivo */}
          <span className="absolute top-0 right-0 bg-pink-400 p-2 rounded-full shadow-lg text-white text-lg transform rotate-12">🎉</span>
        </div>

        {/* Contenedor de texto con decoraciones */}
        <div className="lg:w-1/2 text-center lg:text-left bg-white p-8 rounded-2xl shadow-lg relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 tracking-wide">
            ¡Este mes celebramos en grande!
          </h2>
          <p className="text-gray-700 lg:text-lg mb-4 leading-relaxed">
            Una de nuestras bebidas del mes es la{" "}
            <strong className="text-teal-500">Mezcalita</strong> con un sabor
            auténtico a México que no te puedes perder.
            <br />
            Ven a disfrutar de esta delicia con nosotros y celebra al máximo
            este mes patrio. ¡Te esperamos!
          </p>
          <p className="text-gray-700 lg:text-lg mb-6">
            <span className="font-semibold text-pink-500">
              📍 4ta avenida oriente sur número 69
            </span>
            <br />
            🕣 Jueves a sábado de 7pm a 11pm Domingos de 12pm a 5pm
          </p>
          
          {/* Botón de llamada a la acción */}
          <a href="#" className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition-colors duration-300">
            ¡Ven a celebrar!
          </a>

          {/* Decoración extra */}
          <div className="absolute bottom-0 right-0 text-pink-300 text-6xl opacity-10 rotate-45">🍸</div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
