'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/hero";
import MenuSection from "./components/menu";
import CelebrationSection from "./components/video";
import FavoriteSection from "./components/favoritos";
import DetallesSection from "./components/info";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <HeroSection />
      <MenuSection />
      <CelebrationSection />
      <FavoriteSection />
      <DetallesSection />
    </div>
  );
}
