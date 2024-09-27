import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Referencia a tu variable CSS personalizada
        foreground: "var(--foreground)",  // Referencia a tu variable CSS personalizada
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],  // Asegúrate de añadir la fuente personalizada
      },
    },
  },
  plugins: [],
};

export default config;
