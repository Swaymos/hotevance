import { homeApplicances } from "@/app/data/homeAppliance";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const currentHomeAppliances =
    homeApplicances.find((item) => item.id === id) || null;

  return currentHomeAppliances ? (
    <>
      <PageHeader PageTitle={currentHomeAppliances?.name} />
      <section className="pb-20 lg:pt-45 lg:pb-25 xl:pt-10 xl:pb-30">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex justify-center">
            <div className="lg:w-2/3">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={`${currentHomeAppliances?.image}`}
                      alt={`${currentHomeAppliances?.name}`}
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mt-11 mb-5 text-3xl font-semibold text-black 2xl:text-[40px] dark:text-white">
                  {currentHomeAppliances?.name}
                </h2>

                {/* <h3 className="mb-5 text-3xl font-semibold text-black 2xl:text-[30px] dark:text-white">
                  {currentHomeAppliances?.price}
                </h3> */}

                <div>
                  <p className="mt-11 mb-5 text-black xl:text-[18px] dark:text-white">
                    {currentHomeAppliances?.description}
                  </p>
                </div>

                <div className="mt-11 border-3 border-[#006bff] p-[20px] pb-[6px]">
                  <h3 className="mb-5 text-[28px] font-semibold text-black 2xl:text-[20px] dark:text-white">
                    Ready to Upgrade Your Home?
                  </h3>

                  <p className="mb-5 text-black xl:text-[18px] dark:text-white">
                    Send us a message on WhatsApp to place your order instantly.
                    Click the Whatsapp icon to chat — fast, easy, and secure!
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-6 xl:mt-10">
                  <Link
                    href="https://api.whatsapp.com/send/?phone=+2347063830062&text=Hello!%20I%20would%20Like%20To%20Place%20An%20Order"
                    className="bg-primary text-regular hover:bg-primaryho flex items-center justify-center rounded-full px-7.5 py-2.5 text-white duration-300 ease-in-out"
                  >
                    Buy Product Using Whatsapp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsapp product={currentHomeAppliances?.name} />
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
