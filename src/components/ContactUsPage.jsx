import { useState } from "react";

const ContactUsPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="bg-[#1D1131]">
        <div className="container mx-auto px-6 pb-40">
          <div className="grid place-items-center md:pt-[82px] pt-[62px] pb-[70px] text-white">
            <p className="font-bold md:text-5xl text-3xl text-center">
              Contact With Us
            </p>
            <p className="lg:w-[550px] text-center mt-3 text-neutral-300">
              Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
              vestibulum dipygus. Vestibulum auctor massa eget condimentum
              volutpat.
            </p>
          </div>
          <form action="">
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:text-xl rounded-md px-3 lg:gap-6 md:gap-5 gap-4">
              <input
                type="input"
                value=""
                placeholder="Your Name"
                onChange={handleChange}
                className="border border-white col-span-1 rounded-full md:px-7 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px]"
              />
              <input
                type="input"
                value=""
                placeholder="Your Email"
                onChange={handleChange}
                className="border border-white col-span-1 rounded-full md:px-7 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px]"
              />
              <input
                type="input"
                value=""
                placeholder="Phone Number"
                onChange={handleChange}
                className="border border-white col-span-1 rounded-full md:px-7 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px]"
              />
              <input
                type="input"
                value=""
                placeholder="Subjcet"
                onChange={handleChange}
                className="border border-white col-span-1 rounded-full md:px-7 px-4 xl:h-[70px] lg:h-[60px] md:h-[60px] h-[50px]"
              />
              <textarea
                placeholder="Massage"
                onChange={handleChange}
                className="border border-white lg:col-span-2 rounded-xl md:px-7 px-4 py-2 h-[260px] text-start"
              />
            </div>
            <div className="grid place-items-center py-8">
              <button className="bg-yellow-500 md:h-[60px] h-[45px] md:w-[205px] w-[160px] rounded-full text-white md:text-xl hover:scale-105 duration-300">
                Send Massage
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
