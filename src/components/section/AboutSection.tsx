import React from "react";
import GradientButton from "../GradientButton.tsx";
import VideoPlayer from "../video/VideoPlayer.tsx";
import QpointLogo from "../../assets/images/Q-pointlogo.png";
import BorderAnimation from "../video/BorderAnimation.tsx";
import { useInView } from "react-intersection-observer";
import ArrowAnimation from "../video/ArrowAnimation.MP4";
import DummyVideo from "../video/DummyVideo.tsx";
// import PictureMe from "./PictureMe.tsx";
import CV from "../../../public/Arnold Jorg M CV.docx";

// always check what branch I am in - dev or master - do not merge until I know (or commmit)

const AboutSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  if (onInViewChange) onInViewChange(inView, "about");

  return (
    <div
      ref={ref}
      id="about-section"
      className=" pt-[6vw] pb-[6vw] w-screen scroll-smooth"
    >
      <div className="flex flex-col items-center justify-center min-h-full ">
        <div className=" flex lg:flex-row lg:h-[70%] phone:w-full phone:max-lg:h-full lg:w-3/4 phone:flex-col phone:justify-center phone:max-lg:items-center ">
          <div className="lg:w-full sm:w-[85%] phone:w-[90%] lg:h-full items-center justify-center phone:order-2 lg:order-1 break-words ">
            <div className="flex text-white flex-col">
              <h1 className="items-center justify-center w-full  text-3xl font-Roboto ">
                Arnold Mobio
              </h1>
              <h1 className="items-center justify-center w-full text-3xl text-custom opacity-80 font-InterBold">
                Software Engineer
              </h1>
              <div className="flex flex-row my-2 ">
                <img
                  src={QpointLogo}
                  width="40"
                  height="40"
                  className="mr-7 my-6 rounded-xl flex items-center justify-center"
                  alt="Q-point Logo"
                />
                <p className="font-Roboto flex  mx-2 my-7  justify-center items-center text-xl bg-gray-600 px-2 rounded-xl">
                  {"<solutionize/>"}
                </p>
              </div>
              <p className=" w-full break-words text-xl text-custom-white font-custom">
                <span className="opacity-75">
                  {" "}
                  Hello there! My name is Arnold, and I’m a{" "}
                </span>{" "}
                <span className="font-Roboto">Front-End Developer</span>
                <span className="opacity-75">
                  , with a passion for crafting intuitive and responsive web
                  applications. <br /> <br /> I’ve always been fascinated by
                  technology and how it shapes the way we interact with the
                  world, which inspired me to dive deep into software
                  development. In my journey so far, I’ve built and optimized
                  user interfaces using tools like{" "}
                </span>
                <span className="font-Roboto">React</span>,
                <span className="font-Roboto">Typescript</span>, and{" "}
                <span className="font-Roboto">Tailwind</span>{" "}
                <span className="opacity-75">
                  , collaborated on backend systems with{" "}
                </span>
                <span className="font-Roboto">Node.js </span> and{" "}
                <span className="font-Roboto">Prisma</span>
                <span className="opacity-75">
                  , and worked with teams to deliver scalable and impactful
                  solutions. Whether it’s translating designs into seamless user
                  experiences or solving complex problems, I love turning ideas
                  into reality.
                </span>
              </p>
              <div></div>
              <div className="phone:grid phone:grid-cols-3 phone:gap-2 lg:flex lg:space-x-4 lg:justify-start flex-row phone:my-4 lg:my-8 sm:w-[500px]">
                <GradientButton
                  name="CV/Resume"
                  link="./Arnold Jorg M CV.docx"
                  download="Arnold_Mobio_CV.docx"
                  // commented download out as a link is more accessible as not everybody will have word to view the file.
                  uploadIcon={true}
                />
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
              </div>
            </div>
          </div>
          <div className="relative w-full h-full items-center justify-center phone:order-1 lg:order-2 phone:mb-10 ">
            <BorderAnimation />
            <VideoPlayer />
            {/* <DummyVideo /> */}

            {/* <PictureMe /> */}
            <video
              src={ArrowAnimation}
              autoPlay
              loop
              muted
              playsInline
              className="  grayscale z-5 lg:w-[12vw] lg:h-[12vw] sm:w-[24vw] sm:h-[24vw] phone:w-[20vw] phone:h-[20vw] lg:rotate-90 phone:rotate-160 absolute min-[1375px]:top-[calc(50%+19vw)] min-[1375px]:left-[37%] transform -translate-x-1/2 lg:top-[calc(50%+20vw)] lg:left-[40%] sm:max-[1375px]:top-[calc(0%+1vw)] phone:top-[calc(10%+1vw)] sm:max-[1375px]:left-[27%] phone:max-[1375px]:left-[28%] "
              // add here the px where the arrow should move away from the text - range should be 1024-1175 px
            />
            <h2 className="z-5  text-white rotate-315  absolute lg:top-[calc(50%+18vw)] lg:left-[27%] phone:top-[10%] phone:left-[12%] transform -translate-x-1/2 font-Caveat  phone:text-lg sm:text-2xl opacity-75">
              Let me <br /> introduce <br /> myself
            </h2>
          </div>
        </div>
      </div>
      {/* marking when it was perfect */}
    </div>
  );
};

export default AboutSection;
