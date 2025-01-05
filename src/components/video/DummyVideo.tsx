import React, { useState, useRef } from "react";
import DummyVideo1 from "./DummyVideo1.mp4";

const DummyVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Initialize isPlaying with false
  const videoRef = useRef<HTMLVideoElement>(null); // Initialize videoRef

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the state
    }
  };

  return (
    <div className=" phone:items-center  inset-x-1/3 phone:justify-center phone:m-auto lg:absolute phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="rounded-lg object-cover w-full h-full"
        src={DummyVideo1}
        title="Intro video"
        playsInline
        loop
        controls={false} // Hide default controls
      />

      {/* Custom Play Button */}
      <button
        onClick={handlePlayPause}
        className={`absolute z-50 bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-50 bg-slate-100 text-black rounded-full p-2.5 shadow-md hover:bg-slate-200 transition ${
          isPlaying ? "bg-opacity-10" : "bg-opacity-100"
        }`}
      >
        {isPlaying ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
            aria-label="Pause button icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
            aria-label="Play button icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default DummyVideo;

// phone:items-center z-20 inset-x-1/3 phone:justify-center phone:m-auto lg:absolute phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain
