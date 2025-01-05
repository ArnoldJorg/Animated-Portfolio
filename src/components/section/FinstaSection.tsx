import React from "react";
import FinstaLogo from "../../assets/images/Finsta.jpeg";
import FinstaPage from "../../assets/images/finsta-profilepage.png";
import FinstaPhone from "../../assets/images/finsta-iphone-picture-1.png";
import Logo4 from "../../assets/images/Finsta-lady.png";
import Logo5 from "../../assets/images/Finsta-Call.png";

const FinstaSection = () => {
  return (
    <div className="flex flex-col w-screen mx-auto items-center pb-[4vw] ">
      {/* Spacer for fixed header */}

      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col justify-center">
        <div
          id="work-title"
          className="flex phone:flex-col lg:flex-row items-center sm:space-y-1 lg:justify-between py-[1vw] rounded-md"
          //   ${
          //   isSticky
          //     ? " fixed lg:w-[50%] phone:max-lg:w-[100%] phone:max-lg:inset-x-0 shadow-black shadow-[0px_18px_14px] phone:w-[90%] top-0 translate-y-0 z-10  bg-black transition-transform duration-500 "
          //     : " -translate-y-10"
          // }`}
        >
          <div className="flex items-center space-x-3">
            <img
              src={FinstaLogo}
              width="50"
              height="50"
              className=" rounded-xl"
              alt="finsta-logo"
            />{" "}
            <h1 className="text-3xl font-Roboto"> Finsta Chat App</h1>
          </div>
          <div className="rounded-full bg-black border-2 items-center border-custom-grey-3 lg:justify-end px-3 p-1 ">
            <p className="text-xs">2023-2024</p>
          </div>
        </div>
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
          One of the most rewarding aspects of my work has been implementing
          advanced app features that integrate front-end responsiveness with
          robust backend functionality. For example, I developed a Call Feature
          where users can seamlessly initiate and manage calls directly within
          the app, powered by WebRTC for real-time communication. On the
          backend, Node.js and Express handle authentication and session
          management, while PostgreSQL ensures reliable logging of call
          histories. <br /> <br /> Additionally, I created a Like Feature that
          allows users to like photos with an optional payment system. This
          includes integration with Stripe for secure transactions, dynamic data
          updates using GraphQL, and responsive UI elements styled with Tailwind
          CSS. User profiles, including biographies and stats, are displayed via
          optimized API queries, ensuring smooth real-time updates. <br />{" "}
          <br /> These features highlight my ability to handle complex data
          flows and craft user-centric designs that combine functionality with
          an exceptional user experience.
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
