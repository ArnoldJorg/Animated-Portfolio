import React from "react";
import GradientButton from "../GradientButton.tsx";
import { useState, useEffect } from "react";

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
const SocialButtons = () => {
  const isSmallScreen = useMediaQuery("(max-width: 810px)"); // Tailwind 'sm' is 640px
  return (
    <div className="phone:gap-2 items-end  lg:space-x-4 lg:justify-start flex-row lg:w-[70%] sm:w-[60%] text-white flex h-[14vh] sm:justify-center">
      {/* <GradientButton
                  name="CV/Resume"
                  link="./Arnold Jorg M CV.docx"
                  download="Arnold_Mobio_CV.docx"
                  // commented download out as a link is more accessible as not everybody will have word to view the file.
                  uploadIcon={true}
                /> */}
      <GradientButton
        name="LinkedIn"
        link="https://www.linkedin.com/in/arnold-j%C3%B6rg-m/"
        arrowIcon={true}
      />
      <GradientButton
        name="Whats App"
        link="https://wa.me/+447983919019"
        arrowIcon={true}
      />
      <GradientButton
        name="Github"
        link="https://github.com/ArnoldJorg"
        arrowIcon={true}
      />
      {!isSmallScreen && <div className="flex-grow" />}
      {!isSmallScreen && (
        <h1 className="flex text-5xl shrink-0 sm:block">🚀🚀</h1>
      )}
    </div>
  );
};

export default SocialButtons;
