import React from 'react';
import supportedBrowsersImage from '../assets/motionarteffect-img8.png';

const BrowserCompatibilitySection = () => {
  return (
    <section className="py-8">
      <div className="container bg-browsers-gradient mx-auto flex flex-col py-12  px-8 items-center justify-between gap-8 rounded-3xl border-solid border-[2px] border-[#FFFFFF10] transition-all duration-300 shadow-md">
        <div className="w-full md:w-auto">
          <h2 className="text-xl leading-10 md:leading-none md:text-2xl text-center  font-medium font-sora text-testHead mb-4">Supported by All Popular Browsers</h2>
          <p className="text-lg  text-starScoreColor flex flex-wrap  font-outfit text-center   font-light leading-[30px]">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        </div>
        <div>
          <img src={supportedBrowsersImage} alt="Supported Browsers" className="w-full md:w-auto" />
        </div>
      </div>
    </section>
  );
};

export default BrowserCompatibilitySection;
