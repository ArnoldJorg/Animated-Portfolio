import { useInView } from "react-intersection-observer";
import FinstaSection from "./FinstaSection";
import QpointSection from "./QpointSection";

type WorkSectionProps = {
  onInViewChange: (inView: boolean, sectionName: string) => void;
};

const WorkSection = ({ onInViewChange }: WorkSectionProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  if (onInViewChange) onInViewChange(inView, "work");

  return (
    <div
      ref={ref}
      id="work-section"
      className=" text-white flex flex-col  w-screen mx-auto items-center "
    >
      <FinstaSection />
      <QpointSection />
    </div>
  );
};

export default WorkSection;
