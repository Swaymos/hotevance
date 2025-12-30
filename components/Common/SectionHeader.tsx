"use client";
import { motion } from "framer-motion";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        <div className="bg-zumthor dark:border-strokedark mb-4 inline-block rounded-full px-4.5 py-1.5 dark:border dark:bg-[#202225]">
          <span className="text-[14px] font-medium text-black dark:text-white">
            {title}
          </span>
        </div>
        <h2 className="mx-auto mb-4 text-3xl font-bold text-black md:w-4/5 xl:w-1/2 xl:text-[30px] dark:text-white">
          {subtitle}
        </h2>
        <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] xl:text-[18px]">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
