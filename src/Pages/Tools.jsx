const Toolspage = () => {
  return (
    <section className="dark:bg-[#0D0D0D] bg-[#F1F5F9] relative py-30 h-150 xl:h-170" id="#Tools">
      <h1 className="absolute top-1/2 -translate-y-1/2 text-center rotate-35 text-[#FFFFFF] opacity-3 text-2xl w-full font-bold md:text-4xl lg:text-5xl md:rotate-25 ">
        Tools And Technologies I use
      </h1>
      <div className="absolute right-0 left-0 dark:bg-[#0F0F0F] bg-white rounded-br-[40px] rounded-bl-[50px] h-20 top-0"></div>
      <div className="absolute right-0 left-0 dark:bg-[#0F0F0F] bg-white rounded-tr-[40px] rounded-tl-[50px] h-20 bottom-0"></div>

      <div className="gap-10 mt-10 xl:mt-5 w-full ">
        <h1 className="text-black text-center font-semibold dark:text-white xl:text-xl">Web Dev</h1>
        <div className="mt-4 h-28 flex w-full relative gap-50 overflow-hidden">
          <div className=" flex left-full items-center gap-15 absolute move">
            <div className="w-22">
              <img src="react.png" alt="" className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-21 -mt-1">
              <img src="vite.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-29">
              <img src="mongo.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-20">
              <img src="node.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-35">
              <img src="tailwind.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-19">
              <img src="git.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-22">
              <img src="github.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-10 xl:mt-25 ">
        <h1 className="text-black text-center font-semibold dark:text-white xl:text-xl">IOT</h1>
        <div className="mt-8 h-20 relative overflow-hidden">
          <div className="flex gap-15 absolute left-full move2">
            <div className="w-27">
              <img src="blynk.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-24">
              <img src="github.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-17 mt-1">
              <img src="git.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-18 -mt-1">
              <img src="mqtt.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-16 -mt-3">
              <img src="arduinologo.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
            <div className="w-27 mt-2">
              <img src="platformio.png" alt=""  className="dark:brightness-100 dark:saturate-0 brightness-0 saturate-100"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolspage;
