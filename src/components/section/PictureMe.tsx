import ArnoldSelfie from "../../assets/images/ArnoldSelfie.jpg";

const PictureMe = () => {
  return (
    <div className="phone:items-center z-20 inset-x-1/3 phone:justify-center phone:m-auto lg:absolute phone:w-[30vw] phone:h-[30vw] lg:w-[25vw] lg:h-[25vw]  rounded-full  pointer-events-auto object-contain overflow-hidden">
      <img
        className="rounded-lg object-cover w-full h-full"
        src={ArnoldSelfie}
        title="Selfie Picture"
        alt="Selfie-of-me-AI-generated"
      />
    </div>
  );
};

export default PictureMe;
