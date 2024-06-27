import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const HomeViewPart = () => {
  return (
    <>
      <div className="bg-[url('/background.png')] w-full bg-center bg-cover h-[750px] md:h-[690px] lg:h-[640px] 2xl:h-[885px]">
        <div className="container mx-auto px-6 lg:flex justify-between text-white py-[90px] md:py-[150px] lg:py-[120px] xl:py-[100px] 2xl:py-[150px] text-center lg:text-start">
          <div className="">
            <div className="text-3xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
              <p className="text-yellow-500 font-medium">Business Trading</p>
              <p>Online Landing</p>
              <p>page</p>
            </div>
            <p className="w-full lg:w-[355px] xl:w-[445px] 2xl:w-[480px] md:text-lg pt-[30px]">
              We have over 15 year experience in business consulting arena. We
              have over 15 year experience in business consulting arena and
              artificial intelligence.
            </p>
            <div className="flex md:gap-[20px] gap-[12px] justify-center lg:justify-start text-[16px] pt-[40px] lg:pt-[25px] xl:pt-[30px] 2xl:pt-[45px]">
              <button className="bg-yellow-500 rounded-3xl md:h-[50px] h-[42px] lg:h-[45px] md:w-[152px] w-[132px] hover:scale-105 duration-300">
                Get Started
              </button>
              <button className="border border-white rounded-3xl md:h-[50px] h-[42px] lg:h-[45px] md:w-[122px] w-[110px] hover:scale-105 duration-300">
                Sing up
              </button>
            </div>

            <div className="flex justify-center lg:justify-start xl:gap-[16px] gap-[13px] mt-10 lg:mt-[40px] xl:mt-[50px] 2xl:mt-[100px] lg:ml-1">
              <div className="bg-white h-8 w-8 xl:h-[50px] md:h-[40px] xl:w-[50px] md:w-[40px] flex justify-center items-center rounded-full text-black">
                <FaFacebookF className="xl:h-[24px] md:h-[22px] xl:w-[16px] md:w-[22px]" />
              </div>
              <div className="bg-white h-8 w-8 xl:h-[50px] md:h-[40px] xl:w-[50px] md:w-[40px] flex justify-center items-center rounded-full text-black ">
                <FaLinkedinIn className="xl:h-[24px] md:h-[22px] xl:w-[24px] md:w-[22px]" />
              </div>
              <div className="bg-white h-8 w-8 xl:h-[50px] md:h-[40px] xl:w-[50px] md:w-[40px] flex justify-center items-center rounded-full text-black ">
                <FaInstagram className="xl:h-[24px] md:h-[22px] xl:w-[24px] md:w-[22px]" />
              </div>
              <div className="bg-white h-8 w-8 xl:h-[50px] md:h-[40px] xl:w-[50px] md:w-[40px] flex justify-center items-center rounded-full text-black ">
                <FaTwitter className="xl:h-[21px] md:h-[22px] xl:w-[24px] md:w-[22px]" />
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default HomeViewPart;
