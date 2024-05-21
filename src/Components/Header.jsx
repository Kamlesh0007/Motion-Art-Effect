import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/MotionArtEffect-logo.png";
const Header = () => {
  return (
    <section className=" py-8 ">
      <div className=" md:px-20   flex w-full justify-between items-center ">
        <div className="flex justify-center items-center mb-4 ">
          <Link to="/">
            <img width="220" height="52" src={logo} alt="" />
          </Link>
        </div>

        <div>
          <Link
            to="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank"
            className="hidden pointer-events-auto font-outfit font-medium bg-white hover:bg-transparent hover:text-white hover:border-2 px-10 text-black  py-4  rounded md:block"
          >
            Purchase Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
