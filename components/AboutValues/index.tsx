"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import coreData from "./coreData";
import { motion } from "framer-motion";
import Image from "next/image";
import expertiseData from "./expertiseData";

const AboutValues = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Our Core Values",
              subtitle: "Our Core Values",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {coreData.map((core, key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -10,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5 dark:bg-[#202225]"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#dee7ff]">
                  <Image src={core.icon} width={36} height={36} alt="title" />
                </div>
                <h3 className="mt-7.5 mb-5 text-[24px] font-semibold text-black md:text-[20px] dark:text-white">
                  {core.title}
                </h3>
                <p className="text-[#202225] xl:text-[16px] dark:text-[#999aa1]">
                  {core.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-[80px]"></div>

          <SectionHeader
            headerInfo={{
              title: "Our Expertise",
              subtitle: "Our Expertise",
              description: ``,
            }}
          />

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {expertiseData.map((expertise, key) => (
              <motion.div
                key={key}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -10,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-6 dark:bg-[#202225]"
              >
                <div className="service-image bg-primary relative flex items-center justify-center rounded-[4px]">
                  <Image
                    src={expertise.icon}
                    width={400}
                    height={200}
                    alt="title"
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-7.5 mb-5 text-[22px] font-semibold text-black xl:text-[24px] dark:text-white">
                  {expertise.title}
                </h3>
                <p className="text-[#202225] xl:text-[16px] dark:text-[#999aa1]">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutValues;
