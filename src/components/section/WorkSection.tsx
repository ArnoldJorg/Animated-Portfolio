import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import FinstaSection from "./FinstaSection.tsx";
import QpointSection from "./QpointSection.tsx";

const WorkSection = ({ onInViewChange }) => {
  const { ref, inView } = useInView({
    // threshold: 0.2,
    threshold: 0.2,
  });

  if (onInViewChange) onInViewChange(inView, "work");

  return (
    <div
      ref={ref}
      id="work-section"
      className=" text-white flex flex-col  w-screen mx-auto items-center"
    >
      <FinstaSection />
      <QpointSection />
    </div>
  );
};

export default WorkSection;
