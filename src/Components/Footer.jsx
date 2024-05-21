import React from 'react';

const Footer = () => {
  return (
    <section className="bg-gradient-to-r from-[#F87516] to-[#5E11FF] pt-4 pb-2 px-12 w-full  relative pointer-events-auto">
      <div className="container mx-auto max-md:flex-col-reverse flex md:flex  flex-wrap justify-between items-center text-white">
        <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
          <p className='text-sm font-outfit font-normal text-starScoreColor'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4 max-md:mb-4">
          <ul className="flex space-x-4">
            <li>
              <a href="https://qodematrix.com/docs/motion-art-for-elementor/" target="_blank" className="hover:text-[#E1D9FF] text-sm font-outfit font-normal text-starScoreColor">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://support.qodematrix.com/" target="_blank" className="hover:text-[#E1D9FF] text-sm font-outfit font-normal text-starScoreColor">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
