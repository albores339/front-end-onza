'use client';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./components/hero";
import MenuSection from "./components/menu";
import CelebrationSection from "./components/video";
import FavoriteSection from "./components/favoritos";
import { Iphone15ProDemo } from "./components/info";
import { HalloweenSection } from "./components/Halloween";
import MyMapComponent from "./components/map";

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
      <HalloweenSection />
      <FavoriteSection />
      <Iphone15ProDemo />
      <MyMapComponent/>
    </div>
  );
}
