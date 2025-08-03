import { Link } from "react-router-dom";

const Dataanalyst = () => {
  return (
   <section className=" bg-[#0f0f0f] pt-30 px-6 pb-25 h-screen relative" id="Project">
        <div>
            <h1 className="text-center text-white font-medium tracking-[1px] text-xl">SELECTED DATA ANALYST PROJECT</h1>
            <p className="text-center font-light mt-1 text-white">Here's All Of My Data Analyst Project</p>

            <div className="flex justify-center flex-wrap mt-20 gap-10">
                <Link to="/frontend" className="w-100 bg-[#1C1C1C] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 active:scale-90">
                <div className="w-full">
                    <img src="codingproject.jpg" alt="" />
                </div>
                    <div className="mt-2 p-2">
                        <h1 className="text-white">Front-End Project</h1>
                        <p className="text-sm mt-1 font-extralight tracking-[1px] text-white">All of My Front-end Website Projet</p>
                    </div>
                </Link>
            </div>
        </div>

            <Link to="/" className="bg-white ml-6 absolute bottom-10 px-3 py-1 rounded-md">
                <button className="text-black font-medium cursor-pointer">
                    Kembali
                </button>
            </Link>
    </section>
  );
};

export default Dataanalyst;
