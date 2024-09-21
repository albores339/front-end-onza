import Hero from "./components/hero";
import DrinksGrid from "./components/bebidas";
import MenuSection from "./components/menu";
import DetallesSection from "./components/info";
import VideoSection from "./components/video";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Hero />
      <MenuSection/>
      <VideoSection/>
      <DrinksGrid/>
      <DetallesSection/>
    </div>
  );
}
