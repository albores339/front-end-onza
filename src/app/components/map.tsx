import React from 'react';

const MapLink: React.FC = () => {
  return (
    <div className="my-8 w-full max-w-screen-lg">
    <h3 className="text-3xl font-bold text-stone-800 mb-4">Ubicación</h3>
    <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
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
  );
};

export default MapLink;
