"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pt-30 pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              <Image
                src="/images/hero/deco.jpg"
                alt="About"
                className="dark:block"
                fill
              />
            </motion.div>
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
              <h2 className="mt-11 mb-5 text-[32px] font-semibold text-black md:text-[36px] xl:text-[44px] dark:text-white">
                Who We Are
              </h2>
              <p className="text-[20px]">
                Hotevance Limited is a leading hospitality technology and hotel
                automation company based in Abuja, Nigeria. We design, deploy,
                and support high-performance hotel systems that elevate guest
                experience, reduce operational cost, and improve hotel
                efficiency.
              </p>
              <p className="mt-[16px] text-[20px]">
                Our solutions are trusted across Nigeria, West Africa, and
                globally by hotels, resorts, serviced apartments, developers,
                and construction companies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
