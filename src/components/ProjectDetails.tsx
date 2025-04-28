import React from "react";
import ArrowIcon from "./icons/ArrowIcon.tsx";
import YoutubeLogo from "../assets/images/YoutubeLogo.png";
import GithubLogo from "../assets/images/GithubLogo.png";
import YoutubeButton from "./YoutubeButton.tsx";
import { useState } from "react";
import GithubButton from "./GithubButton.tsx";

type Icon = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  extraClasses?: string;
};
type ProjectProps = {
  name: string;
  range: string;
  icons: Icon[];
};

const linkMap: { [key: string]: string } = {
  "My Portfolio": "https://www.youtube.com/watch?v=BwPo9XGWpFM",
  // "Data Science": "https://www.youtube.com/watch?v=BwPo9XGWpFM",
  // Add more titles + links here as needed
};

const gitHubMap: { [key: string]: string } = {
  "My Portfolio":
    "https://github.com/ArnoldJorg/Animated-Portfolio/tree/master",
  "Data Science": "https://github.com/ArnoldJorg/Data-Science",
  "Creative NLP": "https://github.com/ArnoldJorg/NLP",
};

const ProjectDetails = ({ name, range, icons = [] }: ProjectProps) => {
  const targetLink = linkMap[name];
  const gitHubLink = gitHubMap[name];

  return (
    <div className="w-full py-6  text-white flex flex-row m-4 border-opacity-25 border-b border-white">
      <p className="flex-1 ">
        <div className="flex flex-col">
          <div className="flex-1 flex-row">
            <a
              href={gitHubLink}
              className="flex font-Roboto border-green-500 gap-x-1 items-center"
            >
              {name}
              <ArrowIcon size="size-4 flex" />
            </a>
          </div>
          <p className="flex-1 font-custom opacity-80">{range}</p>
        </div>
      </p>

      <div className="flex flex-1 justify-end">
        <div className="flex flex-col phone:gap-y-6 gap-y-8 phone:space-y-1">
          <div className="flex-row flex flex-wrap sm:space-x-1 gap-1 justify-end">
            {icons.map((icon, i) => (
              <img
                key={i}
                src={icon.url}
                className={`flex rounded-lg flex-shrink-0 object-contain ${
                  icon.extraClasses || ""
                }`}
                alt={icon.alt}
                style={{
                  width: `${icon.width || 25}px`,
                  height: `${icon.height || 25}px`,
                  minWidth: `${icon.width || 25}px`,
                  minHeight: `${icon.height || 25}px`,
                }}
              />
            ))}
          </div>
          {/* add link 1, 2 & 3 maybe an array logic later */}
          <div className="flex flex-row justify-end gap-x-4 phone:gap-x-2">
            {/* {targetLink && <YoutubeButton link={targetLink} />} */}
            {gitHubLink && <GithubButton link={gitHubLink} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
