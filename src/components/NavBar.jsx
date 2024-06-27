import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { LuUser2 } from "react-icons/lu";
import { useRef, useState } from "react";
import ContactUsPage from "./ContactUsPage";
import BlogPage from "./BlogPage";
import ServicePage from "./ServicePage";
import AboutPage from "./AboutPage";
import HomeViewPart from "./HomeViewPart";
import GoTop from "./GoTop";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  // const homeViewPart = useRef();
  const aboutPage = useRef();
  const servicePage = useRef();
  const blogPage = useRef();
  const contactUsPage = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      <GoTop />
      <div className="bg-black border-b border-slate-500">
        <div className="container mx-auto px-6 flex justify-between h-[75px] md:h-[85px] lg:h-[78px] xl:h-[80px] 2xl:h-[100px] place-items-center text-white">
          <Image
            src={"/topicon.png"}
            priority
            className="custom-image2 xl:w-[170px] lg:w-[160px] md:w-[150px] xl:h-[60px] lg:h-[51px] md:h-[50px]"
            height={500}
            width={500}
            alt=""
          />
          <div className="lg:flex hidden xl:gap-16 lg:gap-9 items-center">
            <div className="flex 2xl:gap-8 xl:gap-7 lg:gap-6">
              <div className="cursor-pointer hover:border-b">Home</div>
              <div
                className="cursor-pointer hover:border-b"
                onClick={() => scrollHandler(aboutPage)}>
                About
              </div>
              <div
                className="cursor-pointer hover:border-b"
                onClick={() => scrollHandler(servicePage)}>
                Service
              </div>
              <div
                className="cursor-pointer hover:border-b"
                onClick={() => scrollHandler(blogPage)}>
                Blog
              </div>
              <div
                className="cursor-pointer hover:border-b"
                onClick={() => scrollHandler(contactUsPage)}>
                Contact Us
              </div>
            </div>
            <button className="flex justify-center items-center gap-1 bg-yellow-500 text-white hover:scale-105 duration-300 rounded-full w-[147px] h-[46px]">
              <span className="mt-1">
                <LuUser2 />
              </span>
              <span> Register</span>
            </button>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer z-50 lg:hidden">
            {nav ? (
              <XMarkIcon className="w-10 h-10 text-white" />
            ) : (
              <Bars3Icon className="w-9 h-9 text-white" />
            )}
          </div>
          {nav && (
            <div
              onClick={() => setNav(false)}
              className="absolute top-36 text-center flex items-center justify-center left-6 md:left-[110px] right-6 md:right-[110px] bg-white h-[400px] md:h-[450px]">
              <div className="text-xl font-bold text-slate-600 gap-2 ">
                <div className="grid gap-10 place-items-center">
                  <div className="grid gap-6">
                    <div className="cursor-pointer">Home</div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(aboutPage)}>
                      About
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(servicePage)}>
                      Service
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(blogPage)}>
                      Blog
                    </div>
                    <div
                      className="cursor-pointer"
                      onClick={() => scrollHandler(contactUsPage)}>
                      Contact Us
                    </div>
                  </div>
                  <button className="flex gap-1 bg-yellow-500 text-white text-xl rounded-full px-7 py-2">
                    <span className="mt-1">
                      <LuUser2 />
                    </span>
                    <span> Register</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div>
          <HomeViewPart />
        </div>
        <div ref={aboutPage}>
          <AboutPage />
        </div>
        <div ref={servicePage}>
          <ServicePage />
        </div>
        <div ref={blogPage}>
          <BlogPage />
        </div>
        <div ref={contactUsPage}>
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default NavBar;
