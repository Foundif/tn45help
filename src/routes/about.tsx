import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";

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

function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About Us" title="About Tamilnadu Travel Company">
        Trichy-based travel assistance for families, senior citizens, patients and busy travelers.
      </PageHero>
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Our Story</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-secondary" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              <strong className="text-primary">Tamilnadu Travel Company (TN45)</strong> helps travelers, senior citizens, patients, and families receive reliable assistance during their journeys.
            </p>
            <p>
              Whether you need help at a railway station, bus station, hospital visit, festival gathering, or outstation medical trip, our trained assistants ensure a smooth and stress-free experience.
            </p>
            <div className="rounded-2xl border border-secondary/40 bg-gradient-plate p-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" /> Our Mission
              </div>
              <p className="mt-2 text-primary">
                To provide dependable travel assistance and human support whenever it is needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
