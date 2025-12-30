"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = (appliance) => {
  return (
    <>
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top shadow-solid-8 dark:bg-blacksection rounded-lg bg-white p-4 pb-9"
      >
        <Link href={`/shop/${appliance.blog.id}`} className="relative block">
          <div className="bg-blacksection relative block h-[250px] overflow-hidden">
            <Image
              src={`/images/shop/${appliance.blog.id}.jpg`}
              alt={`${appliance.blog.name}`}
              className="relative"
              width={400}
              height={80}
            />
          </div>
          <div className="px-4">
            <h3 className="mt-7.5 mb-3.5 line-clamp-2 block text-lg font-medium text-black duration-300 xl:text-[20px] dark:text-white">
              {appliance.blog.name}
            </h3>
            <h3 className="mb-3.5 line-clamp-2 block text-lg font-medium text-black duration-300 xl:text-[18px] dark:text-white">
              {appliance.blog.price}
            </h3>
            <p className="line-clamp-3">{appliance.blog.description}</p>

            <p className="text-primary mt-4 line-clamp-3">
              Click To View Product
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default BlogItem;
