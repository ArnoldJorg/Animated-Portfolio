import { useState, useRef } from "react";
import PortfolioVideo from "./Portfolio_video_compressed.mp4";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Initialize isPlaying with false
  const videoRef = useRef<HTMLVideoElement>(null); // Initialize videoRef

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="phone:items-center z-20 inset-x-1/3 phone:justify-center phone:m-auto lg:absolute phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain overflow-hidden">
      <video
        ref={videoRef}
        className="rounded-lg object-cover w-full h-full"
        src={PortfolioVideo}
        title="Intro video"
        playsInline
        controls={false}
        onClick={handlePlayPause}
      />
      {!isPlaying && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
          onClick={handlePlayPause}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="white"
            className="w-16 h-16 bg-black bg-opacity-50 rounded-full p-4"
          >
            <polygon points="70,55 70,145 145,100" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
