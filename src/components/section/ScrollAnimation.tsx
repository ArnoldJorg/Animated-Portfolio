interface Icon {
  url: string;
  alt: string;
}

interface IconsProps {
  icons: Icon[];
}
const ScrollAnimation = ({ icons }: IconsProps) => {
  return (
    <div className=" h-32 min-w-screen flex flex-row items-center gap-x-8 justify-center animate-loop-scroll pl-8 group-hover:paused">
      {icons.map((icon, i) => (
        <div key={i} className="card-wrapper h-full w-32 flex ">
          <div className="card-content flex items-center justify-center text-xs flex-row space-x-1   ">
            <img
              src={icon.url}
              alt={icon.alt}
              className="h-24 w-24 p-4 hover:animate-pulse object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollAnimation;
