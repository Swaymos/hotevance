import { homeApplicances } from "@/app/data/homeAppliance";
import ShopItem from "@/components/Shop/ShopItem";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Buy Smart Home Appliances Online – Easy, Fast & Affordable",

  // other metadata
  description:
    "Discover top-quality smart home appliances that combine style, efficiency, and innovation. Shop online for the best deals on smart plugs, speakers, locks, and more.",
};

const Shop = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="md:h-[650px]overflow-hidden relative bg-[#ffffff] pt-55 pb-20 md:pt-40 xl:h-[500px] xl:pt-50 xl:pb-66 dark:bg-[#202225]">
        <div className="max-w-c-1390 relative z-10 mx-auto px-4 md:px-[110px] 2xl:px-0">
          <h4 className="mb-4.5 text-center text-[36px] font-light text-[#202020] md:text-[60px] xl:text-[68px] dark:text-[#ffffff] dark:text-white">
            Shop Hotevance.
          </h4>
        </div>
        <Image
          src="/images/hero/hero.jpg"
          alt="Cover Image"
          className="absolute top-[-100px] mx-auto opacity-20 min-[1920px]:w-[100vw]"
          fill
        />
      </section>
      <section className="py-20 lg:py-25 xl:py-10">
        <div className="max-w-c-1280 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {homeApplicances.map((item, key) => (
              <ShopItem key={key} appliance={item} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default Shop;
