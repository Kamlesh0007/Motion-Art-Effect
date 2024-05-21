import React from "react";
import image1 from "../assets/motionarteffect-img9.png";
import image2 from "../assets/motionarteffect-img6.png";
import image3 from "../assets/motionarteffect-img7.png";

const Feature = () => {
  const features = [
    {
      image: image1,
      title: "Light Weight",
      description: "Motion Art for Elementor is designed to be lightweight.",
    },
    {
      image: image2,
      title: "100% Responsive",
      description: "Create a consistent visual experience across all devices.",
    },
    {
      image: image3,
      title: "User Friendly Interface",
      description:
        "Ensure a smooth experience for both applicants and administrators.",
    },
  ];

  return (
    <section className="md:py-8 md:mt-16 md:mb-20 pb-0">
      <div className="container w-full mx-auto rounded-xl p-8 px-2">
        <div className=" w-full mx-auto max-w-screen-md">
          <h2 className=" text-[25px] md:text-[40px] md:px-20  leading-10 md:leading-[55px] font-sora font-medium text-testHead mb-4 text-center">
            An All-Round Plugin With Powerful Features
          </h2>
          <p className=" md:max-w-[634px] text-[16px] md:text-lg text-starScoreColor font-light font-outfit md:mx-[30px] md:leading-8 text-center mb-14">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className=" w-full flex max-md:flex-col  md:flex  gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex md:w-1/3 bg-browsers-gradient px-7 py-10 pt-[30px] flex-col items-center justify-center border-solid border-[2px] border-[#FFFFFF10] transition-all duration-300 shadow-md rounded-2xl"
            >
              <div
                className="w-full"
                style={{ margin: "-20px 0px 20px -40px" }}
              >
                <img
                  src={feature.image}
                  alt={`Image ${index + 1}`}
                  className=""
                />
              </div>

              <div className="text-center mt-4">
                <h2 className="text-2xl text-left leading-[45px] font-sora text-testHead font-medium  mb-2">
                  {feature.title}
                </h2>
                <p className="text-xl font-outfit font-light leading-[30px] text-left text-starScoreColor">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
