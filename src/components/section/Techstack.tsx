import React from "react";
import JavascriptLogo from "../../assets/images/JavaScript-logo.png";
import TailwindLogo from "../../assets/images/tailwind-logo.png";
import NodeLogo from "../../assets/images/node-js-logo.png";
import ReactLogo from "../../assets/images/logo512.png";
import TorchLogo from "../../assets/images/TorchLogo.png";
import TensorflowLogo from "../../assets/images/TensorflowLogo.png";
import ScikitLearnLogo from "../../assets/images/ScikitLearnLogo.png";
import PythonLogo from "../../assets/images/PythonLogo.png";
import PandasLogo from "../../assets/images/PandasLogo.png";
import NumpyLogo from "../../assets/images/NumpyLogo.png";
import TypescriptLogo from "../../assets/images/GPTLogo.png";
import ScrollAnimation from "./ScrollAnimation.tsx";

const Techstack = () => {
  return (
    <div className="flex group">
      {/* first div */}
      <ScrollAnimation
        icons={[
          { url: JavascriptLogo },
          { url: TypescriptLogo },
          { url: ReactLogo },
          { url: TailwindLogo },
          { url: NodeLogo },
          { url: PythonLogo },
          { url: PandasLogo },
          { url: NumpyLogo },
          { url: TensorflowLogo },
          { url: TorchLogo },
          { url: ScikitLearnLogo },
        ]}
      />
      {/* second div */}
      <ScrollAnimation
        icons={[
          { url: JavascriptLogo },
          { url: TypescriptLogo },
          { url: ReactLogo },
          { url: TailwindLogo },
          { url: NodeLogo },
          { url: PythonLogo },
          { url: PandasLogo },
          { url: NumpyLogo },
          { url: TensorflowLogo },
          { url: TorchLogo },
          { url: ScikitLearnLogo },
        ]}
      />
      <ScrollAnimation
        icons={[
          { url: JavascriptLogo },
          { url: TypescriptLogo },
          { url: ReactLogo },
          { url: TailwindLogo },
          { url: NodeLogo },
          { url: PythonLogo },
          { url: PandasLogo },
          { url: NumpyLogo },
          { url: TensorflowLogo },
          { url: TorchLogo },
          { url: ScikitLearnLogo },
        ]}
      />
    </div>
  );
};

export default Techstack;
