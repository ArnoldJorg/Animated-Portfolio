import React from "react";

const VideoPlayer = () => {
  return (
    <iframe
      // src={Logo}
      className=" phone:items-center z-20 inset-x-1/3 phone:justify-center phone:m-auto lg:absolute phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain  "
      // width="100"
      // height="100"
      // alt="react-image"
      src="https://www.youtube.com/embed/BwPo9XGWpFM"
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
{
  /* <video
src='https://ik.imagekit.io/ikmedia/example_video.mp4'
width='1440'
height='680'
/> */
}
