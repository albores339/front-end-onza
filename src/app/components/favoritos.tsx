// components/FavoriteSection.tsx
import ImageOverlay from "./overlay";
import Image from "next/image";

export default function FavoriteSection() {
  return (
    <section className="p-8" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stone-800">
        Los favoritos ❤️
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto">
        <div className="relative col-span-2 h-64 lg:h-4/6" data-aos="zoom-in">
          <Image
            src="/images/1.jpg"
            alt="Accesorios GoPro"
            className="w-full h-full object-cover rounded-2xl"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
        </div>
        <div className="grid grid-rows-2 gap-4 lg:h-4/6">
          <ImageOverlay src="/images/2.jpg" alt="Módulos" />
          <ImageOverlay src="/images/3.jpg" alt="Soportes" />
        </div>
      </div>
    </section>
  );
}
