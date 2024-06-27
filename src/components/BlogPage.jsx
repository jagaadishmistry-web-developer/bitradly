import { FaUserCircle } from "react-icons/fa";
import { CgArrowRight } from "react-icons/cg";
import { blogPageData } from "./BlogPAgeData";
import Image from "next/image";

const BlogPage = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-8">
        <div className="grid place-items-center py-6">
          <p className="font-bold md:text-5xl text-3xl">Our Blog</p>
          <p className="lg:w-[550px] text-center mt-3 text-neutral-700">
            Nullar condiment Felis sed maximus sodalist. Ut Faubus masa eget
            vestibulum dipygus. Vestibulum auctor massa eget condimentum
            volutpat.
          </p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-5 gap-6 place-items-center py-6 mb-10">
          {blogPageData.map((blogData) => {
            return (
              <div
                key={blogData.id}
                className="shadow-xl col-span-1 2xl:h-[587px] xl:h-[457px] lg:h-[440px] md:h-[470px] h-[480px] 2xl:w-[417px] xl:w-[350px] lg:w-[300px] rounded-lg w-full hover:scale-105 duration-300">
                <Image
                  src={blogData.image}
                  className="w-full 2xl:h-[280px] md:h-48 h-[200px] rounded-t-lg"
                  height={500}
                  width={500}
                  alt=""
                />
                <div className="py-8 xl:px-[38px] lg:px-[30px] px-[18px] flex flex-col lg:gap-2 md:gap-3 gap-3">
                  <div className="flex gap-5">
                    <div className="flex gap-[6px] mt-[1.5px]">
                      <span className="mt-[2px]">
                        <FaUserCircle />
                      </span>
                      <span className="text-sm">By Admin</span>
                    </div>
                    <input
                      className="bg-transparent text-sm"
                      type="date"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="2xl:text-2xl xl:text-xl lg:text-base text-lg font-bold">
                    <p>{blogData.name1}</p>
                    <p>{blogData.name2}</p>
                  </div>
                  <p className="text-[16px]">{blogData.description}</p>
                  <button className="flex justify-center items-center gap-1 xl:text-lg border-2 border-yellow-500 text-yellow-600 rounded-full 2xl:h-[50px] xl:h-[40px] lg:h-[40px] h-[43px] w-[183px] mt-3 hover:scale-105 duration-300">
                    Read More
                    <div className="mt-1">
                      <CgArrowRight />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
