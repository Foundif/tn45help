import { createFileRoute } from "@tanstack/react-router";
import { ReactNode } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { PageCTA } from "@/components/PageCTA";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { waLink, PHONE } from "@/components/FloatingActions";
const supportImg = "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1280";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact TN45 — Trichy Travel Assistance" },
      { name: "description", content: "Reach Tamilnadu Travel Company (TN45) in Trichy via WhatsApp, phone, or visit our Mannarpuram office. 24/7 inquiry support." },
      { property: "og:title", content: "Contact TN45 — Tamilnadu Travel Company" },
      { property: "og:description", content: "WhatsApp, phone and address for TN45 Trichy." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Reach Tamilnadu Travel Company">
        We respond fastest on WhatsApp. Drop in, call, or message us anytime — 24/7 inquiry support.
      </PageHero>

      <section className="bg-gradient-plate py-16 text-primary sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <img
              src={supportImg}
              alt="Friendly TN45 customer support"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full rounded-3xl border border-primary/10 shadow-elevated"
            />
            <div className="mt-6 grid gap-4">
              <ContactRow icon={MapPin} title="Address">
                Race Course Road, 18 Richard Building,<br />
                Mannarpuram, Trichy East,<br />
                Tiruchirappalli, Tamil Nadu 620023
              </ContactRow>
              <ContactRow icon={WhatsAppIcon} title="WhatsApp" href={waLink()}>
                +91 96554 51299 — message <strong>HELP</strong>
              </ContactRow>
              <ContactRow icon={Phone} title="Phone" href={`tel:${PHONE}`}>
                +91 94866 42242
              </ContactRow>
              <ContactRow icon={Clock} title="Hours">
                Monday – Sunday · 24/7 Inquiry Support
              </ContactRow>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-elevated">
            <iframe
              title="TN45 Location"
              src="https://www.google.com/maps?q=Mannarpuram,+Tiruchirappalli,+Tamil+Nadu+620023&output=embed"
              className="h-full min-h-[500px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <PageCTA title="Talk to a real person, right now" />
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
        <div className="text-xs font-bold uppercase tracking-widest text-leaf">{title}</div>
        <div className="mt-1 text-sm text-primary">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a> : Inner;
}
