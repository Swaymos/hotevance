import { serviceData } from "@/app/data/serviceData";
import HeroAction from "@/components/HeroAction";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const currentService =
    serviceData.find((item, index) => item.id === +id) || null;

  return currentService ? (
    <>
      <PageHeader PageTitle={currentService?.title} />
      <section className="pb-20 lg:pt-45 lg:pb-25 xl:pt-10 xl:pb-30">
        <div className="">
          <div className="flex justify-center">
            <div className="lg:w-2/3">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden"></div>

                <h2 className="mt-11 mb-5 text-3xl font-semibold text-black 2xl:text-[40px] dark:text-white">
                  {currentService?.title}
                </h2>

                <div>
                  <p className="mt-11 mb-5 text-black xl:text-[18px] dark:text-white">
                    {currentService?.description}
                  </p>
                </div>
                <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                  {currentService?.target.map((target, item) => (
                    <div
                      key={item}
                      className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5 dark:bg-[#202225]"
                    >
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#eff2f7]">
                        <Image
                          src={currentService.image}
                          width={36}
                          height={36}
                          alt="title"
                        />
                      </div>
                      <h3 className="mt-7.5 mb-5 text-[24px] font-semibold text-black md:text-[20px] dark:text-white">
                        {target}
                      </h3>
                    </div>
                  ))}
                </div>
                {currentService?.benefits.length === 0 ? (
                  <></>
                ) : (
                  <>
                    {" "}
                    <div>
                      <p className="mt-11 mb-5 text-black xl:text-[18px] dark:text-white">
                        We serve the following sectors:
                      </p>
                    </div>
                  </>
                )}

                <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                  {currentService?.benefits.map((benefit, item) => (
                    <div className="flex justify-center">
                      <div
                        key={item}
                        className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5 dark:bg-[#202225]"
                      >
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-[#eff2f7]">
                          <Image
                            src={currentService.image2}
                            width={36}
                            height={36}
                            alt="title"
                          />
                        </div>
                        <h3 className="mt-7.5 mb-5 text-[24px] font-semibold text-black md:text-[20px] dark:text-white">
                          {benefit}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-6 xl:mt-10">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=+2347063830062&text=Hello!%20I%20would%20Like%20To%20Hire%20Your%20Service"
                    className="bg-primary text-regular hover:bg-primaryho flex items-center justify-center rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out"
                  >
                    Hire For Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroAction />;
    </>
  ) : (
    <section className="flex h-[700px] items-center pb-20 lg:pt-45 lg:pb-25 xl:pt-80 xl:pb-30">
      <div className="max-w-c-800 mx-auto flex items-center px-4 md:px-8 2xl:px-0">
        <div className="w-[100%] text-center">
          <Image
            src={`/images/shape/404.svg`}
            alt={`404`}
            width={300}
            height={300}
            className="m-auto block rounded-md py-6"
          />
          <p className="mb-5 mb-6 block text-center text-black xl:text-[18px] dark:text-white">
            Opps! Something happened and the page was not loaded
          </p>
          <Link
            href="/shop/"
            className="bg-primary text-regular hover:bg-primaryho inline-flex items-center justify-center rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out"
          >
            Shop Hotevance
          </Link>
        </div>
      </div>
    </section>
  );
}
