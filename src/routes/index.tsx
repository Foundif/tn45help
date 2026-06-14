import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Train, Home, MapPin, PartyPopper, Stethoscope, Ambulance, Bus,
  ShieldCheck, IndianRupee, Smile, Heart, MessageCircle, Award,
  Clock, Users, ChevronDown, Phone, Mail, CheckCircle2, Star,
  Accessibility, Sparkles,
} from "lucide-react";
import logo from "@/assets/tn45-logo.asset.json";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions, waLink, PHONE, WHATSAPP } from "@/components/FloatingActions";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TN45 Tamilnadu Travel Company — Trichy Travel Assistance" },
      { name: "description", content: "Trusted travel, railway & bus station, hospital visit, elderly support and medical escort assistance in Tiruchirappalli, Tamil Nadu. Book on WhatsApp." },
      { property: "og:title", content: "TN45 Tamilnadu Travel Company — Trichy" },
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
          name: "Tamilnadu Travel Company (TN45)",
          image: "https://tn45.in/logo.png",
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

const services = [
  { icon: Train, name: "In Railway/Bus Station Assist", desc: "Support inside the station — luggage, boarding, navigation.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: Home, name: "Home to Railway/Bus Station", desc: "Pickup from home and assisted drop till your boarding point.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: MapPin, name: "Railway/Bus Station to Home", desc: "Receive at the platform and safe drop to home address.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: PartyPopper, name: "Festivity Half Day Assistance", desc: "Temple visits, family functions, festival outings.", price: "₹600", duration: "6 Hours" },
  { icon: Sparkles, name: "Festivity Full Day Assistance", desc: "Full-day support for weddings, ceremonies, gatherings.", price: "₹1200", duration: "12 Hours" },
  { icon: Stethoscope, name: "Hospital Visit Assist", desc: "Pickup, OPD assistance and drop — ideal for elderly patients.", price: "₹500", duration: "4 Hours" },
  { icon: Ambulance, name: "Outstation Medical Escort", desc: "Trained escort for outstation medical travel and stays.", price: "₹1200", duration: "per Day" },
];

const addons = [
  { icon: Accessibility, name: "Wheelchair Assistance", price: "₹50" },
  { icon: Users, name: "Porter Service", price: "Actual Charges" },
  { icon: Clock, name: "After Hours Support", price: "+20%" },
  { icon: Clock, name: "Extra Hours", price: "₹100 / hr" },
];

const why = [
  { icon: ShieldCheck, t: "Reliable Travel Assistance" },
  { icon: IndianRupee, t: "Affordable Pricing" },
  { icon: Smile, t: "Friendly Helpers" },
  { icon: Heart, t: "Senior Citizen Support" },
  { icon: Stethoscope, t: "Medical Escort Services" },
  { icon: MessageCircle, t: "Easy WhatsApp Booking" },
  { icon: Award, t: "Local Trichy Expertise" },
  { icon: Clock, t: "Fast Response Team" },
];

const steps = [
  { t: "Choose Your Service", d: "Pick from station assist, hospital visits, festivity or escort services." },
  { t: "Share Travel Details", d: "Send your date, time, pickup, and any special needs over WhatsApp." },
  { t: "Confirm Booking", d: "We confirm availability and lock your slot instantly." },
  { t: "Helper Assigned", d: "A trained helper is assigned and briefed before your service." },
  { t: "Hassle-Free Assistance", d: "Travel with confidence — we handle the rest." },
];

const testimonials = [
  { n: "Saravanan R.", c: "Trichy", q: "Excellent support at Trichy Railway Station. Very helpful team — handled my elderly father with care." },
  { n: "Lakshmi P.", c: "Srirangam", q: "Used their hospital assistance service for my parents. Highly recommended for senior citizens." },
  { n: "Mohan K.", c: "Tiruchirappalli", q: "Smooth booking process and professional staff. Worth every rupee." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We primarily serve Tiruchirappalli (Trichy) and surrounding areas in Tamil Nadu, including outstation medical escort across the state." },
  { q: "How do I book a service?", a: "The fastest way is WhatsApp at +91 96554 51299. You can also call +91 94866 42242 or use the booking form on this site." },
  { q: "Can I request wheelchair assistance?", a: "Yes. Wheelchair assistance is available as an add-on for ₹50 and can be requested at the time of booking." },
  { q: "Do you provide medical escorts?", a: "Yes — trained medical escorts for hospital visits and outstation medical travel at ₹1200 per day." },
  { q: "How are payments handled?", a: "Payments are confirmed at the time of booking via UPI, cash or bank transfer. Details shared on WhatsApp." },
  { q: "What if my travel schedule changes?", a: "Just message us on WhatsApp — we offer flexible rescheduling subject to helper availability." },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <FloatingActions />

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-gradient-hero pt-28 pb-20 text-primary-foreground sm:pt-32 sm:pb-28">
        <div className="bg-gradient-radial absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Trichy · Tamil Nadu
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Travel Assistance Made <span className="text-secondary">Easy</span> Across Tamil Nadu
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Reliable support for Railway Stations, Bus Stations, Hospital Visits, Elderly Travelers, Medical Escorts and Festival Assistance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-bold text-secondary-foreground shadow-yellow transition hover:brightness-95">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={`tel:${PHONE}`}
                 className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {["Trusted Assistance", "Trained Helpers", "Affordable Pricing", "Available in Trichy"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-secondary" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-6 rounded-[2rem] bg-secondary/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-xl shadow-elevated sm:p-8">
              <img src={logo.url} alt="TN45 Tamilnadu Travel Company" className="mx-auto w-full max-w-md rounded-2xl shadow-yellow animate-float" />
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/70">Inquiry</div>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="text-2xl font-bold text-secondary">₹200+</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/70">Starting</div>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <div className="text-2xl font-bold text-secondary">1000+</div>
                  <div className="text-[11px] uppercase tracking-wide text-white/70">Trips</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">About Tamilnadu Travel Company</h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              <strong className="text-foreground">Tamilnadu Travel Company (TN45)</strong> helps travelers, senior citizens, patients, and families receive reliable assistance during their journeys.
            </p>
            <p>
              Whether you need help at a railway station, bus station, hospital visit, festival gathering, or outstation medical trip, our trained assistants ensure a smooth and stress-free experience.
            </p>
            <div className="rounded-2xl border border-border bg-muted/50 p-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" /> Our Mission
              </div>
              <p className="mt-2 text-foreground">
                To provide dependable travel assistance and human support whenever it is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Services & Pricing</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Travel Assistance, Priced Honestly</h2>
            <p className="mt-4 text-muted-foreground">Transparent pricing across all assistance services. Add-ons available on request.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.name} className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-yellow">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-2xl font-extrabold text-primary">{s.price}</div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.duration}</div>
                  </div>
                  <a href={waLink(`Hi, I'd like to book: ${s.name} (${s.price}).`)}
                     target="_blank" rel="noopener noreferrer"
                     className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110">
                    Book Now
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-foreground">Add-on Services</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Optional</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {addons.map((a) => (
                <div key={a.name} className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{a.name}</div>
                    <div className="text-xs text-muted-foreground">{a.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">How It Works</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Booking in 5 Simple Steps</h2>
          </div>
          <ol className="relative mt-14 space-y-8 border-l-2 border-dashed border-secondary/60 pl-8 sm:mx-auto sm:max-w-3xl">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[42px] grid h-10 w-10 place-items-center rounded-full bg-gradient-yellow text-sm font-extrabold text-primary shadow-yellow">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Why Choose TN45</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by Trichy Families</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold">{w.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Booking</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Tell Us About Your Trip</h2>
            <p className="mt-4 text-muted-foreground">
              Fill in your details — we'll receive everything directly on WhatsApp and confirm your booking within minutes.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { i: Bus, t: "Station-to-Home Door Service" },
                { i: Stethoscope, t: "Hospital & Medical Escorts" },
                { i: Heart, t: "Senior Citizen Specialists" },
              ].map((x) => (
                <div key={x.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-secondary-foreground">
                    <x.i className="h-5 w-5" />
                  </div>
                  <span className="font-semibold text-foreground">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.n} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-bold text-foreground">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.c}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQs</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gradient-hero py-20 text-primary-foreground sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Contact</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Reach Tamilnadu Travel Company</h2>
            <p className="mt-4 text-white/80">We respond fastest on WhatsApp. Drop in, call, or message us anytime.</p>
            <div className="mt-8 space-y-4">
              <ContactRow icon={MapPin} title="Address">
                Race Course Road, 18 Richard Building,<br />
                Mannarpuram, Trichy East,<br />
                Tiruchirappalli, Tamil Nadu 620023
              </ContactRow>
              <ContactRow icon={MessageCircle} title="WhatsApp" href={waLink()}>
                +91 96554 51299
              </ContactRow>
              <ContactRow icon={Phone} title="Phone" href={`tel:${PHONE}`}>
                +91 94866 42242
              </ContactRow>
              <ContactRow icon={Clock} title="Hours">
                Monday – Sunday · 24/7 Inquiry Support
              </ContactRow>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5 shadow-elevated">
            <iframe
              title="TN45 Location"
              src="https://www.google.com/maps?q=Mannarpuram,+Tiruchirappalli,+Tamil+Nadu+620023&output=embed"
              className="h-full min-h-[400px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="TN45" className="h-12 w-auto rounded-md" />
              <div>
                <div className="font-bold">Tamilnadu Travel Company</div>
                <div className="text-xs text-white/60">TN45 · Your Trusted Travel Assistance Partner</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/70">
              Reliable assistance for railway, bus, hospital, festival and medical travel across Tiruchirappalli and Tamil Nadu.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {["Home", "About", "Services", "Booking", "FAQ", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-secondary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Get in Touch</div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href={waLink()} className="hover:text-secondary">WhatsApp: +91 96554 51299</a></li>
              <li><a href={`tel:${PHONE}`} className="hover:text-secondary">Phone: +91 94866 42242</a></li>
              <li>Mannarpuram, Trichy East</li>
              <li>Tamil Nadu 620023</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-xs text-white/60 sm:px-6">
          © 2026 Tamilnadu Travel Company (TN45). All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon: Icon, title, children, href }: { icon: any; title: string; children: React.ReactNode; href?: string }) {
  const Inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-secondary">{title}</div>
        <div className="mt-1 text-sm text-white/90">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{Inner}</a> : Inner;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
