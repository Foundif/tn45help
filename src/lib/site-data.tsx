import {
  Train, Home, MapPin, PartyPopper, Stethoscope, Ambulance,
  ShieldCheck, IndianRupee, Smile, Heart, MessageCircle, Award,
  Clock, Users, Accessibility, Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-illustration.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import svcStation from "@/assets/svc-station-assist.jpg";
import svcHome from "@/assets/svc-home-to-station.jpg";
import svcToHome from "@/assets/svc-station-to-home.jpg";
import svcFestHalf from "@/assets/svc-festival-half.jpg";
import svcFestFull from "@/assets/svc-festival-full.jpg";
import svcHospital from "@/assets/svc-hospital.jpg";
import svcOutstation from "@/assets/svc-outstation.jpg";

const SERVICE_META = [
  { icon: Train, image: svcStation, price: "₹200" },
  { icon: Home, image: svcHome, price: "₹200" },
  { icon: MapPin, image: svcToHome, price: "₹200" },
  { icon: PartyPopper, image: svcFestHalf, price: "₹600" },
  { icon: Sparkles, image: svcFestFull, price: "₹1200" },
  { icon: Stethoscope, image: svcHospital, price: "₹500" },
  { icon: Ambulance, image: svcOutstation, price: "₹1200" },
];

const ADDON_ICONS = [Accessibility, Users, Clock, Clock];

const WHY_ICONS = [
  ShieldCheck, IndianRupee, Smile, Heart,
  Stethoscope, MessageCircle, Award, Clock,
];

export function useSiteData() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as Array<{ name: string; desc: string; duration: string }>;
  const addons = t("services.addons", { returnObjects: true }) as Array<{ name: string; price: string }>;
  const whys = t("why", { returnObjects: true }) as string[];
  const steps = t("steps", { returnObjects: true }) as Array<{ t: string; d: string }>;
  const testimonials = t("testimonials", { returnObjects: true }) as Array<{ n: string; c: string; q: string }>;
  const faqs = t("faq.items", { returnObjects: true }) as Array<{ q: string; a: string }>;

  return {
    services: items.map((it, i) => ({ ...it, ...SERVICE_META[i] })),
    addons: addons.map((a, i) => ({ ...a, icon: ADDON_ICONS[i] })),
    why: whys.map((label, i) => ({ t: label, icon: WHY_ICONS[i] })),
    steps,
    testimonials,
    faqs,
  };
}

export const heroSlides = [
  { src: heroImage, alt: "Exodus Mobility helpers supporting elderly travelers at a Tamil Nadu railway station" },
  { src: hero2, alt: "Exodus Mobility assistant helping elderly women board a bus in Tamil Nadu" },
  { src: hero3, alt: "Exodus Mobility medical escort accompanying an elderly patient at a hospital" },
];

export const navLinks = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/how-it-works", key: "how" },
  { to: "/booking", key: "booking" },
  { to: "/faq", key: "faq" },
  { to: "/contact", key: "contact" },
] as const;
