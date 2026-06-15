import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useMenuOpen } from "./menuStore";

export const WHATSAPP = "919655451299";
export const PHONE = "+919486642242";

export function waLink(message = "HELP — Hi TN45, I need help booking a travel assistance service.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function FloatingActions() {
  const menuOpen = useMenuOpen();
  return (
    <div
      className={`fixed bottom-5 right-5 z-30 flex flex-col gap-3 transition-all duration-300 ${
        menuOpen ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
      }`}
      aria-hidden={menuOpen}
    >
      <a
        href={`tel:${PHONE}`}
        aria-label="Call TN45"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-navy transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp TN45"
        className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated animate-pulse-ring transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
