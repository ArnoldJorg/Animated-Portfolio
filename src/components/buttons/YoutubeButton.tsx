import YoutubeLogo from "../assets/images/YoutubeLogo.png";

const YoutubeButton = ({ link }: { link: string }) => {
  return (
    <a
      href={link}
      className="px-4 py-1 bg-red-700  rounded-lg flex phone:px-1 py:1 sm:px-4 sm:py-1 items-cemter transition-transform duration-300 hover:scale-125 "
    >
      <img src={YoutubeLogo} className=" w-12 rounded-lg " />
    </a>
  );
};

export default YoutubeButton;
