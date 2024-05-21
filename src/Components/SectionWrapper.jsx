import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <section className=" overflow-x-hidden mx-auto md:px-4 relative">
      {children}
    </section>
  );
};

export default SectionWrapper;
