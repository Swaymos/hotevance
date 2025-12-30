import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import LearnMore from "@/components/LearnMore";
import AboutValues from "@/components/AboutValues";

export const metadata: Metadata = {
  title: "Hotevance Smart Homes",

  description: `About Hotevance`,
};

export default function AboutUs() {
  return (
    <main>
      <PageHeader PageTitle="About Hotevance" />

      <LearnMore />
      <AboutValues />

      <section className="md:h-[650px]overflow-hidden relative bg-[#ffffff] pt-35 pb-20 md:pt-40 xl:h-[500px] xl:pt-30 xl:pb-66 dark:bg-[#202225]">
        <div className="max-w-c-1390 flex-center relative z-10 mx-auto px-4 md:px-[110px] 2xl:px-0">
          <h4 className="mb-4.5 text-center text-[36px] font-light text-[#202020] md:text-[50px] xl:text-[50px] dark:text-[#ffffff] dark:text-white">
            Our Promise
          </h4>
          <p className="mx-auto max-w-[800px] text-center text-[22px] font-light text-[#202020] dark:text-[#ffffff] dark:text-white">
            At Hotevance, we go beyond installation. We build trust, security,
            and unforgettable experiences for guests while enabling businesses
            to operate at peak efficiency. Whether it’s a luxury hotel, a smart
            condominium, or a corporate facility, our solutions deliver
            performance, elegance, and reliability—every time.
          </p>
        </div>
        <Image
          src="/images/hero/hero.jpg"
          alt="Cover Image"
          className="absolute top-[-100px] mx-auto opacity-20 min-[1920px]:w-[100vw]"
          fill
        />
      </section>
    </main>
  );
}
