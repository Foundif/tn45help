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

export type ServiceItem = { name: string; desc: string; duration: string; icon: typeof Train; image: string; price: string };
export type AddonItem = { name: string; price: string; icon: typeof Accessibility };
export type WhyItem = { t: string; icon: typeof ShieldCheck };
export type StepItem = { t: string; d: string };
export type Testimonial = { n: string; c: string; q: string };
export type FaqItem = { q: string; a: string };

import i18nInstance from "@/lib/i18n";

function arr<T>(t: (k: string, o?: unknown) => unknown, key: string): T[] {
  const v = t(key, { returnObjects: true });
  if (Array.isArray(v)) return v as T[];
  // Fallback: read directly from the English resource bundle.
  const fallback = i18nInstance.getResource("en", "translation", key);
  return Array.isArray(fallback) ? (fallback as T[]) : [];
}

export function useSiteData() {
  const { t } = useTranslation();
  const items = arr<{ name: string; desc: string; duration: string }>(t, "services.items");
  const addons = arr<{ name: string; price: string }>(t, "services.addons");
  const whys = arr<string>(t, "why");
  const steps = arr<StepItem>(t, "steps");
  const testimonials = arr<Testimonial>(t, "testimonials");
  const faqs = arr<FaqItem>(t, "faq.items");

  return {
    services: items.map((it, i) => ({ ...it, ...SERVICE_META[i] })) as ServiceItem[],
    addons: addons.map((a, i) => ({ ...a, icon: ADDON_ICONS[i] })) as AddonItem[],
    why: whys.map((label, i) => ({ t: label, icon: WHY_ICONS[i] })) as WhyItem[],
    steps,
    testimonials,
    faqs,
  };
}

// Static English fallback for SEO/schema.org at module-load time
export const faqsEN: FaqItem[] = [
  { q: "What areas do you serve?", a: "We primarily serve Tiruchirappalli (Trichy) and surrounding areas in Tamil Nadu, including outstation medical escort across the state." },
  { q: "How do I book a service?", a: "The fastest way is WhatsApp at +91 96554 51299. You can also call +91 94866 42242 or use the booking form on this site." },
  { q: "Can I request wheelchair assistance?", a: "Yes. Wheelchair assistance is available as an add-on for ₹50 and can be requested at the time of booking." },
  { q: "Do you provide medical escorts?", a: "Yes — trained medical escorts for hospital visits and outstation medical travel at ₹1200 per day." },
  { q: "How are payments handled?", a: "Payments are confirmed at the time of booking via UPI, cash or bank transfer. Details shared on WhatsApp." },
  { q: "What if my travel schedule changes?", a: "Just message us on WhatsApp — we offer flexible rescheduling subject to helper availability." },
];

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
