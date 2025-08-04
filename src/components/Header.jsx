import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const [hamburgerAnimation, setHamburgerAnimation] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [removeHidden, setRemoveHidden] = useState(false);
  const [darkmode, setDarkmode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const hamburgerClick = () => {
    if (removeHidden === false) {
      setRemoveHidden(!removeHidden);
    }

    if (hamburgerAnimation === false && closeAnimation === false) {
      setHamburgerAnimation(!hamburgerAnimation);
    } else if (hamburgerAnimation && closeAnimation === false) {
      setHamburgerAnimation(!hamburgerAnimation);
      setCloseAnimation(!closeAnimation);
    } else {
      setHamburgerAnimation(!hamburgerAnimation);
      setCloseAnimation(!closeAnimation);
    }
  };


  const hrefClick = () => {
    setCloseAnimation(!closeAnimation);
    setHamburgerAnimation(!hamburgerAnimation);
    setRemoveHidden(!removeHidden);
  };

  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, [])

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);

  console.log(darkmode)
  return (
    <header className="py-3 border-b-1 border-b-[#1F1F1F] text-white fixed top-0 right-0 left-0 z-50 max-w-[1280px] w-full mx-auto bg-[#E5E7EB] dark:bg-[#0D0D0D] lg:h-18 h:14 sm:h-16">
      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-25 flex justify-between items-center h-full">
        <div>
          <h1 className={`text-black font-semibold text-base md:text-2xl sm:text-lg dark:text-white`}>Muhammad Abdi Fardani</h1>
        </div>
        <div
          onClick={hamburgerClick}
          className={`flex flex-col h-7 justify-between mt-1 p-1 cursor-pointer container-span1 ${hamburgerAnimation ? "" : "container-span2"
            } ${hamburgerAnimation ? "hamburger-animation" : ""} relativem z-40 `}
        >
          <span className="span dark:bg-white bg-black"></span>
          <span className="span dark:bg-white bg-black"></span>
          <span className="span dark:bg-white bg-black"></span>
        </div>

        <div
          className={` absolute text-white font-semibold top-0 bottom-0 bg-[#E5E7EB] dark:bg-black h-screen pl-10 right-0 left-0   
            ${hamburgerAnimation ? "show" : ""}
            ${removeHidden ? "" : "hidden"}
            ${closeAnimation ? "hiddenAnimation" : ""}
            `}
        >
          <div className="flex flex-col h-full justify-around lg:px-15">

            <nav className="flex gap-6 lg:gap-3 flex-col">
              <ul>
                <li>
                  <a
                    onClick={hrefClick}
                    className="text-3xl lg:text-4xl  text-black dark:text-white md:text-5xl xl:text-6xl font-semibold tracking-[2px]"
                    href="#"
                  >
                    Home
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="text-3xl md:text-5xl lg:text-4xl xl:6xl  font-semibold tracking-[2px] text-black dark:text-white"
                    href="#Project"
                    onClick={hrefClick}
                  >
                    Project
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="text-3xl lg:text-4xl md:text-5xl xl:6xl font-semibold tracking-[2px] text-black dark:text-white"
                    href="#About"
                    onClick={hrefClick}
                  >
                    About
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="text-3xl lg:text-4xl md:text-5xl xl:6xl font-semibold tracking-[2px] text-black dark:text-white      "
                    href="#Services"
                    onClick={hrefClick}
                  >
                    Services
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="text-3xl lg:text-4xl md:text-5xl xl:6xl font-semibold tracking-[2px] text-black dark:text-white"
                    href="#Contact"
                    onClick={hrefClick}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    className="text-3xl lg:text-4xl md:text-5xl xl:6xl font-semibold tracking-[2px] text-black dark:text-white"
                    href="#Blog"
                    onClick={hrefClick}
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <h1 className="dark:text-white text-black">Get InTouch</h1>

              <div className="mt-4 flex gap-15 flex-wrap">
                <a href="" target="_blank" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8">
                    <img src="linkedin.png" alt="" />
                  </div>
                  <span className="dark:text-white text-black">@abdi.frdn</span>
                </a>
                <a href="https://www.instagram.com/abdi.frdn" target="_blank" className="flex items-center gap-2 cursor-pointer">
                  <div className="w-8">
                    <div className="w-9 h-9 p-1 bg-white rounded-sm box-border">
                    <img src="ig.png" alt="" />
                    </div>
                  </div>
                  <span className="dark:text-white text-black ml-1">Muhammad Abdi Fardani</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

                  <div
              className="w-12 h-12 bg-black rounded-full p-0 group cursor-pointer dark:bg-white flex justify-center items-center fixed bottom-5 right-5"
              onClick={() => setDarkmode(!darkmode)}
            >
              {/* <Moon /> */}
              {darkmode ? <Sun color="black"/> : <Moon />}
            </div> 
    </header>
  );
};
export default Header;
