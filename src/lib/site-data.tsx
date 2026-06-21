import {
  Train, Home, MapPin, PartyPopper, Stethoscope, Ambulance,
  ShieldCheck, IndianRupee, Smile, Heart, MessageCircle, Award,
  Clock, Users, Accessibility, Sparkles, Plane,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImageAsset from "@/assets/hero-illustration.jpg.asset.json";
import hero2Asset from "@/assets/hero-2.jpg.asset.json";
import hero3Asset from "@/assets/hero-3.jpg.asset.json";
import svcStationAsset from "@/assets/svc-station-assist.jpg.asset.json";
import svcStation2Asset from "@/assets/svc-station-assist-2.jpg.asset.json";
import svcHomeAsset from "@/assets/svc-home-to-station.jpg.asset.json";
import svcToHomeAsset from "@/assets/svc-station-to-home.jpg.asset.json";
import svcFestHalfAsset from "@/assets/svc-festival-half.jpg.asset.json";
import svcFestFullAsset from "@/assets/svc-festival-full.jpg.asset.json";
import svcHospitalAsset from "@/assets/svc-hospital.jpg.asset.json";
import svcOutstationAsset from "@/assets/svc-outstation.jpg.asset.json";
import svcFlight1Asset from "@/assets/svc-flight-1.jpg.asset.json";
import svcFlight2Asset from "@/assets/svc-flight-2.jpg.asset.json";

const heroImage = heroImageAsset.url;
const hero2 = hero2Asset.url;
const hero3 = hero3Asset.url;

// SERVICE_META: images is an ordered list (cards with >1 image render a carousel).
const SERVICE_META = [
  { icon: Train, images: [svcStationAsset.url, svcStation2Asset.url], price: "₹200" },
  { icon: Home, images: [svcHomeAsset.url], price: "₹200" },
  { icon: MapPin, images: [svcToHomeAsset.url], price: "₹200" },
  { icon: PartyPopper, images: [svcFestHalfAsset.url], price: "₹600" },
  { icon: Sparkles, images: [svcFestFullAsset.url], price: "₹1,200" },
  { icon: Stethoscope, images: [svcHospitalAsset.url], price: "₹500" },
  { icon: Ambulance, images: [svcOutstationAsset.url], price: "₹1,200" },
  { icon: Plane, images: [svcFlight1Asset.url, svcFlight2Asset.url], price: "₹300" },
];

const ADDON_ICONS = [Accessibility, Users, Clock, Clock];

const WHY_ICONS = [
  ShieldCheck, IndianRupee, Smile, Heart,
  Stethoscope, MessageCircle, Award, Clock,
];

export type ServiceItem = {
  name: string; desc: string; duration: string;
  icon: typeof Train; images: string[]; image: string; price: string;
};
export type AddonItem = { name: string; price: string; icon: typeof Accessibility };
export type WhyItem = { t: string; icon: typeof ShieldCheck };
export type StepItem = { t: string; d: string };
export type Testimonial = { n: string; c: string; q: string };
export type FaqItem = { q: string; a: string };

import i18nInstance from "@/lib/i18n";

function arr<T>(key: string, lng?: string): T[] {
  const v = i18nInstance.t(key, { returnObjects: true, lng });
  if (Array.isArray(v)) return v as T[];
  const fallback = i18nInstance.getResource("en", "translation", key);
  return Array.isArray(fallback) ? (fallback as T[]) : [];
}

export function useSiteData() {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const items = arr<{ name: string; desc: string; duration: string }>("services.items", lng);
  const addons = arr<{ name: string; price: string }>("services.addons", lng);
  const whys = arr<string>("why", lng);
  const steps = arr<StepItem>("steps", lng);
  const testimonials = arr<Testimonial>("testimonials", lng);
  const faqs = arr<FaqItem>("faq.items", lng);

  return {
    services: items.map((it, i) => {
      const meta = SERVICE_META[i] ?? SERVICE_META[0];
      return { ...it, ...meta, image: meta.images[0] };
    }) as ServiceItem[],
    addons: addons.map((a, i) => ({ ...a, icon: ADDON_ICONS[i % ADDON_ICONS.length] })) as AddonItem[],
    why: whys.map((label, i) => ({ t: label, icon: WHY_ICONS[i] })) as WhyItem[],
    steps,
    testimonials,
    faqs,
  };
}

export const faqsEN: FaqItem[] = [
  { q: "What areas do you serve?", a: "We primarily serve Tiruchirappalli (Trichy) and surrounding areas in Tamil Nadu, including outstation medical escort across the state." },
  { q: "How do I book a service?", a: "The fastest way is WhatsApp at +91 96554 51299. You can also call +91 94866 42242 or use the booking form on this site." },
  { q: "Can I request wheelchair assistance?", a: "Yes. Wheelchair assistance is available as an add-on for ₹50 and can be requested at the time of booking." },
  { q: "Do you provide medical escorts?", a: "Yes — trained medical escorts for hospital visits and outstation medical travel at ₹1200 per day." },
  { q: "How are payments handled?", a: "₹200 advance confirms your slot (₹600 for outstation). Balance after service via UPI, cash or bank transfer." },
  { q: "What if my travel schedule changes?", a: "Just message us on WhatsApp — we offer flexible rescheduling subject to helper availability." },
];

export const heroSlides = [
  { src: heroImage, alt: "TN45 Travel Company helpers supporting elderly travelers at a Tamil Nadu railway station" },
  { src: hero2, alt: "TN45 Travel Company assistant helping elderly women board a bus in Tamil Nadu" },
  { src: hero3, alt: "TN45 Travel Company medical escort accompanying an elderly patient at a hospital" },
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
