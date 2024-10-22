import { WhatsAppButton } from "./WhatsAppProductButton"; // Asegúrate de que esta ruta sea correcta
import Image from "next/image";

export function HalloweenSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-1">
        {/* Imágenes */}
        <div className="relative flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/462698911_122169739556095617_8880635363241830960_n_y0fn0v.jpg"
            alt="Halloween 1"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
          {/* Botón de WhatsApp para la primera imagen */}
          <div className="absolute bottom-4 left-4 z-10">
            <WhatsAppButton />
          </div>
        </div>

        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/462965823_122169739562095617_7334671033917416253_n_uvi7oz.jpg"
            alt="Halloween 2"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
        </div>

        <div className="relative flex-1">
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729566152/463049009_122169739538095617_3793139635396292916_n_x3mvbo.jpg"
            alt="Halloween 3"
            className="object-cover w-full h-full md:h-[300px] transition duration-500 ease-in-out"
            loading="lazy"
            width={500}
            height={500}
          />
          {/* Botón de WhatsApp para la última imagen */}
          <div className="absolute bottom-4 left-4 z-10">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </section>
  );
}
