import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import Feature from "@/components/Features";
import HeroAction from "@/components/HeroAction";

export const metadata: Metadata = {
  title: "Hotevance Smart Homes",

  description: `Smart Hospitality Technology for Modern Hotels
Enterprise Wi-Fi • IPTV • VoIP • Automation • Security • GRMS
Delivering World-Class Hotel Solutions Across Nigeria, Africa & Beyond`,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Feature />
      <HeroAction />
      <FAQ />
    </main>
  );
}
