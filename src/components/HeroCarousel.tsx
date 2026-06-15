import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] shadow-elevated sm:aspect-[4/3]">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={i}
          src={images[i].src}
          alt={images[i].alt}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          width={1280}
          height={1024}
        />
      </AnimatePresence>
      <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-primary" : "w-1.5 bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
