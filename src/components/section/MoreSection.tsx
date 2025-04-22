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
import TorchLogo from "../../assets/images/TorchLogo.png";
import TensorflowLogo from "../../assets/images/TensorflowLogo.png";
import ScikitLearnLogo from "../../assets/images/ScikitLearnLogo.png";
import PythonLogo from "../../assets/images/PythonLogo.png";
import PlotlyLogo from "../../assets/images/PlotlyLogo.png";
import PandasLogo from "../../assets/images/PandasLogo.png";
import NumpyLogo from "../../assets/images/NumpyLogo.png";
import NltkLogo from "../../assets/images/NLTK.png";
// fff
import MatplotLibLogo from "../../assets/images/MatplotlibLogo.png";
import HuggingFaceLogo from "../../assets/images/HuggingFaceLogo.png";
import GPTLogo from "../../assets/images/GPTLogo.png";
import TypescriptLogo from "../../assets/images/GPTLogo.png";

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
            range="2024 Sept - Dec"
            icons={[
              { url: ReactLogo, alt: "React Logo" },
              { url: JavascriptLogo, alt: "JavaScript Logo" },
              { url: TailwindLogo, alt: "Tailwind CSS Logo" },
            ]}
          />

          <ProjectDetails
            name="Data Science"
            range="2024 Dec - Jan"
            icons={[
              { url: PythonLogo, alt: "Python Logo" },
              { url: PandasLogo, alt: "Pandas Logo" },
              { url: NumpyLogo, alt: "Numpy Logo" },
            ]}
          />
          <ProjectDetails
            name="Creative NLP"
            range="2025 Jan - Apr"
            icons={[
              { url: PythonLogo, alt: "Python Logo" },
              { url: PandasLogo, alt: "Pandas Logo" },
              { url: NumpyLogo, alt: "Numpy Logo" },
              {
                url: NltkLogo,
                alt: "NLTK Logo",
                extraClasses: "rounded-sm",
              },
              {
                url: ScikitLearnLogo,
                alt: "Scikit-Learn Logo",
                extraClasses: "bg-white",
              },
              {
                url: MatplotLibLogo,
                alt: "MatplotLib Logo",
                extraClasses: "bg-white  min-h-[25] min-w-[25]",
              },
              {
                url: PlotlyLogo,
                alt: "PlotlyLogo Logo",
                extraClasses: "bg-white   min-h-[25] min-w-[25] ",
              },
              {
                url: TorchLogo,
                alt: "Torch Logo",
                extraClasses: "bg-white   min-h-[25] min-w-[25] ",
              },
              {
                url: TensorflowLogo,
                alt: "Tensorflow Logo",
                extraClasses: "bg-white   min-h-[25] min-w-[25] ",
              },
              {
                url: HuggingFaceLogo,
                alt: "HuggingFace Logo",
                extraClasses: "bg-white   min-h-[25] min-w-[25] ",
              },
            ]}
          />
        </div>
      </div>
      {/* <Projects
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
      /> */}

      <div className="flex overflow-hidden group">
        {/* first div */}
        <div className=" h-48 border-blue-500 w-screen flex flex-row items-center gap-x-8 justify-center animate-loop-scroll pl-8 group-hover:paused">
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1   ">
              <img
                src={JavascriptLogo}
                className="h-24 w-24 p-4 hover:animate-pulse"
              />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ReactLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TailwindLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NodeLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TypescriptLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PandasLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NumpyLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TensorflowLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PostgresLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TorchLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>

          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ScikitLearnLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
        </div>
        {/* second div */}
        <div className=" h-48 border-blue-500 w-screen flex flex-row items-center gap-x-8 justify-center animate-loop-scroll pl-8 group-hover:paused">
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img
                src={JavascriptLogo}
                className="h-24 w-24 p-4 hover:animate-pulse"
              />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ReactLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TailwindLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NodeLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TypescriptLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PandasLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NumpyLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TensorflowLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PostgresLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TorchLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>

          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ScikitLearnLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
        </div>
        {/* third */}

        <div className=" h-48 border-blue-500 w-screen flex flex-row items-center gap-x-8 justify-center animate-loop-scroll pl-8 group-hover:paused">
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img
                src={JavascriptLogo}
                className="h-24 w-24 p-4 hover:animate-pulse "
              />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ReactLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TailwindLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NodeLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TypescriptLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PandasLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={NumpyLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TensorflowLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={PostgresLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={TorchLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>

          <div className="card-wrapper h-32 w-32 flex ">
            <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
              <img src={ScikitLearnLogo} className="h-24 w-24 p-4 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
