import React from "react";

const NavigationBar = ({ activeSection }) => {
  return (
    <div className="flex flex-row justify-center items-center lg:p-4 sm:p-3 lg:px-8 sm:px-6 phone:p-3 phone:px-4 phone:text-md bg-black rounded-full border-custom-grey-3 border-2 lg:text-xl sm:text-lg  ">
      <nav className="space-x-8">
        <a
          aria-label="about-section"
          href="#about-section"
          className={
            activeSection === "about"
              ? " text-white "
              : "text-white opacity-60 hover:opacity-100"
          }
        >
          About
        </a>
        <a
          aria-label="work-experience-section"
          href="#work-section"
          className={
            activeSection === "work"
              ? " text-white "
              : "text-white opacity-60 hover:opacity-100"
          }
        >
          Work
        </a>
        <a
          aria-label="more-experience-section"
          href="#more-section"
          className={
            activeSection === "more"
              ? " text-white "
              : "text-white opacity-60 hover:opacity-100"
          }
        >
          More
        </a>
      </nav>
    </div>
  );
};

export default NavigationBar;

// will be implemented later
