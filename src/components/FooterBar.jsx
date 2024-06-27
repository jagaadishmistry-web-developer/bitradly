import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const FooterBar = () => {
  return (
    <>
      <div className="bg-[url('/footerbg.png')] bg-cover bg-center ">
        <div className="container mx-auto relative">
          <div className="absolute w-full px-6">
            <div className="bg-white 2xl:h-52 xl:h-44 h-32 rounded-2xl w-full flex lg:flex-row flex-col lg:justify-between items-center justify-center 2xl:px-28 xl:px-24 lg:px-20 md:px-12 px-6 relative -top-20">
              <div className="font-bold md:text-3xl text-lg">
                Subscribe Newsletter
              </div>
              <input
                placeholder="Emali Address"
                type="text"
                className="px-3 py-2 border-b-[1.5px] 2xl:w-[550px] xl:w-[480px] lg:w-[380px] w-full text-sm xl:text-lg border-stone-600"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 xl:gap-7 gap-14 h-full text-white xl:pt-52 md:pt-52 xl:pb-28 md:pb-20 pt-28 pb-16">
          <div className="col-span-1 flex flex-col gap-8">
            <Image
              priority
              src={"/topicon.png"}
              className="custom-image2"
              height={500}
              width={500}
              alt=""
            />
            <p className="xl:text-lg text-xs">
              We are an independent gym that is committed to working with you to
              gain the results you want.
            </p>
            <div className="flex gap-3 xl:gap-4">
              <div className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] xl:w-[45px] flex justify-center items-center rounded-full text-black">
                <FaFacebookF />
              </div>
              <div className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaLinkedinIn />
              </div>
              <div className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaInstagram />
              </div>
              <div className="bg-white h-7 w-7 lg:h-5 lg:w-5 xl:h-[45px] xl:w-[45px] flex justify-center items-center rounded-full text-black ">
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="text-xl xl:text-4xl font-bold">Explore Link</div>
            <div className="text-xs xl:text-lg flex flex-col gap-1 xl:gap-4">
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>About</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Service</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Pricing</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>FAQ</span>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span>
                  <RiBox3Fill />
                </span>
                <span>Blog</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="text-xl xl:text-4xl font-bold">Latest News</div>
            <div className="flex flex-col gap-2 xl:gap-5">
              <div className="flex gap-2 xl:gap-4">
                <div className="">
                  <Image
                    src={"/footer1.png"}
                    height={500}
                    width={500}
                    className="xl:h-[72px] h-[45px] xl:w-[80px] w-[70px] rounded-md"
                    alt=""
                    priority
                  />
                </div>
                <div className="">
                  <p className="text-xs xl:text-xl font-bold w-36">
                    Five Easy Rules Of bitcoin.
                  </p>
                  <p className="text-[9px]"> 25 Dec 2023</p>
                </div>
              </div>
              <div className="">
                <div className="flex gap-2 xl:gap-4">
                  <div className="">
                    <Image
                      src={"/footer2.png"}
                      height={500}
                      width={500}
                      className="xl:h-[72px] h-[45px] xl:w-[80px] w-[70px] rounded-md"
                      alt=""
                      priority
                    />
                  </div>
                  <div className="">
                    <p className="text-xs xl:text-lg font-bold w-36">
                      Five Easy Rules Of bitcoin.
                    </p>
                    <p className="text-[9px] xl:text-[16px]"> 25 Dec 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <div className="text-xl xl:text-4xl font-bold">Get In Touch</div>
            <div className="text-xs xl:text-base grid gap-3 xl:gap-5">
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-yellow-500 text-[18px] xl:text-[23px]">
                  <PiPhoneCallLight />
                </span>
                <p>+01 294 584 2365</p>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-yellow-500 text-[18px] xl:text-[23px]">
                  <IoIosMail />
                </span>
                <p>digitalpluse-it@gmail.com</p>
              </div>
              <div className="flex gap-1 xl:gap-2">
                <span className=" text-yellow-500 text-[18px] xl:text-[23px]">
                  <FaLocationDot />
                </span>
                <p>275 Jimmy Way Copperopolis, California(CA), 95228</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3B305E] h-16 text-white xl:text-[20px] lg:text-sm text-xs">
        <div className="bg-black/35 h-full w-full grid place-items-center">
          Copyright © 2024 Digitalpluse-It. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default FooterBar;
