import Image from "next/image";
import aboutImg from "../../public/Image.png";

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 2xl:gap-16 xl:gap-10 lg:gap-8 gap-4 lg:place-items-start place-items-center lg:text-start text-center py-[80px]">
        <div className="">
          <Image
            src={aboutImg}
            className="2xl:h-[700px] 2xl:w-[690px]"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 lg:py-8 lg:mt-0 mt-14">
          <div className="2xl:text-5xl lg:text-3xl md:text-4xl text-2xl font-bold">
            <p>The World’s 1st ICO</p>
            <p>Platform That Offers</p>
            <p>Rewards</p>
          </div>
          <div className="md:text-base text-sm text-neutral-700 ">
            <p className="">
              Duis sollicitudin finibus consequat. Nullam condimentum felis sed
              maximus sodales. Ut faucibus massa eget vestibulum dapibus.
              Vestibulum auctor massa eget condimentum volutpat. Curabitur
              finibus odio ex, et venenatis risus mattis eu. Quisque eu maximus
              mauris, ac finibus elit
            </p>
            <p className="mt-1">
              We are an independent gym that is committed to working with you to
              gain the results you want. Whether your aim is to loose weight.
              Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
              vestibulum dipygus. Vestibulum auctor massa eget condimentum
              volutpat.
            </p>
            <div className="mt-5">
              <button className="bg-yellow-500 md:h-[50px] h-[40px] md:w-[150px] w-[130px] hover:scale-105 duration-300 rounded-3xl text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Part  */}
      <div className="grid place-items-center bg-[url('/Partners.png')] bg-cover bg-center lg:h-[247px] h-[370px] mb-8">
        <div className="px-6 lg:px-[40px] xl:px-[170px] 2xl:px-[300px] grid lg:grid-cols-6 grid-cols-2 lg:gap-[25px] xl:gap-[35px] 2xl:gap-[70px] md:gap-[40px] gap-8">
          <Image
            priority
            className="custom-image md:h-[50px] md:w-[160px]"
            src={"/swop.png"}
            height={180}
            width={180}
            alt=""
          />
          <Image
            priority
            className="custom-image md:h-[50px] md:w-[160px]"
            src={"/kanba.png"}
            height={100}
            width={100}
            alt=""
          />
          <Image
            priority
            className="custom-image md:h-[50px] md:w-[160px]"
            src={"/amara.png"}
            height={100}
            width={100}
            alt=""
          />
          <Image
            priority
            className="custom-image md:h-[50px] md:w-[160px]"
            src={"/liva.png"}
            height={100}
            width={100}
            alt=""
          />
          <Image
            priority
            className="custom-image"
            src={"/aven.png"}
            height={100}
            width={100}
            alt=""
          />
          <Image
            priority
            className="custom-image"
            src={"/btcex.png"}
            height={100}
            width={100}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
