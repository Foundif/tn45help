import { createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink, PHONE } from "@/components/FloatingActions";
import supportImg from "@/assets/contact-support.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TN45 Travel Company, Trichy" },
      { name: "description", content: "Reach TN45 Travel Company in Trichy via WhatsApp, phone, or visit our Mannarpuram office. 24/7 inquiry support." },
      { property: "og:title", content: "Contact — TN45 Travel Company" },
      { property: "og:description", content: "WhatsApp, phone and address for TN45 Travel Company, Trichy." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  return (
    <PageShell>
      <PageHero eyebrow={t("contact.eyebrow") as string} title={t("contact.title") as string}>
        {t("contact.sub")}
      </PageHero>

      <section className="bg-muted/40 py-16 text-primary sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <img
              src={supportImg}
              alt={t("contact.title") as string}
              loading="lazy"
              width={1280}
              height={896}
              className="w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
            <div className="mt-6 grid gap-4">
              <ContactRow icon={MapPin} title={t("contact.address") as string}>
                {t("contact.addressFull")}
              </ContactRow>
              <ContactRow icon={WhatsAppIcon} title={t("contact.whatsapp") as string} href={waLink()}>
                {t("contact.waLine")}
              </ContactRow>
              <ContactRow icon={Phone} title={t("contact.phone") as string} href={`tel:${PHONE}`}>
                +91 94866 42242
              </ContactRow>
              <ContactRow icon={Clock} title={t("contact.hours") as string}>
                {t("contact.hoursLine")}
              </ContactRow>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-elevated">
            <iframe
              title="TN45 Travel Company Location"
              src="https://www.google.com/maps?q=Mannarpuram,+Tiruchirappalli,+Tamil+Nadu+620023&output=embed"
              className="h-full min-h-[500px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <PageCTA title={t("contact.ctaTitle") as string} />
    </PageShell>
  );
}

function ContactRow({ icon: Icon, title, children, href }: { icon: any; title: string; children: ReactNode; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-card/80 p-4 backdrop-blur transition hover:bg-card">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-secondary">{title}</div>
        <div className="mt-1 text-sm text-primary">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a> : Inner;
}
