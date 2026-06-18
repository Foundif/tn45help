import { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-12 sm:pt-36 sm:pb-16">
      <div className="bg-gradient-radial absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 animate-fade-up">
        <span className="text-xs font-bold uppercase tracking-widest text-leaf">{eyebrow}</span>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-primary sm:text-5xl">{title}</h1>
        {children && <p className="mx-auto mt-4 max-w-2xl text-base text-primary/75 sm:text-lg">{children}</p>}
      </div>
    </section>
  );
}
