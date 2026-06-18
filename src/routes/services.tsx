import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { services, addons } from "@/lib/site-data";
import { waLink } from "@/components/FloatingActions";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — TN45 Tamilnadu Travel Company" },
      { name: "description", content: "Transparent prices for railway/bus station assistance, hospital visits, festival support, elderly travel and outstation medical escort in Trichy." },
      { property: "og:title", content: "Services & Pricing — TN45" },
      { property: "og:description", content: "Travel assistance services starting at ₹200 in Tiruchirappalli." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Services & Pricing" title="Travel Assistance, Priced Honestly">
        Transparent pricing across all assistance services. Add-ons available on request.
      </PageHero>

      <section className="bg-gradient-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-yellow">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-navy">
                    {s.price}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-primary">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{s.duration}</div>
                    <a href={waLink(`HELP — Hi TN45, I'd like to book: ${s.name} (${s.price}).`)}
                       target="_blank" rel="noopener noreferrer"
                       className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110">
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-primary">Add-on Services</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Optional</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {addons.map((a) => (
                <div key={a.name} className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{a.name}</div>
                    <div className="text-xs text-muted-foreground">{a.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
