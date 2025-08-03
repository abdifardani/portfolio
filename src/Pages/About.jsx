const Aboutpage = () => {
  return (
    <section className="pt-35 pb-20 lg:px-20" id="About">
      <div className="px-6">
        <h1 className="font-light dark:text-white text-black tracking-[1px] md:text-xl lg:text-2xl" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">ABOUT ME</h1>
        <h2 className="font-semibold text-4xl dark:text-white text-[#111827] pr-15 tracking-[2px] mt-2 md:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
          Passionate About Front-End and Technology
        </h2>
        <p className="mt-15 text-sm font-extralight dark:text-[#949494] tracking-[1.5px] lg:tracking-[2.5px] lg:leading-7 lg:font-medium md:text-lg lg:pr-50 lg:text-lg lg:mt-15 text-[#6B7280]" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
          I'm Muhammad Abdi Fardani, an Electrical Engineering student at
          Politeknik Sriwijaya, Palembang. Alongside my studies, I actively
          pursue front-end web development and explore the Internet of Things
          (IoT). 
        </p>
        <p className="mt-4 text-sm font-extralight dark:text-[#949494] text-[#6B7280] tracking-[1.5px] lg:tracking-[2.5px] lg:leading-7 lg:font-medium md:mt-10 md:text-lg lg:pr-50 lg:text-lg lg:mt-15" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
            ith a strong desire to grow, I'm committed to deepening my
          skills in both fields — combining design and logic to create
          meaningful digital experiences.
        </p>
        <div className="flex gap-4 mt-12">
          <a href="cvabdi.jpg" className="w-27 md:w-30 lg:w-33 h-7 md:h-9 lg:h-10 flex justify-center border border-[#2A2A2A] rounded-sm mt-10 relative z-20" 
          data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200" download >
            <button className="cursor-pointer dark:text-white text-[#2563EB] text-xs">Download CV</button>
          </a>
          <a href="#Services" className="w-27 md:w-30 lg:w-33 h-7 md:h-9 lg:h-10 flex justify-center border border-[#2A2A2A] rounded-sm mt-10 relative z-20 pointer-events-auto" 
          data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
            <button className="cursor-pointer dark:text-white text-[#2563EB] text-xs" >My Services</button>
          </a>
        </div>
      <div className="w-full h-[1px] bg-[#2A2A2A] mt-25"></div>
      </div>
    </section>
  );
};

export default Aboutpage;
