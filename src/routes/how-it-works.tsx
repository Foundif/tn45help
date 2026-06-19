import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { useSiteData } from "@/lib/site-data";
import hiwImg from "@/assets/how-it-works.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Book with Exodus Mobility Co" },
      { name: "description", content: "Booking travel assistance with Exodus Mobility Co in Trichy is simple — choose a service, share details, confirm on WhatsApp and we handle the rest." },
      { property: "og:title", content: "How It Works — Exodus Mobility Co" },
      { property: "og:description", content: "Five simple steps to book reliable travel assistance in Trichy." },
    ],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  const { t } = useTranslation();
  const { steps } = useSiteData();
  return (
    <PageShell>
      <PageHero eyebrow={t("how.eyebrow") as string} title={t("how.title") as string}>
        {t("how.sub")}
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <img
                src={hiwImg}
                alt={t("how.title") as string}
                loading="lazy"
                width={1280}
                height={896}
                className="w-full rounded-3xl border border-primary/10 shadow-elevated"
              />
              <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">{t("how.avgLabel")}</div>
                <div className="mt-1 text-2xl font-extrabold text-primary">{t("how.avgValue")}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t("how.avgDesc")}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ol className="relative space-y-10 border-l-2 border-dashed border-accent pl-14 sm:pl-16">
              {steps.map((s, i) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[68px] grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground text-base font-extrabold shadow-card sm:-left-[72px]">
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

      <PageCTA title={t("how.ctaTitle") as string} />
    </PageShell>
  );
}
