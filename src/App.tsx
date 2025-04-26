import React, { useState } from "react";
import AboutSection from "./components/section/AboutSection.tsx";
import WorkSection from "./components/section/WorkSection.tsx";
import MoreSection from "./components/section/MoreSection.tsx";
import NavigationBar from "./components/NavigationBar.tsx";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const handleInViewChange = (inView, section) => {
    if (inView) {
      setActiveSection(section);
    }
  };

  return (
    <div className=" bg-black  w-screen">
      <div className="z-30  w-screen bottom-6 flex items-center justify-center fixed ">
        <NavigationBar activeSection={activeSection} />
      </div>
      <AboutSection onInViewChange={handleInViewChange} />
      <WorkSection onInViewChange={handleInViewChange} />
      <MoreSection onInViewChange={handleInViewChange} />
    </div>
  );
}

export default App;
