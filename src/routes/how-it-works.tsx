import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { steps } from "@/lib/site-data";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Book Travel Assistance with TN45" },
      { name: "description", content: "Booking travel assistance with TN45 in Trichy is simple — choose a service, share details, confirm on WhatsApp and we handle the rest." },
      { property: "og:title", content: "How It Works — TN45" },
      { property: "og:description", content: "Five simple steps to book reliable travel assistance in Trichy." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero eyebrow="How It Works" title="Booking in 5 Simple Steps">
        From first message to a stress-free trip — here's how TN45 supports you.
      </PageHero>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <ol className="relative space-y-10 border-l-2 border-dashed border-secondary pl-14 sm:pl-16">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[68px] grid h-12 w-12 place-items-center rounded-full bg-gradient-plate text-base font-extrabold text-primary shadow-yellow sm:-left-[72px]">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-primary">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
