import { useState } from "react";
import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { waLink, PHONE } from "./FloatingActions";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useSiteData } from "@/lib/site-data";

export function BookingForm() {
  const { t } = useTranslation();
  const { services } = useSiteData();
  const SERVICE_NAMES = services.map((s) => s.name);
  const [form, setForm] = useState({
    name: "", mobile: "", service: SERVICE_NAMES[0],
    transport: "Train", details: "", address: "", landmark: "",
    date: "", time: "", notes: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "HELP — New Booking Request (Exodus Mobility Co)",
      "",
      `Name: ${form.name}`,
      `Mobile: ${form.mobile}`,
      `Service: ${form.service}`,
      `Transport Mode: ${form.transport}`,
      `Travel Details: ${form.details}`,
      `Address: ${form.address}`,
      `Landmark: ${form.landmark}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Additional Requirements: ${form.notes}`,
    ];
    window.open(waLink(lines.join("\n")), "_blank");
  };

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.name")}</label>
          <input required value={form.name} onChange={update("name")} className={input} placeholder={t("booking.form.namePh") as string} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.mobile")}</label>
          <input required type="tel" value={form.mobile} onChange={update("mobile")} className={input} placeholder="+91" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.service")}</label>
          <select value={form.service} onChange={update("service")} className={input}>
            {SERVICE_NAMES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.transport")}</label>
          <select value={form.transport} onChange={update("transport")} className={input}>
            <option>Train</option><option>Bus</option><option>Cab/Car</option><option>Auto</option><option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.details")}</label>
          <input value={form.details} onChange={update("details")} className={input} placeholder={t("booking.form.detailsPh") as string} />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.address")}</label>
          <input value={form.address} onChange={update("address")} className={input} placeholder={t("booking.form.addressPh") as string} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.landmark")}</label>
          <input value={form.landmark} onChange={update("landmark")} className={input} placeholder={t("booking.form.landmarkPh") as string} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.date")}</label>
            <input type="date" value={form.date} onChange={update("date")} className={input} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.time")}</label>
            <input type="time" value={form.time} onChange={update("time")} className={input} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t("booking.form.notes")}</label>
          <textarea rows={3} value={form.notes} onChange={update("notes")} className={input} placeholder={t("booking.form.notesPh") as string} />
        </div>
      </div>

      <button type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-foreground shadow-card transition hover:brightness-110">
        <WhatsAppIcon className="h-5 w-5" /> {t("booking.form.submit")}
      </button>
      <a href={`tel:${PHONE}`}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/15 bg-card px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-muted">
        <Phone className="h-4 w-4" /> {t("booking.form.orCall")}
      </a>
      <p className="mt-3 text-center text-xs text-muted-foreground">{t("booking.form.footer")}</p>
    </form>
  );
}
