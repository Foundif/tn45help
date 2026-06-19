import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { faqsEN, useSiteData } from "@/lib/site-data";
import faqImg from "@/assets/faq-illo.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Exodus Mobility Co" },
      { name: "description", content: "Answers to common questions about Exodus Mobility Co travel assistance services in Trichy." },
      { property: "og:title", content: "FAQ — Exodus Mobility Co" },
      { property: "og:description", content: "Common questions about booking, pricing and services." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqsEN.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useTranslation();
  const { faqs } = useSiteData();
  return (
    <PageShell>
      <PageHero eyebrow={t("faq.eyebrow") as string} title={t("faq.title") as string}>
        {t("faq.sub")}
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <img
                src={faqImg}
                alt={t("faq.title") as string}
                loading="lazy"
                width={1280}
                height={896}
                className="w-full rounded-3xl border border-primary/10 shadow-card"
              />
              <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-base font-bold text-primary">{t("faq.stillTitle")}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{t("faq.stillSub")}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <PageCTA title={t("faq.ctaTitle") as string} subtitle={t("faq.ctaSub") as string} />
    </PageShell>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-primary">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground animate-fade-in">{a}</div>}
    </div>
  );
}
