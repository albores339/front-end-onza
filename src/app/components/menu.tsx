// components/MenuSection.tsx
import Card from "./card";
import Image from "next/image";
import Link from "next/link";

export default function MenuSection() {
  return (
    <main
      id="menu"
      className="my-2 py-12 px-6 w-full lg:max-w-screen-lg mx-auto rounded-3xl"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-stone-800">Menú</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <Card
          title="Intensos"
          items={[
            "Sunrise - $75.00",
            "Azulito - $75.00",
            "Sex on the Beach - $80.00",
            "Bloody Mary - $90.00",
            "Piña Colada - $90.00",
          ]}
          bgFrom="from-pink-500"
          bgTo="to-pink-400"
          textColor="text-pink-600"
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
          bgFrom="from-orange-500"
          bgTo="to-orange-400"
          textColor="text-orange-600"
        />
        <Card
          title="Big Shots"
          items={["Cantarito - $90.00", "Mezcalita - $95.00", "Charro Negro - $75.00"]}
          bgFrom="from-teal-500"
          bgTo="to-teal-400"
          textColor="text-teal-600"
        />
        <div
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105"
          data-aos="zoom-in"
        >
          <div className="absolute inset-x-0 top-64 p-4">
            <Link
              href="/menu"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 w-full transition-colors"
            >
              Ver menú completo
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
            src="/images/jaguarin.gif"
            alt="Jaguarin disfrutando"
            width={300}
            height={500}
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </main>
  );
}
