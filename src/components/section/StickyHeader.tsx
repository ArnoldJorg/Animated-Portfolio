import React from "react";

interface titleProps {
  title: string;
  logo?: string;
  year?: string;
  alt?: string;
  isSticky?: boolean;
}

// ${isSticky ? "fixed w-[50%] top-0 z-10 shadow-lg" : "relative z-0"}`}

const StickyHeader = ({ title, logo, year, alt }: titleProps) => {
  return (
    <div
      className={`flex phone:flex-col lg:flex-row items-center sm:space-y-1 lg:justify-between py-[1vw] rounded-b-lg bg-black sticky top-0 z-20 lg:w-[50%] phone:w-[90%] shadow-lg ${
        title && !logo ? "py-8 phone:text-center phone:space-y-2" : ""
      }`}
    >
      <div className="flex items-center space-x-3">
        {" "}
        {logo && (
          <img
            src={logo}
            width="50"
            height="50"
            className=" rounded-xl"
            alt={alt}
          />
        )}
        <h1 className="text-3xl font-Roboto text-white"> {title}</h1>
      </div>
      {year && (
        <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end px-3 p-1 whitespace-nowrap shrink-0 ">
          <p className="text-xs text-white">{year}</p>
        </div>
      )}
    </div>
  );
};

export default StickyHeader;
