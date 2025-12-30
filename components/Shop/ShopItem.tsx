"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ShopItem = (appliance) => {
  return (
    <>
      <motion.div className="animate_top shadow-solid-8 dark:bg-blacksection rounded-lg bg-white p-4 pb-9">
        <Link
          href={`/shop/${appliance.appliance.id}`}
          className="relative block"
        >
          <div className="service-image relative block h-[258px] overflow-hidden">
            <Image
              src={`${appliance.appliance.image}`}
              alt={`${appliance.appliance.name}`}
              className="relative"
              fill
            />
          </div>
          <div className="px-4">
            <h3 className="mt-7.5 mb-3.5 line-clamp-2 block text-lg font-medium text-black duration-300 xl:text-[20px] dark:text-white">
              {appliance.appliance.name}
            </h3>
            {/* <h3 className="mb-3.5 line-clamp-2 block text-lg font-medium text-black duration-300 xl:text-[18px] dark:text-white">
              {appliance.appliance.price}
            </h3> */}
            <p className="line-clamp-3">{appliance.appliance.description}</p>

            <p className="text-primary mt-4 line-clamp-3">
              Click To View Product
            </p>
          </div>
        </Link>
      </motion.div>
    </>
  );
};

export default ShopItem;
