import { Link } from "react-router-dom";

const Portfoliopage = () => {
  return (
    <section className=" pt-30 px-6 pb-25" id="Project">
      <div>
        <h1 className="text-center dark:text-white text-black font-medium tracking-[1px] text-xl">
          SELECTED PROJECT
        </h1>
        <div className="flex justify-center flex-wrap mt-20 gap-10">
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1200"
            data-aos-offset="200"
          >
            <Link
              to="/frontend"
              className="md:w-100 bg-[#1C1C1C] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 will-change-transform active:scale-90 block"
            >
              <div className="w-full">
                <img src="codingproject.jpg" alt="" />
              </div>
              <div className="mt-2 p-2">
                <h1 className="text-white">Front-End Project</h1>
                <p className="text-sm mt-1 font-extralight tracking-[1px] text-white">
                  All of My Front-end Website Projet
                </p>
              </div>
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1200"
            data-aos-offset="200"
            data-aos-delay="200"
          >
            <Link
              to="/iot"
              className="md:w-100 bg-[#1C1C1C] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 will-change-transform active:scale-90 block"
            >
              <div className="w-full">
                <img src="iotproject.jpg" alt="" />
              </div>
              <div className="mt-2 p-2">
                <h1 className="text-white">IOT Project</h1>
                <p className="text-sm mt-1 font-extralight tracking-[1px] text-white">
                  All of My IOT Projet
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfoliopage;
