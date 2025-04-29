interface GradientButtonProps {
  name: string;
  link: string;
  download?: string;
  downloadIcon?: React.FC;
  arrowIcon?: React.FC;
}

const GradientButton = ({
  name,
  link,
  download,
  downloadIcon: DownloadIcon,
  arrowIcon: ArrowIcon,
}: GradientButtonProps) => {
  return (
    <a href={link} download={download} className="flex  hover:opacity-90  ">
      <div className="card-wrapper h-[40px] w-[100px] ">
        <div className="card-content flex items-center justify-center text-xs flex-row space-x-1">
          {DownloadIcon && <DownloadIcon />}
          {ArrowIcon && <ArrowIcon />}

          <p className="font-semibold text-custom-white  flex items-end">
            {name}
          </p>
        </div>
      </div>
    </a>
  );
};

export default GradientButton;
