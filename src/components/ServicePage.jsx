import { MdCheckCircle } from "react-icons/md";
import CardSlider from "./CardSlider";
import Image from "next/image";
import { ServiceFirstCardSectionData } from "./ServiecFirstCardData";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { howItworkData } from "./ServiceItWorkData";
import { CircularProgressbarData, plansData } from "./ServicePricePlansData";
import questionPartImage from "../../public/fullimg.png";

const ServicePage = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-8">
        <div className="grid place-items-center">
          <p className="font-bold md:text-5xl text-3xl">Our Services</p>
          <p className="lg:w-[550px] text-center mt-3 text-neutral-700">
            Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
            vestibulum dipygus. Vestibulum auctor massa eget condimentum
            volutpat.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center 2xl:gap-10 xl:gap-5 lg:gap-2 gap-5 pt-[80px]">
          {ServiceFirstCardSectionData.map((sreviceCardData) => {
            return (
              <div
                key={sreviceCardData.id}
                className="rounded-lg hover:bg-[#1D1131] hover:text-white pt-10 pb-14 md:px-6">
                <Image
                  src={sreviceCardData.img}
                  priority
                  height={500}
                  width={500}
                  className="custom-image3 md:h-[180px] md:w-[180px]"
                  alt=""
                />
                <p className="2xl:text-4xl xl:text-3xl md:text-2xl text-xl font-bold px-6">
                  {sreviceCardData.titel}
                </p>
                <p className="px-6 py-2 2xl:w-[342px] xl:w-[325px] lg:w-[310px]">
                  {sreviceCardData.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-14">
        <div className="bg-[url('/bg.png')] bg-cover bg-center grid place-items-center xl:pt-20 pt-16 xl:pb-28 pb-20">
          <div className="px-4 grid xl:grid-cols-4 lg:grid-cols-4 grid-cols-2 text-white 2xl:gap-[120px] xl:gap-[70px] lg:gap-[70px] md:gap-[120px] gap-6 mt-8">
            {CircularProgressbarData.map((cData) => {
              return (
                <div
                  key={cData.id}
                  className="md:gap-16 gap-5 2xl:h-[220px] xl:h-[200px] lg:h-[170px] h-full 2xl:w-[220px] xl:w-[200px] lg:w-[170px] w-full md:h-[200px] md:w-[200px]">
                  <div>
                    <CircularProgressbar
                      styles={buildStyles({
                        textColor: "white",
                        pathColor: "#DF9214",
                        textSize: "20px",
                      })}
                      value={cData.value}
                      text={`${cData.value}%`}
                    />
                    <p className="text-2xl font-bold text-white text-center pt-4">
                      Bitcoin
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid place-items-center py-6 mt-8">
          <p className="font-bold md:text-[48px] text-[32px]">How It Work</p>
          <p className="lg:w-[550px] text-center mt-3 text-neutral-700">
            Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
            vestibulum dipygus. Vestibulum auctor massa eget condimentum
            volutpat.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center py-9 mb-[70px] text-white xl:gap-[25px] lg:gap-4 gap-6">
          {howItworkData.map((itWorkData) => {
            return (
              <div
                key={itWorkData.id}
                className="bg-[#1D1131] px-8 rounded-[13px] grid place-items-center xl:py-16 py-8">
                <div className="grid place-items-center gap-3 py-4">
                  <div className="xl:h-[120px] lg:h-[100px] md:h-[130px] h-[120px] xl:w-[120px] lg:w-[100px] w-[120px] border rounded-full grid place-items-center">
                    <Image
                      src={itWorkData.img}
                      className="howItWorkImg md:h-[50px] md:w-[65px]"
                      height={500}
                      width={500}
                      alt=""
                    />
                  </div>
                  <p className="font-bold text-2xl pt-4">{itWorkData.name}</p>
                  <p className="text-center text-neutral-300 lg:w-full">
                    {itWorkData.description}
                  </p>
                </div>
                <div className="text-end w-full text-slate-300 text-lg pb-2">
                  {itWorkData.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pb-6 bg-[#1D1131] pt-[100px]">
        <div className="container mx-auto px-7 pb-2">
          <div className="grid place-items-center text-white">
            <p className="font-bold md:text-5xl text-3xl text-center">
              What Clients Say
            </p>
            <p className="lg:w-[550px] text-center mt-3">
              Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
              vestibulum dipygus. Vestibulum auctor massa eget condimentum
              volutpat.
            </p>
          </div>
          <div className="py-16 md:pb-[90px] pb-[70px]">
            <CardSlider />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid place-items-center md:pt-[60px] pt-[50px]">
          <p className="font-bold md:text-5xl text-3xl">Prices Plans</p>
          <p className="lg:w-[550px] md:text-[16px] text-[15px] text-center mt-3 text-neutral-700">
            Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
            vestibulum dipygus. Vestibulum auctor massa eget condimentum
            volutpat.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 lg:gap-4 md:gap-5 gap-6 place-items-center py-14 mb-12">
          {plansData.map((pData) => {
            return (
              <div
                key={pData.id}
                className="bg-[#1D1131] col-span-1 rounded-[20px] shadow-2xl w-full pb-10">
                <div
                  // style={{ backgroundImage: `url(${pData.img})` }}
                  className="bg-[url('/priceimg1.png')] bg-cover bg-center 2xl:h-[330px] xl:h-[280px] lg:h-[210px] md:h-[230px] h-[220px] xl:px-9 lg:px-6 px-5 xl:py-11 lg:py-7 py-8 text-white rounded-t-[20px]">
                  <p className="md:text-5xl text-3xl font-bold">{pData.name}</p>
                  <p className="pt-3">Perfect to get started</p>
                  <div className="py-2">
                    <span className="xl:text-3xl md:text-2xl text-xl font-bold">
                      $120.00
                    </span>
                    <span className="xl:text-xl lg:text-lg">/Month</span>
                  </div>
                </div>
                <div className="text-white lg:text-sm">
                  <div className="xl:px-9 lg:px-6 px-5 xl:py-12 lg:py-8 py-7">
                    <button className="bg-white text-yellow-500 text-lg w-full xl:py-[20px] lg:py-[14px] md:py-[11px] py-[9px] font-bold rounded-full hover:scale-105 duration-300">
                      Get Started
                    </button>
                  </div>
                  <div className="flex flex-col xl:text-lg gap-1">
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-500">
                      <div className="xl:px-9 lg:px-6 px-5 flex gap-3 2xl:py-[11px] xl:py-[8px] lg:py-1 py-1">
                        <span className="mt-1">
                          <MdCheckCircle />
                        </span>
                        <p>Advanced Marketing Plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:pb-6 bg-[#1D1131]">
        <div className="container mx-auto px-6 md:pt-20 pt-16 md:pb-8">
          <div className="grid place-items-center text-white">
            <p className="font-bold md:text-5xl text-3xl text-center">
              Frequently Asked Questions
            </p>
            <p className="lg:w-[550px] text-center mt-3">
              Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
              vestibulum dipygus. Vestibulum auctor massa eget condimentum
              volutpat.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-10 py-24">
            <div className="col-span-1 w-full flex lg:justify-start justify-center">
              <div className="">
                <Image src={questionPartImage} alt="" />
              </div>
            </div>
            <div className="col-span-1 w-full flex flex-col justify-center text-sm gap-4 font-bold">
              <div className="bg-white w-full flex flex-col justify-center md:h-[180px] h-[210px] px-6 rounded-lg">
                <p className="xl:text-xl lg:text-lg md:text-base text-sm">
                  1. What are the objectives of this Token?
                </p>
                <p className="py-1 lg:text-lg text-sm font-normal">
                  We evaluate ICO projects on the basis of big data using a
                  scoring model and offer a comprehensive Investment Strategy.
                  We have integrated Bitcoin payment systems into a variety of
                  industries, including brick-n-mortar merchants.
                </p>
              </div>
              <p className="bg-white flex items-center w-full xl:text-xl md:text-lg text-sm h-[70px] px-6 rounded-lg">
                2. What Is An ICO Token And How Does It work?
              </p>
              <p className="bg-white flex items-center w-full xl:text-xl md:text-lg text-sm h-[70px] px-6 rounded-lg">
                3. What is Token Sale and pre-sale?
              </p>
              <p className="bg-white flex items-center w-full xl:text-xl md:text-lg text-sm h-[70px] px-6 rounded-lg">
                4. What is the pre-sale start date?
              </p>
              <p className="bg-white flex items-center w-full xl:text-xl md:text-lg text-sm h-[70px] px-6 rounded-lg">
                5. How may I take part in pre-sale?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
