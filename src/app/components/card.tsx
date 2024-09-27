import Link from "next/link";

// components/Card.tsx
interface CardProps {
    title: string;
    items: string[];
    bgFrom: string;
    bgTo: string;
    textColor: string;
  }
  
  export default function Card({ title, items, bgFrom, bgTo, textColor }: CardProps) {
    return (
      <div className={`p-6 bg-gradient-to-tr ${bgFrom} ${bgTo} text-white rounded-2xl shadow-xl transform transition-transform hover:scale-105`}>
        <h5 className="mb-6 text-3xl font-bold">{title}</h5>
        <ul className="space-y-2 mb-6 text-lg font-semibold">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <Link
          href="/menu"
          className={`inline-flex items-center px-6 py-3 bg-white ${textColor} rounded-full shadow-md hover:bg-opacity-20 transition-colors`}
        >
          Ver más
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
    );
  }
  