import QpointDevices from "../../assets/images/Q-point-all-devices.png";
import QpointLogo from "../../assets/images/Q-pointlogo.png";
import StickyHeader from "./StickyHeader";
import JavascriptLogo from "../../assets/images/JavaScript-logo.png";
import NativeLogo from "../../assets/images/react-native-logo.png";
import TypescriptLogo from "../../assets/images/TypescriptLogo.png";

const QpointSection = () => {
  return (
    <div className="flex flex-col w-screen mx-auto items-center pb-[4vw]">
      <StickyHeader
        title="Q-point Systems"
        alt="Q point logo"
        logo={QpointLogo}
        year="2022-2023"
        // isSticky={Sticky}
        techstack={[
          {
            url: NativeLogo,
            alt: "React Native Logo",
            extraClasses: "rounded-sm",
          },
          { url: TypescriptLogo, alt: "Typescript Logo" },
          { url: JavascriptLogo, alt: "Javascript Logo" },
        ]}
      />
      <div className="flex lg:w-[50%] sm:w-[60%] phone:w-[90%] flex-col justify-center">
        <p className=" w-full break-words text-xl text-custom-white pt-[2vw]">
          <span className="font-custom opacity-80">
            Contributed to the development of the admin panel for a{" "}
          </span>
          <span className="font-Roboto">self-service checkout system </span>{" "}
          <span className="font-custom opacity-80">
            designed for restaurant use, enabling seamless menu and order
            management. My role involved implementing front-end features and
            streamlining the interface to enhance usability for restaurant
            staff. I also added pagination to handle large datasets, allowing
            for quicker load times and easier navigation through extensive menu
            items.
          </span>
        </p>
      </div>
      <div className="flex lg:w-[30%]  sm:w-[60%] justify-center space-x-6 m-10">
        <img
          src={QpointDevices}
          className="flex rounded-2xl "
          alt="qpoint-dashboard-on-phone-tablet-and-self-checkout-machine"
        />
      </div>
      <div className="flex lg:w-[50%] sm:w-[60%] phone: w-[90%] flex-col ">
        <p>
          <span className="flex w-full break-words text-lg text-custom-white justify-center pt-[1vh] pb-[5vh] font-custom opacity-60">
            The User Customised Dashboard UI
          </span>
          <span className="flex  w-full break-words text-lg text-custom-white font-custom opacity-80 items-center">
            • Designed and built the Home Menu page using React Native,
            displaying food items with a dynamic and responsive layout.
            <br />• Created a custom layout in Adobe XD, aligning with the
            brand’s color palette and style guide.
            <br />• Integrated an animated banner and interactive UI elements
            like “Order Now” buttons and quantity selectors.
            <br />• Enhanced user engagement with smooth animations and
            intuitive interactions using React Native hooks.
            <br /> • Optimized the page for high-traffic performance, focusing
            on lightweight components and efficient state management.
          </span>
        </p>
      </div>
    </div>
  );
};

export default QpointSection;
