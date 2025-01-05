import React from "react";
import JavascriptLogo from "../../assets/images/JavaScript-logo.png";
import TailwindLogo from "../../assets/images/tailwind-logo.png";
import GraphqlLogo from "../../assets/images/graphQL-logo.png";
import NativeLogo from "../../assets/images/react-native-logo.png";
import PostgresLogo from "../../assets/images/postgresql-logo.png";
import NodeLogo from "../../assets/images/node-js-logo.png";
import ReactLogo from "../../assets/images/logo512.png";
import { useInView } from "react-intersection-observer";
import AxiosLogo from "../../assets/images/axios-logo.png";
import NotePad from "../../assets/images/note-pad.jpg";
import PortfolioImage from "../../assets/images/portfolio-picture.png";
import Projects from "../Projects.tsx";
import ProjectDetails from "../ProjectDetails.tsx";

const MoreSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,

    // 0.9 is uni project
  });

  if (onInViewChange) onInViewChange(inView, "more");
  return (
    <div
      ref={ref}
      id="more-section"
      className="p-16 space-y-16 flex flex-col w-screen items-center "
    >
      <div className="flex lg:w-[50%] sm:w-[60%] flex-col justify-center ">
        <div className="flex  phone:flex-col lg:flex-row  sm:space-y-3 items-center text-center ">
          <h1 className="text-2xl text-white font-Roboto ">
            Personal Projects & Further Learning
          </h1>
        </div>
        <div className="w-full pt-[8vh] flex flex-col  items-center">
          <ProjectDetails
            name="My Portfolio"
            range="2024-now"
            icons={[
              { url: ReactLogo, alt: "React Logo" },
              { url: JavascriptLogo, alt: "JavaScript Logo" },
              { url: TailwindLogo, alt: "Tailwind CSS Logo" },
            ]}
          />

          <ProjectDetails
            name="Note Taking App"
            range="2024-now"
            icons={[
              { url: NativeLogo, alt: "React Native Logo" },
              { url: JavascriptLogo, alt: "JavaScript Logo" },
              { url: TailwindLogo, alt: "Tailwind CSS Logo" },
              {
                url: GraphqlLogo,
                alt: "GraphQL Logo",
                extraClasses: "rounded-sm",
              },
              {
                url: PostgresLogo,
                alt: "PostgreSQL Logo",
                extraClasses: "bg-white",
              },
              {
                url: NodeLogo,
                alt: "Node.js Logo",
                extraClasses: "bg-white  min-h-[25] min-w-[25]",
              },
              {
                url: AxiosLogo,
                alt: "Axios Logo",
                extraClasses: "bg-white   min-h-[25] min-w-[25] ",
              },
            ]}
          />
        </div>
      </div>
      <Projects
        images={[
          {
            url: PortfolioImage,
            alt: "Image-of-a-Portfolio",
            projectName: "Creative CV",
            textColor: "text-zinc-900",
            hoverText: "Click here to check out our project on Github!",
            hyperlink: "https://arnoldjorg.github.io/Animated-Portfolio/",
          },
          {
            url: NotePad,
            alt: "Image-of-a-Note",
            projectName: "Note App",
            textColor: "text-white",

            // hoverText: "Click here to check out our project on Github!",
          },
        ]}
      />
    </div>
  );
};

export default MoreSection;
