import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith("ta") ? "ta" : "en";
  const toggle = () => i18n.changeLanguage(current === "en" ? "ta" : "en");
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("lang.label") as string}
      className={`inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-card font-bold text-primary transition hover:bg-muted ${
        compact ? "h-9 px-2.5 text-xs" : "px-3 py-2 text-sm"
      }`}
    >
      <Languages className="h-4 w-4" />
      <span>{current === "en" ? "தமிழ்" : "EN"}</span>
    </button>
  );
}
