const NewProject = () => {
  return (
    <section className="px-5 pb-20 mt-30  dark:bg-default-backrgound-dark" id="Project">
      <h1 className="dark:text-white text-judul-light text-2xl font-medium text-center">SELECTED PROJECTS</h1>
      <p className="text-sm text-semijudul-light dark:text-white text-center">My Works In One Page</p>
      <div className="mt-20 flex gap-10 flex-wrap justify-center"> 
        <a className="w-full sm:w-[350px] p-6 rounded-xl">
          <img src="public/project-management.png" alt="" className="scale-80"/>
          <h3 className="dark:text-white text-xl font-normal mt-1 text-semijudul-light">Project Showcase</h3>
          <p className="my-6 text-sm text-paragraf-light dark:text-[#ffffff5b] tracking-[0.5px]">
            A comprehensive showcase of all my projects, combining work from
            different fields and technologies into one place.
          </p>
          <button className="cursor-pointer  flex items-center justify-between w-full -mt-2">
            <p className="text-border-gold">View The Projects</p>
            <img src="public/right-arrow.png" alt="" className="scale-50"/>
          </button>
        </a>
        <a className=" sm:w-[350px] w-full p-6 rounded-xl">
          <img src="public/coding.png" alt="" className="scale-80"/>
          <h3 className="dark:text-white text-xl font-normal mt-1 text-semijudul-light">Web Projects</h3>
          <p className="my-6 text-sm text-paragraf-light dark:text-[#ffffff5b] tracking-[0.5px]">
            A comprehensive showcase of all my projects, combining work from
            different fields and technologies into one place.
          </p>
          <button className="cursor-pointer flex items-center justify-between w-full -mt-2">
            <p className="text-border-gold">View The Projects</p>
            <img src="public/right-arrow.png" alt="" className="scale-50"/>
          </button>
        </a>
        <a className="sm:w-[350px] w-full p-6 rounded-xl">
          <img src="public/iot.png" alt="" className="scale-80"/>
          <h3 className="dark:text-white text-xl font-normal mt-1 text-semijudul-light">IOT Projects </h3>
          <p className="my-6 text-sm text-paragraf-light dark:text-[#ffffff5b] tracking-[0.5px]">
            A comprehensive showcase of all my projects, combining work from
            different fields and technologies into one place.
          </p>
          <button className="cursor-pointer flex items-center justify-between w-full -mt-2">
            <p className="text-border-gold">View The Projects</p>
            <img src="public/right-arrow.png" alt="" className="scale-50"/>
          </button>
        </a>
      </div>
    </section>
  );
};

export default NewProject;
