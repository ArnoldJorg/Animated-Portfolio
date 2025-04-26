import React from "react";
import FinstaLogo from "../../assets/images/Finsta.jpeg";
import FinstaPage from "../../assets/images/finsta-profilepage.png";
import FinstaPhone from "../../assets/images/finsta-iphone-picture-1.png";
import Logo4 from "../../assets/images/Finsta-lady.png";
import Logo5 from "../../assets/images/Finsta-Call.png";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import StickyHeader from "./StickyHeader.tsx";
const FinstaSection = () => {
  return (
    <div className="flex flex-col w-screen mx-auto items-center pb-[4vw]">
      {/* Spacer for fixed header */}
      {/* <div ref={ref} className="h-1" /> */}

      <StickyHeader
        logo={FinstaLogo}
        year="2023-now"
        title="Finsta App"
        alt="finsta-dating-app"
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
          The Finsta User Profile Page
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
          Developed the Profile Page for a client called Finsta, following Figma
          designs to accurately implement a dynamic user interface. Utilized
          complex conditional logic to display content based on available data,
          such as setting a default profile icon or using gallery images when no
          icon was set. This involved updating data across 10 components,
          optimizing GraphQL queries to fetch only relevant data and improving
          loading speed by 30%. Additionally, I modified schemas and adjusted
          data properties across the project, ensuring seamless integration and
          error-free performance before merging with the main codebase.
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
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Complex Features and Seamless User Experiences
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
          Built features like the in-app Call System (powered by WebRTC) and a
          dynamic Like system with Stripe integration. Handled backend logic
          using Express and ensured smooth data flow between services and UI
          components.
          <br /> <br /> Additionally, I created a Like Feature that allows users
          to like photos with an optional payment system. This includes
          integration with Stripe for secure transactions, dynamic data updates
          using GraphQL, and responsive UI elements styled with Tailwind CSS.
          User profiles, including biographies and stats, are displayed via
          optimized API queries, ensuring smooth real-time updates. <br />{" "}
          <br /> These features highlight my ability to handle complex data
          flows and craft user-centric designs that combine functionality with
          an exceptional user experience.
        </p>
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col ">
        <h1 className="flex w-full break-words text-2xl text-custom-white font-Roboto justify-center pt-[3vh] pb-[2.5vh] opacity-95">
          Explore Page and advanced algorithms
        </h1>
        <p className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
          To improve user discovery, I proposed and prototyped a lightweight
          scoring algorithm for the Explore Page, ranking users based on
          engagement metrics (e.g. like count, conversion rates). This laid the
          groundwork for future classification logic or ML-based
          recommendations.
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
