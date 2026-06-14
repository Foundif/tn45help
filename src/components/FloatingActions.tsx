import { MessageCircle, Phone } from "lucide-react";

export const WHATSAPP = "919655451299";
export const PHONE = "+919486642242";

export function waLink(message = "Hi, I'd like to book a travel assistance service with TN45.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
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
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
