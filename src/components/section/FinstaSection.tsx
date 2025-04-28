import React from "react";
import FinstaLogo from "../../assets/images/Finsta.jpeg";
import FinstaPage from "../../assets/images/finsta-profilepage.png";
import FinstaPhone from "../../assets/images/finsta-iphone-picture-1.png";
import Logo4 from "../../assets/images/Finsta-lady.png";
import Logo5 from "../../assets/images/Finsta-Call.png";
// import { useRef } from "react";
// import { useInView } from "react-intersection-observer";
// import { useState, useEffect } from "react";
import StickyHeader from "./StickyHeader.tsx";
// import DashboardVideo from "../../assets/video/DashboardVideo.mp4";
import DashboardVideo from "../video/DashboardVideo.mp4";
// import JavascriptLogo from "../../assets/images/JavaScript-logo.png";
import TailwindLogo from "../../assets/images/tailwind-logo.png";
import GraphqlLogo from "../../assets/images/graphQL-logo.png";
import NativeLogo from "../../assets/images/react-native-logo.png";
import PostgresLogo from "../../assets/images/postgresql-logo.png";
import NodeLogo from "../../assets/images/node-js-logo.png";
import ReactLogo from "../../assets/images/logo512.png";
import ProjectDetails from "../ProjectDetails.tsx";
import PythonLogo from "../../assets/images/PythonLogo.png";
import TypescriptLogo from "../../assets/images/TypescriptLogo.png";

const FinstaSection = () => {
  return (
    <div className="flex flex-col w-screen mx-auto items-center pb-[4vw]">
      {/* Spacer for fixed header */}
      {/* <div ref={ref} className="h-1" /> */}

      <StickyHeader
        logo={FinstaLogo}
        year="2023-now"
        title="Finsta App"
        titleStyling="flex-nowrap"
        alt="finsta-dating-app"
        techstack={[
          { url: ReactLogo, alt: "React Logo", extraClasses: "object-cover" },
          { url: TypescriptLogo, alt: "React Logo" },
          {
            url: TailwindLogo,
            alt: "Tailwind Logo",
          },
          { url: NodeLogo, alt: "Node Logo" },
          { url: PostgresLogo, alt: "PostgresQL Logo" },
          { url: PythonLogo, alt: "Python Logo" },
          { url: GraphqlLogo, alt: "GraphQL Logo", extraClasses: "rounded-sm" },
        ]}
      />
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] justify-center">
        <p className=" w-full break-words text-xl text-custom-white pt-[2vw] font-custom opacity-75">
          A dating app developed for a client of Solutionize, where users set
          message rates and charge per interaction. I contributed to the
          front-end interface, creating a responsive, user-friendly experience.
          Additionally, I implemented new API routes with secure authorization
          protocols and updated Prisma schemas to support evolving features,
          enhancing the app’s data accuracy and functionality.
        </p>
      </div>

      <div className="flex lg:w-[30%]  phone:w-[60%] flex-row justify-center space-x-6 m-10  ">
        <img
          src={FinstaPage}
          className="  rounded-2xl"
          alt="Finsta-Mobile-Interface"
        />
        <img
          src={FinstaPhone}
          className=" flex  w-[40%] rounded-3xl  "
          alt="user-profile-phone-interface"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Profile Page
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80 justify-center">
          • Built dynamic user interface from Figma designs using React and
          Tailwind CSS. <br />• Used GraphQL to fetch only necessary data,
          improving loading speeds by 30%. <br />• Implemented conditional
          rendering logic across 10+ components to display user profiles
          intelligently.
          <br />• Updated Prisma schemas and backend data structures for new
          profile features.
          <br />• Ensured full integration with existing systems via error-free
          merges and thorough testing.
        </p>
      </div>
      <div className="flex lg:w-[30%] phone:w-[60%] flex-row justify-center space-x-6 m-10">
        <img
          src={Logo5}
          className="flex rounded-2xl border"
          alt="the-finsta-call-function"
        />
        <img
          src={Logo4}
          className=" flex  w-[40%] rounded-3xl  "
          alt="the-previous-profile-interface"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col space-y-10">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Metabase Dashboard (PostgresSQL)
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80 justify-center">
          • Designed and developed SQL queries to calculate metrics like total
          users, top spenders, and top earners. <br />
          • Built a visual dashboard using Metabase to display user and revenue
          metrics in real time. <br />
          • Optimized query performance by indexing key tables and writing
          efficient JOIN and GROUP BY statements. <br />
          • Used PostgreSQL as the database, integrating with Metabase for live
          data visualization. <br />
          • Created custom KPIs and filterable views to support business
          intelligence and decision-making. <br />
        </p>

        <video
          className="rounded-md object-cover w-full h-full"
          src={DashboardVideo}
          title="Dashboard video"
          playsInline
          autoPlay
          muted
          loop
        />
      </div>

      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Explore Page
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80 justify-center">
          • Designed a lightweight scoring model using Python and scikit-learn,
          ranking users based on engagement metrics like likes and conversion
          rates.
          <br />
          • Prototyped classification logic with logistic regression and
          decision trees to simulate visibility scoring.
          <br />
          • Connected the scoring prototype to live user data stored in
          PostgreSQL via Node.js/Express API endpoints.
          <br />
          • Set up early experiments using Hugging Face Transformers for future
          NLP-based user classification.
          <br />• Focused on scalable and lightweight design, laying the
          foundation for advanced machine learning and recommendation systems.
        </p>
      </div>
      <div className="flex lg:w-[30%]  phone:w-[60%] flex-row justify-center space-x-6 m-10 ">
        <div className="flex bg-custom-grey-3 p-8 rounded-lg w-full  items-center justify-center">
          <a
            href="https://apps.apple.com/us/app/finsta-chat/id6476054514"
            className="flex  break-all text-lg text-custom-white font-custom opacity-80 text-center underline flex-wrap"
          >
            https://apps.apple.com/finsta
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinstaSection;
