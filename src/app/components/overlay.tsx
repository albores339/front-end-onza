import Image from "next/image";

// components/ImageOverlay.tsx
interface ImageOverlayProps {
    src: string;
    alt: string;
  }
  
  export default function ImageOverlay({ src, alt }: ImageOverlayProps) {
    return (
      <div className="relative" data-aos="fade-up">
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-2xl"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-2xl"></div>
      </div>
    );
  }
  