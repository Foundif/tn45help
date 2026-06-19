import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink, PHONE } from "./FloatingActions";

export function PageCTA({
  title, subtitle, showBookingLink = true,
}: { title?: string; subtitle?: string; showBookingLink?: boolean }) {
  const { t } = useTranslation();
  return (
    <section className="bg-primary py-14 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">{title ?? (t("pageCTA.title") as string)}</h2>
        <p className="mt-3 text-primary-foreground/80">{subtitle ?? (t("pageCTA.sub") as string)}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" /> {t("cta.whatsappHelp")}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground shadow-card transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> {t("cta.callPhone")}
          </a>
          {showBookingLink && (
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              {t("cta.bookingForm")} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
