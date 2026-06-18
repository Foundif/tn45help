import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { faqs } from "@/lib/site-data";
import faqImg from "@/assets/faq-illo.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — TN45 Travel Assistance Questions Answered" },
      { name: "description", content: "Answers to common questions about TN45 travel assistance services in Trichy — bookings, pricing, wheelchair support, medical escort and more." },
      { property: "og:title", content: "FAQ — TN45 Tamilnadu Travel Company" },
      { property: "og:description", content: "Common questions about booking, pricing and services." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
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
  return (
    <PageShell>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions">
        Quick answers about bookings, pricing, helpers and our assistance services across Tamil Nadu.
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <img
                src={faqImg}
                alt="TN45 services illustration"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full rounded-3xl border border-primary/10 bg-gradient-plate shadow-card"
              />
              <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-card">
                <h3 className="text-base font-bold text-primary">Still have questions?</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Send a WhatsApp message with the keyword <strong>HELP</strong> — a real person replies, usually within minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      <PageCTA title="Didn't find your answer?" subtitle="Message HELP on WhatsApp or call — we'll answer in plain Tamil or English." />
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
