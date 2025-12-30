"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border-y-stroke bg-alabaster dark:border-y-strokedark border border-x-0 py-11 dark:bg-black">
        <div className="mx-auto max-w-[1200px] px-4 pb-[60px] text-center md:px-8 2xl:px-0">
          <h2 className="mt-11 mb-5 text-[34px] font-semibold text-black xl:text-[42px] 2xl:text-[44px] dark:text-white">
            Trusted partners
          </h2>
          <p className="text-[20px]">
            At Hotevance, we collaborate with industry-leading partners to bring
            you the best in smart home technology and services. Our trusted
            partners share our commitment to innovation, quality, and customer
            satisfaction, ensuring that you receive top-notch products and
            solutions. Together, we strive to elevate your living experience
            with cutting-edge technology and exceptional service.
          </p>
        </div>

        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
