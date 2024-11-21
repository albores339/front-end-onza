import type { Metadata } from "next";
import { Outfit } from "@next/font/google"; // Import the font from @next/font/google
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp";
import { CartProvider } from "./context";

// Configure the Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'], // Optional: define the weights you need
});

export const metadata: Metadata = {
  title: "Onza Comitán – Bar cocktail cerca de mi",
  description: "Si buscas: bares cerca de mi.. ¡Somos la nueva forma de tener tu cocteles y bebidas favoritas!. Pide tu cocktail a domicilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.className}> 
      <body className="antialiased bg-white">
        <CartProvider> 
          <Navbar />
          <div className="mt-16 mx-auto max-w-screen-2xl">
            {children}
          </div>
          <WhatsAppButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
