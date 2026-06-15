import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/tn45-logo.asset.json";
import { waLink, PHONE } from "./FloatingActions";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#booking", label: "Booking" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const closeDrawer = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 320);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-card border-b border-border/70"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <a href="#home" aria-label="TN45 Tamilnadu Travel Company" className="flex shrink-0 items-center">
            <img
              src={logo.url}
              alt="TN45 Tamilnadu Travel Company"
              className="h-12 w-auto rounded-lg shadow-card sm:h-14"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-primary/80 transition hover:bg-muted hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE}`}
              aria-label="Call"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-semibold text-primary hover:bg-muted transition"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-bold text-whatsapp-foreground shadow-card hover:brightness-110 transition"
            >
              <WhatsAppIcon className="h-4 w-4" /> Book Now
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-navy transition hover:brightness-110 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer (mobile/tablet only) */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close menu"
            onClick={closeDrawer}
            className={`absolute inset-0 bg-primary/55 backdrop-blur-sm ${closing ? "animate-fade-bg" : "animate-fade-bg"}`}
            style={closing ? { animationDirection: "reverse" } : undefined}
          />
          <aside
            className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-elevated ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            <div className="flex items-center justify-between border-b border-border bg-gradient-plate px-5 py-4">
              <img src={logo.url} alt="TN45" className="h-12 w-auto rounded-md shadow-card" />
              <button
                onClick={closeDrawer}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition hover:brightness-110"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeDrawer}
                  style={{ animationDelay: `${80 + i * 50}ms` }}
                  className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-base font-semibold text-foreground transition hover:bg-muted animate-fade-up"
                >
                  <span>{l.label}</span>
                  <ChevronRight className="h-4 w-4 text-primary/40 transition group-hover:translate-x-1 group-hover:text-primary" />
                </a>
              ))}
            </nav>

            <div className="border-t border-border bg-muted/40 p-4 space-y-2.5">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeDrawer}
                className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-bold text-whatsapp-foreground shadow-card"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp Booking
              </a>
              <a
                href={`tel:${PHONE}`}
                onClick={closeDrawer}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-navy"
              >
                <Phone className="h-4 w-4" /> Call +91 94866 42242
              </a>
              <p className="pt-2 text-center text-xs text-muted-foreground">
                Mannarpuram, Trichy · 24/7 Inquiry Support
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
