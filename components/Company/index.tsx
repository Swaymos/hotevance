"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Company = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pt-30 md:pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <Image
                src="/images/hero/deco.jpg"
                alt="About"
                width={400}
                height={200}
                className="visible md:hidden"
              />
              <h2 className="mt-11 mb-5 text-[34px] font-semibold text-black md:text-[36px] 2xl:text-[44px] dark:text-white">
                Shaping o​ur fut​ure
              </h2>
              <p className="text-[20px]">
                At Novelty, we are passionate about transforming living spaces
                with cutting-edge smart home technology and exceptional
                services. Founded with a vision to redefine modern living, we
                specialize in providing high-end customers with innovative
                solutions that enhance comfort, security, and efficiency.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image src="/images/hero/deco.jpg" alt="About" fill />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
