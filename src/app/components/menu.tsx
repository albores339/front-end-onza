// components/MenuSection.tsx
import Card from "./card" //de que el componente Card también esté optimizado
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image"; // Importa el componente Image de Next.js

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="my-2 py-6 bg-gradient-to-br w-full lg:max-w-screen-lg mx-auto rounded-3xl md:px-6"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-stone-800" role="heading" aria-level={2}>
        Menú
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          title="Intensos"
          items={[
            "Sunrise - $75.00",
            "Azulito - $75.00",
            "Sex on the Beach - $80.00",
            "Bloody Mary - $90.00",
            "Piña Colada - $90.00",
          ]}
          bgFrom="from-pink-700"
          bgTo="to-pink-500"
          textColor="text-white"
        />
        <Card
          title="Refrescantes"
          items={[
            "Mojito - $80.00",
            "Clericot Tinto - $80.00",
            "Clericot Rosado - $85.00",
            "Baby Mango - $90.00",
            "Pikarindo - $90.00",
          ]}
          bgFrom="from-orange-600"
          bgTo="to-orange-400"
          textColor="text-white"
        />
        <Card
          title="Big Shots"
          items={["Cantarito - $90.00", "Mezcalita - $95.00", "Charro Negro - $75.00"]}
          bgFrom="from-teal-700"
          bgTo="to-teal-500"
          textColor="text-white"
        />
        <div
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 p-2 h-80"
          data-aos="zoom-in"
        >
          <ShineBorder
            className="absolute inset-0 z-0 w-full"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            borderRadius={8}
            borderWidth={3}>
              hola
          </ShineBorder>
          <div className="relative z-20 p-4 bottom-0">
            <Link
              href="/menu"
              className="absolute inline-flex items-center px-3 py-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition-colors top-60"
              aria-label="Ver menú"
            >
              Ver menú
              <svg
                className="rtl:rotate-180 w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <Image
            src="https://res.cloudinary.com/dnytuotnv/image/upload/v1729559686/jaguarin_km2zcf.jpg"
            alt="Jaguarin disfrutando"
            fill
            className="absolute inset-0 w-full h-80 object-cover z-10 rounded-2xl p-2"
          />
        </div>
      </div>
    </section>
  );
}
