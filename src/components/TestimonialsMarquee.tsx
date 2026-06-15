import { motion } from "framer-motion";
import { Star } from "lucide-react";

export type Testimonial = { n: string; c: string; q: string };

export function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  // Duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      {/* gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
      <motion.div
        className="flex gap-6 py-2"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {loop.map((t, i) => (
          <figure
            key={i}
            className="flex w-[300px] shrink-0 flex-col rounded-3xl border border-border bg-card p-6 shadow-card sm:w-[360px]"
          >
            <div className="flex gap-1 text-secondary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary">
              "{t.q}"
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <div className="text-sm font-bold text-primary">{t.n}</div>
              <div className="text-xs text-muted-foreground">{t.c}</div>
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}
