import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { steps } from "@/lib/site-data";
import hiwImg from "@/assets/how-it-works.jpg";

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
        From first message to a stress-free trip — here's exactly how TN45 supports you, end to end.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <img
                src={hiwImg}
                alt="Illustration of TN45 booking journey"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full rounded-3xl border border-primary/10 bg-gradient-plate shadow-elevated"
              />
              <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-leaf">Average Response</div>
                <div className="mt-1 text-2xl font-extrabold text-primary">Under 5 minutes</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Most WhatsApp inquiries are confirmed the same day, helpers assigned ahead of time.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ol className="relative space-y-10 border-l-2 border-dashed border-secondary pl-14 sm:pl-16">
              {steps.map((s, i) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[68px] grid h-12 w-12 place-items-center rounded-full bg-gradient-plate text-base font-extrabold text-primary shadow-yellow sm:-left-[72px]">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary">{s.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <PageCTA title="Ready to book your first trip?" />
    </PageShell>
  );
}
