import { createFileRoute } from "@tanstack/react-router";
import { Bus, Stethoscope, Heart, Phone, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
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
      { title: "Book Travel Assistance — Exodus Mobility Co" },
      { name: "description", content: "Book railway, bus, hospital, festival or outstation medical escort assistance with Exodus Mobility Co." },
      { property: "og:title", content: "Book with Exodus Mobility Co" },
      { property: "og:description", content: "Send your trip details via WhatsApp in seconds." },
    ],
  }),
  component: BookingPage,
});

const SUP_ICONS = [Bus, Stethoscope, Heart];

function BookingPage() {
  const { t } = useTranslation();
  const sups = (t("booking.sup", { returnObjects: true }) as string[]).map((label, i) => ({ t: label, I: SUP_ICONS[i] }));
  const nextItems = t("booking.nextItems", { returnObjects: true }) as string[];
  return (
    <PageShell>
      <PageHero eyebrow={t("booking.eyebrow") as string} title={t("booking.title") as string}>
        {t("booking.sub")}
      </PageHero>

      <section className="py-8">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 px-4 sm:px-6">
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110">
            <WhatsAppIcon className="h-4 w-4" /> {t("cta.whatsappHelp")}
          </a>
          <a href={`tel:${PHONE}`}
             className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-bold text-primary transition hover:bg-muted">
            <Phone className="h-4 w-4" /> {t("cta.callPhone")}
          </a>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <img
              src={bookingImg}
              alt={t("booking.title") as string}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
            <h2 className="mt-8 text-2xl font-bold text-primary sm:text-3xl">{t("booking.specialistTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("booking.specialistSub")}</p>
            <div className="mt-6 space-y-3">
              {sups.map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                    <x.I className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-primary">{x.t}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-accent/40 bg-accent/25 p-5">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{t("booking.nextTitle")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary/85">
                {nextItems.map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <PageCTA title={t("booking.ctaTitle") as string} subtitle={t("booking.ctaSub") as string} showBookingLink={false} />
    </PageShell>
  );
}
