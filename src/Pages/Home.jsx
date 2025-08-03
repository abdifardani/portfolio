const Homepage = () => {
  return (
    <section className={`pt-32 xl:pt-35 px-6 lg:px-25 pb-30`}>
      <div>
        <div className="flex gap-3 items-center">
          <img src="main.png" alt="" className="w-18 h-18 xl:w-22 xl:h-22 rounded-full bg-red-800" />
          <div className="mt-0.5">
            <h1 className="dark:text-[#F9FAFB] font-semibold xl:text-lg">Muhammad Abdi Fardani</h1>
            <p className="dark:text-[#9CA3AF] xl:text-lg">Web Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap xl:mt-6 xl:h-full gap-4">
          <div className="w-full xl:w-full box-border xl:order- relative">
            <div className="mt-20 xl:mt-25">
              <h1 className="dark:text-white text-[#374151] text-2xl font-light sm:text-3xl xl:text-4xl" data-aos="fade-up" data-aos-duration="1200" data-aos-offset="50" data-aos-delay="100">Hi, I'm Abdi</h1>
              <h2 className="dark:text-white text-[#374151] mt-1 text-[23px] font-light sm:text-4xl xl:text-6xl xl:mt-4 " data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                Full-Stack Developer | IOT Developer
              </h2>
              <p className="dark:text-[#D1D5DB] text-[#374151] mt-6 tracking-[2px] leading-[25px] xl:leading-[30px] sm:pr-20 sm:text-sm lg:text-base lg:pr-40 xl:pr-60 font-extralight text-xs xl:text-lg xl:mt-10 xl:tracking-[5px]" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                I’m Muhammad Abdi Fardani, a Junior Web Developer with a passion
                for IoT and Data Analysis. I focus on building smart, efficient,
                and user-oriented digital solutions.
              </p>
            </div>
          </div>

          <div className="relative xl:w-full box-border xl:order-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div className="h-70 sm:h-90 md:h-120 xl:h-150 w-full relative mt-20 rounded-[5px] border-2 border-[#2A2A2A] z-10 overflow-hidden dark:bg-[#1E1E1E] bg-[#E5E7EB]">
              <div className="">
                <img
                  src="mainport.png"
                  alt=""
                  className=" -mt-20 scale-75 sm:-mt-25 sm:scale-75 md:-mt-40 xl:scale-60 xl:-mt-46"
                />
              </div>
            </div>
            <div className="absolute rounded-xs right-0 bottom-0 px-2 py-1 bg-[#0f0f0f] rounded-tl-[5px] z-20 border-t-[#2A2A2A] border-t-2 border-l-2 border-l-[#2A2A2A]">
              <h1 className="text-white text-sm">Muhammad Abdi Fardani</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
