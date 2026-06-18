import {
  Train, Home, MapPin, PartyPopper, Stethoscope, Ambulance,
  ShieldCheck, IndianRupee, Smile, Heart, MessageCircle, Award,
  Clock, Users, Accessibility, Sparkles,
} from "lucide-react";
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

export const services = [
  { icon: Train, image: svcStation, name: "In Railway/Bus Station Assist", desc: "Support inside the station — luggage, boarding, navigation.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: Home, image: svcHome, name: "Home to Railway/Bus Station", desc: "Pickup from home and assisted drop till your boarding point.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: MapPin, image: svcToHome, name: "Railway/Bus Station to Home", desc: "Receive at the platform and safe drop to home address.", price: "₹200", duration: "Up to 2 Hours" },
  { icon: PartyPopper, image: svcFestHalf, name: "Festivity Half Day Assistance", desc: "Temple visits, family functions, festival outings.", price: "₹600", duration: "6 Hours" },
  { icon: Sparkles, image: svcFestFull, name: "Festivity Full Day Assistance", desc: "Full-day support for weddings, ceremonies, gatherings.", price: "₹1200", duration: "12 Hours" },
  { icon: Stethoscope, image: svcHospital, name: "Hospital Visit Assist", desc: "Pickup, OPD assistance and drop — ideal for elderly patients.", price: "₹500", duration: "4 Hours" },
  { icon: Ambulance, image: svcOutstation, name: "Outstation Medical Escort", desc: "Trained escort for outstation medical travel and stays.", price: "₹1200", duration: "per Day" },
];

export const addons = [
  { icon: Accessibility, name: "Wheelchair Assistance", price: "₹50" },
  { icon: Users, name: "Porter Service", price: "Actual Charges" },
  { icon: Clock, name: "After Hours Support", price: "+20%" },
  { icon: Clock, name: "Extra Hours", price: "₹100 / hr" },
];

export const why = [
  { icon: ShieldCheck, t: "Reliable Travel Assistance" },
  { icon: IndianRupee, t: "Affordable Pricing" },
  { icon: Smile, t: "Friendly Helpers" },
  { icon: Heart, t: "Senior Citizen Support" },
  { icon: Stethoscope, t: "Medical Escort Services" },
  { icon: MessageCircle, t: "Easy WhatsApp Booking" },
  { icon: Award, t: "Local Trichy Expertise" },
  { icon: Clock, t: "Fast Response Team" },
];

export const steps = [
  { t: "Choose Your Service", d: "Pick from station assist, hospital visits, festivity or escort services." },
  { t: "Share Travel Details", d: "Send your date, time, pickup, and any special needs over WhatsApp." },
  { t: "Confirm Booking", d: "We confirm availability and lock your slot instantly." },
  { t: "Helper Assigned", d: "A trained helper is assigned and briefed before your service." },
  { t: "Hassle-Free Assistance", d: "Travel with confidence — we handle the rest." },
];

export const testimonials = [
  { n: "Saravanan R.", c: "Trichy", q: "Excellent support at Trichy Railway Station. Very helpful team — handled my elderly father with care." },
  { n: "Lakshmi P.", c: "Srirangam", q: "Used their hospital assistance service for my parents. Highly recommended for senior citizens." },
  { n: "Mohan K.", c: "Tiruchirappalli", q: "Smooth booking process and professional staff. Worth every rupee." },
  { n: "Priya S.", c: "Thillai Nagar", q: "Booked outstation medical escort for my mother. The attendant was kind, punctual and very experienced." },
  { n: "Karthik V.", c: "Srirangam", q: "Helped my parents with festival temple visits. Stress-free and on time, every single stop." },
  { n: "Anitha M.", c: "Cantonment", q: "Quick WhatsApp booking, fair pricing, and a polite helper at the bus station. Highly trustworthy team." },
  { n: "Ramesh N.", c: "Trichy", q: "Used their station-to-home drop service. Felt safe and well looked-after the entire way." },
  { n: "Deepa A.", c: "Woraiyur", q: "Wheelchair assistance at the railway platform was a lifesaver. Will definitely book again." },
];

export const heroSlides = [
  { src: heroImage, alt: "TN45 helpers supporting elderly travelers at a Tamil Nadu railway station" },
  { src: hero2, alt: "TN45 assistant helping elderly women board a bus in Tamil Nadu" },
  { src: hero3, alt: "TN45 medical escort accompanying an elderly patient at a hospital" },
];

export const faqs = [
  { q: "What areas do you serve?", a: "We primarily serve Tiruchirappalli (Trichy) and surrounding areas in Tamil Nadu, including outstation medical escort across the state." },
  { q: "How do I book a service?", a: "The fastest way is WhatsApp at +91 96554 51299. You can also call +91 94866 42242 or use the booking form on this site." },
  { q: "Can I request wheelchair assistance?", a: "Yes. Wheelchair assistance is available as an add-on for ₹50 and can be requested at the time of booking." },
  { q: "Do you provide medical escorts?", a: "Yes — trained medical escorts for hospital visits and outstation medical travel at ₹1200 per day." },
  { q: "How are payments handled?", a: "Payments are confirmed at the time of booking via UPI, cash or bank transfer. Details shared on WhatsApp." },
  { q: "What if my travel schedule changes?", a: "Just message us on WhatsApp — we offer flexible rescheduling subject to helper availability." },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/booking", label: "Booking" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
