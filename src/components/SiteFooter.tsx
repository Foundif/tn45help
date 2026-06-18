import { Link } from "@tanstack/react-router";
import logo from "@/assets/tn45-logo.asset.json";
import { waLink, PHONE } from "./FloatingActions";
import { navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
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
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-secondary">{l.label}</Link>
              </li>
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
  );
}
