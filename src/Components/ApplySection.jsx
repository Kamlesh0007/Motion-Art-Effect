import React from "react";
import image1 from "../assets/motionarteffect-img11.png";
import image2 from "../assets/motionarteffect-img10.png";

const ApplySection = () => {
  return (
    <section className="py-8 md:mb-16 ">
      <div className="text-center mb-8 w-full flex justify-center">
        <h2 className="md:text-[40px] text-testHead md:max-w-screen-md font-medium font-sora md:leading-[60px] mb-3 text-center  ">
          Apply on any Section or Enable For Whole Page
        </h2>
      </div>
      <div className="container max-w-screen-xl mx-auto w-full flex max-md:flex-col md:flex gap-2">
        <div className="flex bg-browsers-gradient max-md:w-full md:w-1/2 md:m-[30px] md:mb-[120px] p-8  flex-col gap-8 rounded-3xl border-solid border-[2px] border-[#FFFFFF10] transition-all duration-300 shadow-md">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl leading-10 md:text-2xl text-left text-testHead md:leading-[45px] font-medium mb-4">
              Apply On Section
            </h2>
            <p className="md:text-lg md:leading-8 font-outfit text-starScoreColor font-light text-left">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={image1}
              alt="Apply On Section"
              className="w-full md:max-w-lg"
            />
          </div>
        </div>
        <div className="flex  bg-browsers-gradient flex-col max-md:w-full  md:w-1/2 p-8 gap-8 mt-8 rounded-3xl border-solid border-[2px] border-[#FFFFFF10] transition-all duration-300 shadow-md">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl leading-10 md:text-2xl text-left text-testHead md:leading-[45px] font-medium mb-4">
              Apply On Page
            </h2>
            <p className="md:text-lg md:leading-8 font-outfit text-starScoreColor font-light text-left">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={image2}
              alt="Apply On Page"
              className="w-full md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
