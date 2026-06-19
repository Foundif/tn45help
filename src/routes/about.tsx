import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Heart, Users, Sparkles } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TN45 — Tamilnadu Travel Company, Trichy" },
      { name: "description", content: "Learn about Tamilnadu Travel Company (TN45) — trusted travel, station, hospital and elderly assistance based in Tiruchirappalli, Tamil Nadu." },
      { property: "og:title", content: "About TN45 — Tamilnadu Travel Company" },
      { property: "og:description", content: "Trusted travel assistance team based in Tiruchirappalli." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { i: ShieldCheck, t: "Trust First", d: "Background-verified helpers, transparent pricing and clear communication on every booking." },
  { i: Heart, t: "Compassionate Care", d: "Senior citizens and patients are treated with patience, dignity, and family-like care." },
  { i: Users, t: "Trained Helpers", d: "Our team is briefed on each trip — luggage handling, mobility support and emergency protocols." },
  { i: Sparkles, t: "Always Available", d: "24/7 inquiry support on WhatsApp & phone, with flexible rescheduling whenever life changes plans." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About Us" title="About Tamilnadu Travel Company">
        Trichy-based travel assistance for families, senior citizens, patients and busy travelers — backed by a team that genuinely cares.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-secondary/30 blur-2xl" />
            <img
              src={aboutImg}
              alt="TN45 helper assisting elderly travelers at a railway station"
              loading="lazy"
              width={1280}
              height={896}
              className="relative w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Our Story</span>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">A family helping Trichy travel with confidence</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-primary">Tamilnadu Travel Company (TN45)</strong> started with a simple promise — no senior, patient, or busy traveler should ever feel stranded at a station, hospital or temple.
              </p>
              <p>
                What began as informal help for neighbours in Mannarpuram is today a trusted local team handling 1000+ trips a year — from short station drops to multi-day outstation medical escorts across Tamil Nadu.
              </p>
              <p>
                Every helper is briefed before the trip, every booking is tracked over WhatsApp, and every family gets a real human on the other end of the line.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-secondary/40 bg-gradient-plate p-5">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" /> Our Mission
              </div>
              <p className="mt-2 text-primary">
                To provide dependable, human travel assistance — wherever and whenever it's needed in Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">What we stand for</span>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">Values that guide every trip</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <v.i className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-primary">{v.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </PageShell>
  );
}
