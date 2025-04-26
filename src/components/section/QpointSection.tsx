import React from "react";
import QpointDevices from "../../assets/images/Q-point-all-devices.png";
import QpointLogo from "../../assets/images/Q-pointlogo.png";
import StickyHeader from "./StickyHeader.tsx";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const QpointSection = () => {
  return (
    <div className="flex flex-col w-screen mx-auto items-center pb-[4vw]">
      <StickyHeader
        title="Q-point Systems"
        alt="Q point logo"
        logo={QpointLogo}
        year="2022-2023"
        // isSticky={Sticky}
      />
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col justify-center">
        <p className=" w-full break-words text-xl text-custom-white pt-[2vw]">
          <span className="font-custom opacity-80">
            Contributed to the development of the admin panel for a{" "}
          </span>
          <span className="font-Roboto">self-service checkout system </span>{" "}
          <span className="font-custom opacity-80">
            designed for restaurant use, enabling seamless menu and order
            management. My role involved implementing front-end features and
            streamlining the interface to enhance usability for restaurant
            staff. I also added pagination to handle large datasets, allowing
            for quicker load times and easier navigation through extensive menu
            items.
          </span>
        </p>
      </div>
      <div className="flex lg:w-[30%]  sm:w-[60%] justify-center space-x-6 m-10">
        <img
          src={QpointDevices}
          className="flex rounded-2xl "
          alt="qpoint-dashboard-on-phone-tablet-and-self-checkout-machine"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] phone: w-[90%] flex-col ">
        <p>
          <span className="flex w-full break-words text-lg text-custom-white justify-center pt-[1vh] pb-[5vh] font-custom opacity-60">
            The User Customised Dashboard UI
          </span>
          <span className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80">
            One of my key contributions was designing and building the Home Menu
            page, displaying all food items with a user-friendly interface. I
            conceptualized the layout using Adobe XD, aligning with our team’s
            color scheme chosen through trial and improvement. This page
            featured a dynamic banner at the top, adding visual appeal with a
            moving image. I also added interactive buttons like “Order Now” and
            quantity selectors for a streamlined ordering experience, creating a
            smooth, engaging page tailored to high-traffic use.
          </span>
        </p>
      </div>
    </div>
  );
};

export default QpointSection;
