const Homepage = () => {
  return (
    <section className={`pt-32 xl:pt-35 px-6 lg:px-25 pb-30`}>
      <div>
        <div className="flex gap-3 items-center">
          <img
            src="main.png"
            alt=""
            className="w-18 h-18 xl:w-22 xl:h-22 rounded-full bg-red-800"
          />
          <div className="mt-0.5">
            <h1 className="dark:text-[#F9FAFB] font-semibold xl:text-lg">
              Muhammad Abdi Fardani
            </h1>
            <p className="dark:text-[#9CA3AF] xl:text-lg">Web Developer</p>
          </div>
        </div>
        <div className="flex flex-wrap xl:mt-6 xl:h-full gap-4">
          <div className="w-full xl:w-full box-border xl:order- relative">
            <div className="mt-20 xl:mt-25">
              <h1
                className="dark:text-white text-[#374151] text-2xl font-light sm:text-3xl xl:text-4xl"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-offset="50"
                data-aos-delay="100"
              >
                Hi, I'm Abdi
              </h1>
              <h2
                className="dark:text-white text-[#374151] mt-1 text-[23px] font-light sm:text-4xl xl:text-6xl xl:mt-4 "
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                Full-Stack Developer | IOT Developer
              </h2>
              <p
                className="dark:text-[#D1D5DB] text-[#374151] mt-6 tracking-[2px] leading-[25px] xl:leading-[30px] sm:pr-20 sm:text-sm lg:text-base lg:pr-40 xl:pr-60 font-extralight text-xs xl:text-lg xl:mt-10 xl:tracking-[5px]"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                I’m Muhammad Abdi Fardani, a Junior Web Developer with a passion
                for IoT. I focus on building smart, efficient, and user-oriented
                digital solutions.
              </p>
            </div>
          </div>

          <div className="w-full h-auto dark:bg-[#1E1E1E] bg-[#E5E7EB] relative mt-10 rounded-2xl">
            <div className="w-full h-100 lg:h-120 flex justify-center items-center relative overflow-hidden">
              <img src="mainport.png" alt="" width="" className="h-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
