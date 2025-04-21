import React from "react";
import GithubLogo from "../assets/images/GithubLogo.png";

const GithubButton = ({ link }) => {
  return (
    <a
      href={link}
      className="flex bg-stone-600 rounded-lg phone:px-1 py:1 sm:px-4 sm:py-1 items-center transition-transform duration-300 hover:scale-125"
    >
      <img src={GithubLogo} className=" h-6 rounded-lg " />
    </a>
  );
};

export default GithubButton;
