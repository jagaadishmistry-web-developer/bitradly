import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { CardData } from "./Data";
import Image from "next/image";

const CardSlider = () => {
  var settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings} className="">
          {CardData.map((Cdata) => {
            return (
              <div key={Cdata.id} className="px-3">
                <div className="bg-white rounded-xl 2xl:px-8 xl:px-5 lg:px-4 md:px-5 px-4 2xl:py-11 xl:py-8 lg:py-6 md:py-4 py-5">
                  <div className="flex gap-6 items-center">
                    <Image
                      src={Cdata.img}
                      width="500"
                      height="500"
                      alt="img"
                      className="rounded-full xl:h-[100px] lg:h-[70px] md:h-[90px] xl:w-[100px] lg:w-[70px] md:w-[90px] h-[65px] w-[65px]"
                      priority
                    />
                    <div className="">
                      <p className="font-bold xl:text-xl md:text-lg text-lg">
                        {Cdata.name}
                      </p>
                      <p className="xl:text-base lg:text-sm font-bold text-slate-700">
                        {Cdata.customer}
                      </p>
                    </div>
                  </div>
                  <p className="xl:text-base lg:text-sm text-xs xl:py-6 py-4">
                    {Cdata.description}
                  </p>
                  <div className="flex justify-end w-full 2xl:pt-5 xl:pt-2 lg:pt-0">
                    <Image
                      src={Cdata.imgIcon}
                      height={500}
                      width={500}
                      className="custom-image4 md:h-[28px] md:w-[150px]"
                      alt="img"
                      priority
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default CardSlider;
