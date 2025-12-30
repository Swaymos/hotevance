import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleService = ({ service }: { service: Feature }) => {
  const { icon, title, description } = service;

  return (
    <>
      <Link href={`/service/${service.id}`}>
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
          className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-6 dark:bg-[#202225]"
        >
          <div className="service-image bg-primary relative flex items-center justify-center rounded-[4px]">
            <Image
              src={icon}
              width={400}
              height={200}
              alt="title"
              objectFit="cover"
            />
          </div>
          <h3 className="mt-7.5 mb-5 text-[22px] font-semibold text-black xl:text-[24px] dark:text-white">
            {title}
          </h3>
          <p className="text-[#202225] xl:text-[16px] dark:text-[#999aa1]">
            {description}
          </p>
        </motion.div>
      </Link>
    </>
  );
};

export default SingleService;
