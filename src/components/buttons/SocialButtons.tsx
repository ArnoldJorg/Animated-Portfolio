import GradientButton from "./GradientButton";
import { useState, useEffect } from "react";
import ArrowIcon from "../icons/ArrowIcon";

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
      <GradientButton
        name="LinkedIn"
        link="https://www.linkedin.com/in/arnold-j%C3%B6rg-m/"
        arrowIcon={ArrowIcon}
      />
      <GradientButton
        name="Whats App"
        link="https://wa.me/+447983919019"
        arrowIcon={ArrowIcon}
      />
      <GradientButton
        name="Github"
        link="https://github.com/ArnoldJorg"
        arrowIcon={ArrowIcon}
      />
      {!isSmallScreen && <div className="flex-grow" />}
      {!isSmallScreen && (
        <h1 className="flex text-5xl shrink-0 sm:block">🚀🚀</h1>
      )}
    </div>
  );
};

export default SocialButtons;
