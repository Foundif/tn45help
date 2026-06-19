import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, Heart, Users, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Exodus Mobility Co — Trichy" },
      { name: "description", content: "Learn about Exodus Mobility Co — trusted travel, station, hospital and elderly assistance based in Tiruchirappalli, Tamil Nadu." },
      { property: "og:title", content: "About Exodus Mobility Co" },
      { property: "og:description", content: "Trusted travel assistance team based in Tiruchirappalli." },
    ],
  }),
  component: AboutPage,
});

const VALUE_ICONS = [ShieldCheck, Heart, Users, Sparkles];

function AboutPage() {
  const { t } = useTranslation();
  const values = (t("about.values", { returnObjects: true }) as Array<{ t: string; d: string }>).map((v, i) => ({ ...v, I: VALUE_ICONS[i] }));
  return (
    <PageShell>
      <PageHero eyebrow={t("about.eyebrow") as string} title={t("about.title") as string}>
        {t("about.sub")}
      </PageHero>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-secondary/20 blur-2xl" />
            <img
              src={aboutImg}
              alt={t("about.title") as string}
              loading="lazy"
              width={1280}
              height={896}
              className="relative w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("about.storyEyebrow")}</span>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{t("about.storyTitle")}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
            <div className="mt-6 rounded-2xl border border-accent/40 bg-accent/30 p-5">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" /> {t("about.missionLabel")}
              </div>
              <p className="mt-2 text-primary">{t("about.mission")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">{t("about.valuesEyebrow")}</span>
            <h2 className="mt-2 text-3xl font-bold text-primary sm:text-4xl">{t("about.valuesTitle")}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-primary/10 bg-card p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <v.I className="h-5 w-5" />
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
