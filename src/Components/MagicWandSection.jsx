import React from "react";
import motionarteffectImg5 from "../assets/motionarteffect-img5.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const MagicWandSection = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto  rounded-xl p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-2/3">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold font-sora text-testHead text-[30px] leading-[50px] md:text-[35px] md:leading-[55px] mb-4">
                Turn Your Cursor Into A Colorful Magic Wand &amp; Charm Your
                Visitors
              </h2>
              <p className="text-xl font-outfit text-starScoreColor md:leading-[30px] mb-4">
                Motion Art for Elementor is a groundbreaking plugin that
                empowers you to effortlessly infuse your website with visually
                stunning motion art elements.
              </p>
              <div className="flex justify-start md:justify-start">
                <Link
                  className="py-[20px] px-[35px]  bg-gradient-to-r from-[#5E11FF] to-[#F87516] pointer-events-auto text-white px-4 py-2 rounded-3xl  flex gap-6 justify-between items-center"
                  to="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-sora font-light md:text-[20px]">Purchase From Envato</span>
                  <span className="text-white ">
                    <BsArrowRight className="text-xl" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img src={motionarteffectImg5} alt="Magic Wand" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagicWandSection;
