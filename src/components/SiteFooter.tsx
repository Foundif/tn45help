import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import logo from "@/assets/tn45-logo.png.asset.json";
import subLogo from "@/assets/exodus-logo.png.asset.json";
import { waLink, PHONE } from "./FloatingActions";
import { navLinks } from "@/lib/site-data";

export function SiteFooter() {
  const { t } = useTranslation();
  const brand = t("brand.name") as string;
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo.url} alt={brand} className="h-16 w-auto" />
          <p className="mt-4 max-w-md text-sm text-primary-foreground/75">{t("footer.desc")}</p>
          <div className="mt-5 flex items-center gap-3 rounded-xl bg-primary-foreground/5 p-3 max-w-sm">
            <img src={subLogo.url} alt={t("brand.subBrand") as string} className="h-10 w-auto" />
            <div className="text-xs text-primary-foreground/80">
              <div className="font-semibold text-secondary">Sub-brand</div>
              <div>{t("brand.subBrand")} — {t("brand.tagline")}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">{t("footer.quick")}</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-secondary">{t(`nav.${l.key}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold uppercase tracking-widest text-secondary">{t("footer.get")}</div>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href={waLink()} className="hover:text-secondary">{t("footer.waLabel")}</a></li>
            <li><a href={`tel:${PHONE}`} className="hover:text-secondary">{t("footer.phoneLabel")}</a></li>
            <li>{t("footer.addr1")}</li>
            <li>{t("footer.addr2")}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-4 pt-6 text-center text-xs text-primary-foreground/60 sm:px-6">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
