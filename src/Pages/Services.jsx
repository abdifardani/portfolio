const Servicespage = () => {
  return (
    <section className="" id="Services">
      <div className="pt-30 pb-30">
        <h1 className="dark:text-white text-black text-center font-semibold text-2xl">
          What I Offer?
        </h1>
        <p className="text-center font-light text-[13px] px-10 text-neutral-600 dark:text-white mt-4 tracking-[1px]">
          I help businesses and individuals enhance their digital presence with
          custom, elegant solutions tailored to their goals.{" "}
        </p>

        <div className="mt-18 flex flex-wrap justify-center gap-8">
          <div className="py-4 px-9 w-9/10 lg:w-100 dark:bg-[#1C1C1C] bg-[#e0e0e0] rounded-md">
            <h1 className="font-semibold text-xl dark:text-white text-gray-800">
              Elegant Landing Page
            </h1>
            <p className="mt-6 text-neutral-600 dark:text-white text-xs text-light tracking-[1px] leading-[20px]">
              Custom-crafted landing pages built for conversion, optimized for
              mobile, and styled with a cleaKn, professional aesthetic. Ideal
              for brands, products, or personal portfolios.
            </p>
            <a
              href={import.meta.env.VITE_APP_SERVICE_LANDINGPAGE_URI}
              target="_blank"
              className="bg-[#0f0f0f] rounded-md p-1 w-30 block mt-6 cursor-pointer"
            >
              <button className="mx-auto text-white w-full cursor-pointer">
                Let's Connect
              </button>
            </a>
          </div>
          <div className="py-4 px-9 w-9/10 lg:w-100 dark:bg-[#1C1C1C] bg-[#e0e0e0] rounded-md">
            <h1 className="font-semibold text-xl dark:text-white text-gray-800">
              UI to Code Implementation
            </h1>
            <p className="mt-6 dark:text-white text-xs text-light text-neutral-600 tracking-[1px] leading-[20px]">
              I help bring your designs to life by converting Figma or other
              design files into clean, responsive, and developer-friendly code
              using HTML, Tailwind CSS, or React. Perfect for designers,
              startups, or teams who want pixel-perfect implementation with
              modern frontend best practices.
            </p>
            <a
              href={import.meta.env.VITE_APP_SERVICE_UICODE_URI}
              target="_blank"
              className="bg-[#0f0f0f] rounded-md p-1 w-30 block mt-6 cursor-pointer"
            >
              <button className="mx-auto text-white w-full cursor-pointer">
                Let's Connect
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicespage;
