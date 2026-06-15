import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Train, Home, MapPin, PartyPopper, Stethoscope, Ambulance, Bus,
  ShieldCheck, IndianRupee, Smile, Heart, MessageCircle, Award,
  Clock, Users, ChevronDown, Phone, CheckCircle2, Star,
  Accessibility, Sparkles,
} from "lucide-react";
import logo from "@/assets/tn45-logo.asset.json";
import heroImage from "@/assets/hero-illustration.jpg";
import svcStation from "@/assets/svc-station-assist.jpg";
import svcHome from "@/assets/svc-home-to-station.jpg";
import svcToHome from "@/assets/svc-station-to-home.jpg";
import svcFestHalf from "@/assets/svc-festival-half.jpg";
import svcFestFull from "@/assets/svc-festival-full.jpg";
import svcHospital from "@/assets/svc-hospital.jpg";
import svcOutstation from "@/assets/svc-outstation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingActions, waLink, PHONE } from "@/components/FloatingActions";
import { BookingForm } from "@/components/BookingForm";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

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
  { icon: Train, image: svcStation, name: "In Railway/Bus Station Assist", desc: "Support inside the station — luggage, boarding, navigation.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: Home, image: svcHome, name: "Home to Railway/Bus Station", desc: "Pickup from home and assisted drop till your boarding point.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: MapPin, image: svcToHome, name: "Railway/Bus Station to Home", desc: "Receive at the platform and safe drop to home address.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: PartyPopper, image: svcFestHalf, name: "Festivity Half Day Assistance", desc: "Temple visits, family functions, festival outings.", price: "₹600", duration: "6 Hours" },
  { icon: Sparkles, image: svcFestFull, name: "Festivity Full Day Assistance", desc: "Full-day support for weddings, ceremonies, gatherings.", price: "₹1200", duration: "12 Hours" },
  { icon: Stethoscope, image: svcHospital, name: "Hospital Visit Assist", desc: "Pickup, OPD assistance and drop — ideal for elderly patients.", price: "₹500", duration: "4 Hours" },
  { icon: Ambulance, image: svcOutstation, name: "Outstation Medical Escort", desc: "Trained escort for outstation medical travel and stays.", price: "₹1200", duration: "per Day" },
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
      <section id="home" className="relative overflow-hidden bg-gradient-hero pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="bg-gradient-radial absolute inset-0" />
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-leaf/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> Trichy · Tamil Nadu
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
              Travel Assistance Made{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Easy</span>
                <span className="absolute inset-x-0 -bottom-1 z-0 h-2.5 rounded-full bg-leaf/40" />
              </span>
              {" "}Across Tamil Nadu
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary/75 sm:text-lg">
              Reliable support for Railway Stations, Bus Stations, Hospital Visits, Elderly Travelers, Medical Escorts and Festival Assistance.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110">
                <WhatsAppIcon className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={`tel:${PHONE}`}
                 className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-muted">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-2.5 text-sm sm:grid-cols-4">
              {["Trusted Assistance", "Trained Helpers", "Affordable Pricing", "Available in Trichy"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-primary/85">
                  <CheckCircle2 className="h-4 w-4 text-leaf" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elevated">
              <img
                src={heroImage}
                alt="TN45 travel assistance helpers supporting elderly travelers at a Tamil Nadu railway station"
                width={1280}
                height={1024}
                className="block h-auto w-full"
              />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { v: "24/7", l: "Inquiry" },
                { v: "₹200+", l: "Starting" },
                { v: "1000+", l: "Trips" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-primary/10 bg-card p-3 text-center shadow-card">
                  <div className="text-xl font-extrabold text-primary sm:text-2xl">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">About Us</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">About Tamilnadu Travel Company</h2>
            <div className="mt-6 h-1 w-16 rounded-full bg-secondary" />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-3">
            <p>
              <strong className="text-primary">Tamilnadu Travel Company (TN45)</strong> helps travelers, senior citizens, patients, and families receive reliable assistance during their journeys.
            </p>
            <p>
              Whether you need help at a railway station, bus station, hospital visit, festival gathering, or outstation medical trip, our trained assistants ensure a smooth and stress-free experience.
            </p>
            <div className="rounded-2xl border border-secondary/40 bg-gradient-plate p-6">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                <Award className="h-4 w-4" /> Our Mission
              </div>
              <p className="mt-2 text-primary">
                To provide dependable travel assistance and human support whenever it is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gradient-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Services & Pricing</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Travel Assistance, Priced Honestly</h2>
            <p className="mt-4 text-muted-foreground">Transparent pricing across all assistance services. Add-ons available on request.</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <a href={waLink(`Hi, I'd like to book: ${s.name} (${s.price}).`)}
                       target="_blank" rel="noopener noreferrer"
                       className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:brightness-110">
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Add-ons */}
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

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">How It Works</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Booking in 5 Simple Steps</h2>
          </div>
          <ol className="relative mt-14 space-y-10 border-l-2 border-dashed border-secondary pl-14 sm:mx-auto sm:max-w-3xl sm:pl-16">
            {steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="absolute -left-[68px] grid h-12 w-12 place-items-center rounded-full bg-gradient-plate text-base font-extrabold text-primary shadow-yellow sm:-left-[72px]">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-primary">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY CHOOSE — now warm yellow plate */}
      <section className="relative overflow-hidden bg-gradient-plate py-20 text-primary sm:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,oklch(0.99_0.02_95)_0%,transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Why Choose TN45</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted by Trichy Families</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <div key={w.t} className="rounded-2xl border border-primary/10 bg-card/80 p-5 backdrop-blur transition hover:bg-card hover:shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
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
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Booking</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Tell Us About Your Trip</h2>
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
                  <span className="font-semibold text-primary">{x.t}</span>
                </div>
              ))}
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Testimonials</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">What Our Customers Say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.n} className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card">
                <div className="flex gap-1 text-secondary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-primary">"{t.q}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="text-sm font-bold text-primary">{t.n}</div>
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
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">FAQs</span>
            <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gradient-plate py-20 text-primary sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">Contact</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Reach Tamilnadu Travel Company</h2>
            <p className="mt-4 text-primary/80">We respond fastest on WhatsApp. Drop in, call, or message us anytime.</p>
            <div className="mt-8 grid gap-4">
              <ContactRow icon={MapPin} title="Address">
                Race Course Road, 18 Richard Building,<br />
                Mannarpuram, Trichy East,<br />
                Tiruchirappalli, Tamil Nadu 620023
              </ContactRow>
              <ContactRow icon={WhatsAppIcon} title="WhatsApp" href={waLink()}>
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
          <div className="overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-elevated">
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
            <img src={logo.url} alt="TN45" className="h-14 w-auto rounded-md" />
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Reliable assistance for railway, bus, hospital, festival and medical travel across Tiruchirappalli and Tamil Nadu.
            </p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Quick Links</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              {["Home", "About", "Services", "Booking", "FAQ", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-secondary">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-secondary">Get in Touch</div>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li><a href={waLink()} className="hover:text-secondary">WhatsApp: +91 96554 51299</a></li>
              <li><a href={`tel:${PHONE}`} className="hover:text-secondary">Phone: +91 94866 42242</a></li>
              <li>Mannarpuram, Trichy East</li>
              <li>Tamil Nadu 620023</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-4 pt-6 text-center text-xs text-primary-foreground/60 sm:px-6">
          © 2026 Tamilnadu Travel Company (TN45). All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactRow({ icon: Icon, title, children, href }: { icon: any; title: string; children: React.ReactNode; href?: string }) {
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
      {open && <div className="border-t border-border bg-muted/30 px-5 py-4 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}
