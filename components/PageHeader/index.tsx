import Image from "next/image";

const PageHeader = ({ PageTitle }) => {
  return (
    <>
      <section className="md:h-[650px]overflow-hidden relative bg-[#ffffff] pt-55 pb-20 md:pt-40 xl:h-[500px] xl:pt-50 xl:pb-66 dark:bg-[#202225]">
        <div className="max-w-c-1390 relative z-10 mx-auto px-4 md:px-[110px] 2xl:px-0">
          <h4 className="mb-4.5 text-center text-[36px] font-light text-[#202020] md:text-[60px] xl:text-[68px] dark:text-[#ffffff] dark:text-white">
            {PageTitle}
          </h4>
        </div>
        <Image
          src="/images/hero/hero.jpg"
          alt="Cover Image"
          className="absolute top-[-100px] mx-auto opacity-20 min-[1920px]:w-[100vw]"
          fill
        />
      </section>
    </>
  );
};

export default PageHeader;
