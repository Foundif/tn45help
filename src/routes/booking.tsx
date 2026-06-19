import { createFileRoute } from "@tanstack/react-router";
import { Bus, Stethoscope, Heart, Phone, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { BookingForm } from "@/components/BookingForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink, PHONE } from "@/components/FloatingActions";
import bookingImg from "@/assets/booking-hero.jpg";

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
        Fill in your details — your inquiry opens WhatsApp pre-filled with the keyword <strong>HELP</strong> and reaches us instantly.
      </PageHero>

      {/* Quick CTAs */}
      <section className="py-8">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 px-4 sm:px-6">
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp HELP
          </a>
          <a href={`tel:${PHONE}`}
             className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-bold text-primary transition hover:bg-muted">
            <Phone className="h-4 w-4" /> Call +91 94866 42242
          </a>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <img
              src={bookingImg}
              alt="TN45 assistant helping a senior with a booking"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
            <h2 className="mt-8 text-2xl font-bold text-primary sm:text-3xl">Specialist support, every single trip</h2>
            <p className="mt-3 text-muted-foreground">
              From a quick station drop to multi-day medical escort travel, our trained helpers handle the details so families can relax.
            </p>
            <div className="mt-6 space-y-3">
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
            <div className="mt-6 rounded-2xl border border-secondary/40 bg-gradient-plate p-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">What happens next?</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary/85">
                {[
                  "Your form opens WhatsApp pre-filled with HELP keyword",
                  "Our team confirms availability within minutes",
                  "A briefed helper is assigned ahead of the trip",
                  "You get the helper's name & number before service",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <PageCTA title="Prefer to just talk?" subtitle="Skip the form — call or WhatsApp us directly." showBookingLink={false} />
    </PageShell>
  );
}
