import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/exodus-logo.png.asset.json";
import { waLink, PHONE } from "./FloatingActions";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { setMenuOpen } from "./menuStore";
import { navLinks } from "@/lib/site-data";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function SiteHeader() {
  const { t } = useTranslation();
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
    setMenuOpen(open);
    return () => { document.body.style.overflow = ""; setMenuOpen(false); };
  }, [open]);

  const closeDrawer = () => {
    setClosing(true);
    setMenuOpen(false);
    setTimeout(() => { setOpen(false); setClosing(false); }, 320);
  };

  const brand = t("brand.name") as string;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-card border-b border-border/70"
            : "bg-background/75 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <Link to="/" aria-label={brand} className="flex shrink-0 items-center">
            <img
              src={logo.url}
              alt={brand}
              className="h-12 w-auto rounded-lg bg-primary p-1 shadow-card sm:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                className="rounded-full px-3 py-2 text-sm font-semibold transition"
                activeProps={{
                  className:
                    "rounded-full px-3 py-2 text-sm font-semibold transition bg-primary text-primary-foreground shadow-navy",
                }}
                inactiveProps={{
                  className:
                    "rounded-full px-3 py-2 text-sm font-semibold transition text-primary/80 hover:bg-muted hover:text-primary",
                }}
              >
                {t(`nav.${l.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher compact />
            <a
              href={`tel:${PHONE}`}
              aria-label="Call"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-semibold text-primary hover:bg-muted transition"
            >
              <Phone className="h-4 w-4" /> {t("cta.callNow")}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-bold text-whatsapp-foreground shadow-card hover:brightness-110 transition"
            >
              <WhatsAppIcon className="h-4 w-4" /> {t("cta.bookNow")}
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
            className="absolute inset-0 bg-primary/55 backdrop-blur-sm animate-fade-bg"
            style={closing ? { animationDirection: "reverse" } : undefined}
          />
          <aside
            className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-elevated ${
              closing ? "animate-slide-out" : "animate-slide-in"
            }`}
          >
            <div className="flex items-center justify-between border-b border-border bg-primary px-5 py-4">
              <img src={logo.url} alt={brand} className="h-12 w-auto rounded-md bg-primary p-1 shadow-card" />
              <button
                onClick={closeDrawer}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground transition hover:brightness-110"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {navLinks.map((l, i) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={closeDrawer}
                  style={{ animationDelay: `${80 + i * 50}ms` }}
                  activeOptions={{ exact: true }}
                  className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition animate-fade-up"
                  activeProps={{
                    className:
                      "group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition animate-fade-up bg-primary text-primary-foreground",
                  }}
                  inactiveProps={{
                    className:
                      "group flex items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition animate-fade-up text-foreground hover:bg-muted",
                  }}
                >
                  <span>{t(`nav.${l.key}`)}</span>
                  <ChevronRight className="h-4 w-4 text-primary/40 transition group-hover:translate-x-1 group-hover:text-primary" />
                </Link>
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
                <WhatsAppIcon className="h-4 w-4" /> {t("cta.whatsappBooking")}
              </a>
              <a
                href={`tel:${PHONE}`}
                onClick={closeDrawer}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-navy"
              >
                <Phone className="h-4 w-4" /> {t("cta.callPhone")}
              </a>
              <p className="pt-2 text-center text-xs text-muted-foreground">
                Mannarpuram, Trichy · 24/7
              </p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
