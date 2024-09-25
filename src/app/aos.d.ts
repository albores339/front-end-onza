declare module 'aos' {
    interface AosOptions {
      duration?: number;
      once?: boolean;
      // Otros parámetros según la documentación de AOS
    }
  
    const AOS: {
      init(options?: AosOptions): void;
    };
  
    export default AOS;
  }
  