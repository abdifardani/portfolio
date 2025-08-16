const NewAbout = () => {
  return (
    <section
      className="pb-20 px-10 pt-52 
    "
    >
      <div className="">
        <div className=" flex flex-wrap justify-around">
          <div className="rounded-xl w-full p-5 bg-backgruond-card lg:w-1/3">
            <h1 className="text-white text-xl">- About</h1>
            <div>
              <div className="bg-backgruond-card w-20 h-20 border-3 rounded-full border-border-gold overflow-hidden mt-12">
                <img src="mainport.png" alt="" className="ml-1"/>
              </div>
              <div className="mt-4">
                <h1 className="font-semibold text-white text-lg">
                  Web Developer
                </h1>
                <p className="text-sm text-white">
                  Experience in Developing responsive and user-friendly websites
                  using moden web technologies
                </p>
              </div>
            </div>
            <div className="mt-15">
              <div className="flex items-center justify-between">
                <p className="text-white text-semibold text-xl">React JS</p>
                <div className="h-18 w-18 rounded-full bg-border-gold flex justify-center items-center">
                  <div className="w-[95%] bg-backgruond-card h-[95%] rounded-full flex justify-center items-center">
                    <p className="font-semibold text-lg text-white">100%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-white text-semibold text-xl">Node JS</p>
                <div className="h-18 w-18 rounded-full bg-border-gold flex justify-center items-center relative">
                  <div className="absolute w-10 h-17 rounded-tl-2xl left-3.5 bg-white rounded-r-full rotate-90 -bottom-3.5 z-10"></div>
                  <div className="w-[95%] z-20 bg-backgruond-card h-[95%] rounded-full relative flex justify-center items-center">
                    <p className="font-semibold text-lg text-white">70%</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-white text-semibold text-xl">Python</p>
                <div className="h-18 w-18 rounded-full bg-border-gold flex justify-center items-center relative">
                  <div className="absolute w-10 h-17 rounded-tl-2xl left-3.5 bg-white rounded-r-full rotate-90 -bottom-3.5 z-10"></div>
                  <div className="w-[95%] z-20 bg-backgruond-card h-[95%] rounded-full relative flex justify-center items-center">
                    <p className="font-semibold text-lg text-white">70%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-25 w-full lg:mt-0 lg:w-[25%]">
            <h1 className="text-white font-semibold text-2xl">Web Developer</h1>
            <div className="w-full h-0.5 mt-2 mb-4 bg-white"></div>
            <p className="text-sm text-white font-normal">
              A passionate Web Developer with a strong background in creating
              responsive, user-friendly, and visually appealing websites.
              Skilled in modern web technologies, I focus on delivering
              solutions that are both functional and aesthetically pleasing. My
              experience spans across front-end and back-end development,
              ensuring seamless integration, scalability, and optimal
              performance.
            </p>
            <p className="text-sm text-white font-normal mt-6">
              Proficient in React.js for crafting dynamic user interfaces,
              Node.js for efficient server-side development, and Python for
              backend logic and automation. I am committed to writing clean,
              maintainable code and applying best practices to every project. My
              goal is to create digital experiences that not only meet client
              requirements but also exceed user expectations.
            </p>
          </div>

          <div className="mt-25 lg:mt-0 w-full lg:w-[25%]">
            <h1 className="text-white font-semibold text-2xl">IOT Dev</h1>
            <div className="w-full h-0.5 mt-2 mb-4 bg-white"></div>
            <p className="text-sm text-white font-normal">
              An innovative IoT Developer with expertise in designing and
              implementing smart, connected systems that bridge the gap between
              hardware and software. Experienced in developing solutions that
              gather, process, and transmit data in real time, I focus on
              creating reliable, scalable, and secure IoT architectures for
              diverse applications.
            </p>
            <p className="text-sm text-white font-normal mt-6">
              Proficient in embedded programming, microcontroller integration,
              and communication protocols such as MQTT and HTTP. Skilled in
              using platforms like Arduino, Raspberry Pi, and NodeMCU, I aim to
              deliver IoT systems that optimize performance, improve automation,
              and enhance user experience. My work is driven by a passion for
              innovation and a commitment to solving real-world problems through
              technology
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default NewAbout;
