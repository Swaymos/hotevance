"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="md:h-[650px]overflow-hidden relative bg-[#222222] pt-55 pb-20 md:pt-40 xl:h-[700px] xl:pt-56 xl:pb-66">
        <div className="max-w-c-1390 relative z-10 mx-auto px-4 md:px-[110px] 2xl:px-0">
          <h4 className="mb-4.5 text-center text-[22px] font-light text-[#ffffff] md:text-[20px] xl:text-[26px]">
            Hotevance Limited
          </h4>
          <h4 className="mb-4.5 text-center text-[34px] font-light text-[#ffffff] md:text-[42px] xl:text-[42px]">
            Smart Hospitality Technology for Modern Hotels Enterprise Wi-Fi •
            IPTV • VoIP • Automation • Security • GRMS Delivering World-Class
            Hotel Solutions Across Nigeria, Africa & Beyond
          </h4>

          <div className="flex justify-center py-[20px]">
            <Link
              href="https://api.whatsapp.com/send/?phone=+2347063830062&text=Hello!%20I%20would%20Like%20To%20Hire%20Your%20Service"
              className="bg-primary text-regular hover:bg-primaryho inline-flex items-center justify-center rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out"
            >
              Get Started
            </Link>

            <Link
              href="https://api.whatsapp.com/send/?phone=+2347063830062&text=Hello!%20I%20would%20Like%20To%20Request%20A%20Proposal"
              className="text-regular ml-[10px] inline-flex items-center justify-center rounded-full bg-[#fff] px-7.5 py-2.5 text-[#222] duration-300 ease-in-out hover:bg-[#ffffffbf]"
            >
              Request A Proposal
            </Link>
          </div>
        </div>

        <video
          className="absolute top-[-160px] mx-auto opacity-10 min-[1920px]:w-[100vw]"
          width="100%"
          height="100%"
          autoPlay
          loop
          playsInline
          preload="none"
          muted
        >
          <source src="/images/bg-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};

export default Hero;
