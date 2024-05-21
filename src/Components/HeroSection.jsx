import React from "react";

const HeroSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full flex justify-center md:w-3/12 px-4 mb-2 md:mb-0">
            <div className="w-5/12 md:w-2/3 md:p-6 rounded-lg ">
              <h2 className="md:text-lg text-center md:text-left font-bold  mb-2 ">
                <span className="	bg-heading-gradient bg-clip-text text-transparent  font-sora ">
                  <span className="md:text-left">Transform Your Website</span>
                </span>
              </h2>
              <p className="w-[190px] md:w-full text-testHead font-outfit text-lg font-light">
                With Motion Art Effect
              </p>
            </div>
          </div>
          <div className="w-full md:w-3/5 px-4 mb-8 md:mb-0">
            <div className=" p-6 rounded-lg ">
              <h1 className="text-[35px] text-center md:text-left tablet:text-[40px] tablet:leading-[60px]  md:text-[65px] font-sora font-medium leading-[55px] md:leading-[75px]  mb-2 text-testHead mb-[10px] md:mr-[19px] mr-[-32px]">
                Attract Your Visitors Attention With Colorful{" "}
                <span className="	bg-heading-gradient bg-clip-text text-transparent  font-sora">
                  Motion Art Effect
                </span>
              </h1>
              <p className="font-outfit tablet:w-full text-lg text-starScoreColor md:w-4/5 md:mr-[160px] tablet:mr-[30px]">
                Unleash the power of creativity with Motion Art for Elementor -
                your ultimate solution for seamlessly integrating captivating
                animations into your website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
