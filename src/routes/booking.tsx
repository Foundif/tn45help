import { createFileRoute } from "@tanstack/react-router";
import { Bus, Stethoscope, Heart } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Travel Assistance — TN45 Trichy" },
      { name: "description", content: "Book railway, bus, hospital, festival or outstation medical escort assistance with TN45. Sent directly to our WhatsApp for instant confirmation." },
      { property: "og:title", content: "Book with TN45 — Trichy Travel Assistance" },
      { property: "og:description", content: "Send your trip details to TN45 via WhatsApp in seconds." },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Booking" title="Tell Us About Your Trip">
        Fill in your details — we'll receive everything on WhatsApp and confirm within minutes.
      </PageHero>
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">Specialist Support, Every Time</h2>
            <p className="mt-4 text-muted-foreground">
              From a quick station drop to multi-day medical escort travel, our trained helpers are ready to assist.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { i: Bus, t: "Station-to-Home Door Service" },
                { i: Stethoscope, t: "Hospital & Medical Escorts" },
                { i: Heart, t: "Senior Citizen Specialists" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                    <x.i className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-primary">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </PageShell>
  );
}
