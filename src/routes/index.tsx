import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions, waLink, PHONE } from "@/components/FloatingActions";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { HeroCarousel } from "@/components/HeroCarousel";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { heroSlides, useSiteData } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TN45 Travel Company — Trichy Travel Assistance" },
      { name: "description", content: "Trusted travel, railway & bus station, hospital visit, elderly support and medical escort assistance in Tiruchirappalli, Tamil Nadu. Book on WhatsApp." },
      { property: "og:title", content: "TN45 Travel Company — Trichy" },
      { property: "og:description", content: "Reliable travel assistance & medical escort services in Tiruchirappalli." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TN45 Travel Company",
          telephone: "+919486642242",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Race Course Road, 18 Richard Building, Mannarpuram, Trichy East",
            addressLocality: "Tiruchirappalli",
            addressRegion: "Tamil Nadu",
            postalCode: "620023",
            addressCountry: "IN",
          },
          areaServed: "Tiruchirappalli",
          priceRange: "₹200 – ₹1200",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();
  const { why, services, steps, testimonials, faqs } = useSiteData();
  const feats = t("home.feat", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <FloatingActions />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-10 sm:pt-32 sm:pb-24">
        <div className="bg-gradient-radial absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> {t("brand.city")}
            </div>
            <h1 className="mt-3 text-[26px] font-extrabold leading-[1.12] text-primary sm:mt-5 sm:text-5xl lg:text-6xl">
              {t("home.heroTitleA")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10">{t("home.heroTitleHighlight")}</span>
                <span className="absolute inset-x-0 -bottom-1 z-0 h-2.5 rounded-full bg-accent/60" />
              </span>
              {" "}{t("home.heroTitleB")}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-primary/75 sm:mt-5 sm:text-lg">
              <span className="sm:hidden">{t("home.heroShort")}</span>
              <span className="hidden sm:inline">{t("home.heroLong")}</span>
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110 sm:px-6 sm:py-3.5">
                <WhatsAppIcon className="h-4 w-4" /> {t("cta.bookWhatsapp")}
              </a>
              <a href={`tel:${PHONE}`}
                 className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-5 py-3 text-sm font-bold text-primary transition hover:bg-muted sm:px-6 sm:py-3.5">
                <Phone className="h-4 w-4" /> {t("cta.callNow")}
              </a>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs sm:mt-8 sm:grid-cols-4 sm:gap-2.5 sm:text-sm">
              {feats.map((f) => (
                <div key={f} className="flex items-center gap-2 text-primary/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative">
              <HeroCarousel images={heroSlides} />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5 sm:mt-5 sm:gap-3">
              {[
                { v: "24/7", l: t("home.stats.inquiry") as string },
                { v: "₹200+", l: t("home.stats.starting") as string },
                { v: "1000+", l: t("home.stats.trips") as string },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-primary/10 bg-card p-2.5 text-center shadow-card sm:p-3">
                  <div className="text-lg font-extrabold text-primary sm:text-2xl">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-muted/40 py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("home.whyEyebrow")}</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{t("home.whyTitle")}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.t} className="rounded-2xl border border-primary/10 bg-card p-5 transition hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold text-primary">{w.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
              {t("cta.explore")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-gradient-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("home.svcEyebrow")}</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{t("home.svcTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("home.svcSub")}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <article key={s.name} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={s.image} alt={s.name} loading="lazy" width={800} height={600}
                       className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-3 top-3 grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-secondary-foreground shadow-card">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-navy">{s.price}</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-primary">{s.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.duration}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
              {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("home.howEyebrow")}</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{t("home.howTitle")}</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <div key={s.t} className="rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground text-base font-extrabold shadow-card">{i + 1}</div>
                <h3 className="mt-3 text-sm font-bold text-primary">{s.t}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3 text-sm font-bold text-primary transition hover:bg-muted">
              {t("cta.fullWalkthrough")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("home.testEyebrow")}</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{t("home.testTitle")}</h2>
          </div>
        </div>
        <div className="mt-12">
          <TestimonialsMarquee items={testimonials} />
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("home.faqEyebrow")}</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{t("home.faqTitle")}</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.slice(0, 4).map((f, i) => <HomeFaq key={i} q={f.q} a={f.a} />)}
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/faq" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:brightness-110">
              {t("cta.allFaqs")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">{t("home.ctaTitle")}</h2>
          <p className="mt-3 text-primary-foreground/80">{t("home.ctaSub")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-card hover:brightness-110">
              <WhatsAppIcon className="h-4 w-4" /> {t("cta.whatsappNow")}
            </a>
            <Link to="/booking" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground hover:brightness-110">
              {t("cta.bookingForm")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function HomeFaq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <button onClick={() => setOpen((s) => !s)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-sm font-semibold text-primary sm:text-base">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground animate-fade-in">{a}</div>}
    </div>
  );
}
