"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LearnMore = () => {
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
                Hotevance Limited is a hospitality technology, hotel automation,
                and smart building solutions provider delivering modern systems
                that empower hotels to operate efficiently and improve guest
                satisfaction.
              </p>
              <p className="mt-[16px] text-[20px]">
                We specialize in designing and integrating Wi-Fi, IPTV, VoIP,
                GRMS, automation, digital signage, access control, and security
                systems.
              </p>

              <p className="mt-[16px] text-[20px]">
                Founded in Abuja, Nigeria, Hotevance has grown to serve clients
                across Africa—providing world-class solutions designed for the
                unique needs of the African hospitality industry.
              </p>

              <h2 className="mt-11 mb-5 text-[26px] font-semibold text-black md:text-[26px] xl:text-[26px] dark:text-white">
                Our Vision
              </h2>
              <p className="text-[20px]">
                To become Africa’s leading hotel technology company, enabling
                hotels to operate smarter, faster, and more efficiently.
              </p>

              <h2 className="mt-11 mb-5 text-[26px] font-semibold text-black md:text-[26px] xl:text-[26px] dark:text-white">
                Our Mission
              </h2>
              <p className="text-[20px]">
                To deliver modern, scalable, and affordable hospitality
                technology solutions that improve guest experience and hotel
                operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
