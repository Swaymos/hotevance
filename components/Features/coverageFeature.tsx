import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const CoverageFeature = ({ feature }) => {
  const { icon, title } = feature;

  return (
    <>
      <motion.div
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
        className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 text-center transition-all xl:p-12.5 dark:bg-[#202225]"
      >
        <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#f5f7fa]">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mt-7.5 mb-5 text-[24px] font-semibold text-black md:text-[20px] dark:text-white">
          {title}
        </h3>
      </motion.div>
    </>
  );
};

export default CoverageFeature;
