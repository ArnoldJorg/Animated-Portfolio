import React from "react";
import { useState, useEffect } from "react";

interface titleProps {
  title: string;
  logo?: string;
  year?: string;
  alt?: string;
  isSticky?: boolean;
  techstack?: techLogo[];
  titleStyling?: string;
}

// ${isSticky ? "fixed w-[50%] top-0 z-10 shadow-lg" : "relative z-0"}`}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const StickyHeader = ({
  title,
  titleStyling,
  logo,
  year,
  alt,
  techstack = [],
}: titleProps) => {
  const isSmallScreen = useMediaQuery("(max-width: 480px)");
  return (
    <div
      className={`flex phone:flex-col lg:flex-row items-center sm:space-y-1 lg:justify-between py-[1vw] rounded-b-lg bg-black sticky top-0 z-20  phone:w-[100%] lg:w-[50%] shadow-black shadow-[0px_18px_14px] phone:space-y-2${
        title && !logo ? "py-8 phone:text-center phone:space-y-2" : ""
      }`}
    >
      <div className="flex items-center space-x-3 flex-row">
        {" "}
        {logo && (
          <img
            src={logo}
            width="50"
            height="50"
            className=" lg:max-[1101px]:w-10 lg:max-[1101px]:h-10 rounded-xl"
            alt={alt}
          />
        )}
        {/* if phone video width is a certain amount it render a   */}
        <h1
          className={`text-3xl lg:max-[1101px]:text-xl  font-Roboto text-white flex-shrink flex-wrap`}
        >
          {" "}
          {title}
        </h1>
        {!isSmallScreen &&
          techstack.map((techLogo, i) => (
            <img
              key={i}
              src={techLogo.url}
              className={`object-contain rounded-2xl  ${techLogo.extraClasses}`}
              alt={techLogo.alt}
              width="25"
              height="25"

              // "Portfolio-Image"
            />
          ))}
      </div>
      {isSmallScreen && (
        <div className="flex space-x-2 items-center">
          {techstack.map((techLogo, i) => (
            <img
              key={i}
              src={techLogo.url}
              className={`object-contain rounded-2xl ${techLogo.extraClasses}`}
              alt={techLogo.alt}
              width="20"
              height="20"

              // "Portfolio-Image"
            />
          ))}
        </div>
      )}
      {year && (
        <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end px-3 p-1 whitespace-nowrap shrink-0 ">
          <p className="text-xs text-white">{year}</p>
        </div>
      )}
    </div>
  );
};

export default StickyHeader;
