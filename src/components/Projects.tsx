import React from "react";

type image = {
  url: string;
  alt: string;
  textColor: string;
  projectName: string;
  hoverText: string;
  hyperlink: string;
};
type imagesProps = {
  projectName: string;
  textColor: string;
  images: image[];
  hoverText: string;
};

const Projects = ({ images = [] }: imagesProps) => {
  return (
    <div className="flex phone:w-full h-full  lg:flex-row phone:flex-col justify-center lg:space-x-6 phone:max-lg:space-y-6 m-10 phone:max-lg:items-center">
      {images.map((image, i) => (
        <a
          key={i}
          href={image.hyperlink}
          className=" relative flex lg:w-[30%] sm:w-[60%] phone:w-[80%] rounded-2xl border group hover:opacity-80 cursor-pointer"
        >
          <img
            src={image.url}
            className="object-cover rounded-2xl "
            alt={image.alt}
            // "Portfolio-Image"
          />

          <p
            className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-opacity-0 ${image.textColor} group-hover:text-opacity-80  select-none pointer-events-none text-center`}
          >
            <span className=" text-5xl font-Roboto flex ">
              {image.projectName}
            </span>
            <span className="flex text-lg font-Caveat ">{image.hoverText}</span>
          </p>
        </a>
      ))}
    </div>
  );
};

export default Projects;
