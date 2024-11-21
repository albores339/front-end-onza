// components/Card.tsx
import React from 'react';

interface CardProps {
  title: React.ReactNode; // Cambia de string a ReactNode
  items: string[];
  bgFrom: string;
  bgTo: string;
  textColor: string;
}

const Card: React.FC<CardProps> = ({ title, items, bgFrom, bgTo, textColor }) => {
  return (
    <div className={`bg-gradient-to-b ${bgFrom} ${bgTo} p-6 rounded-lg shadow-lg`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
      <ul className="mt-4 text-xl">
        {items.map((item, index) => (
          <li key={index} className={`text-white`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
