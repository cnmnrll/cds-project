import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import bloobin from "../assets/images/bloobin.png";
import Classify from "../components/Classify";
import Explore from "../components/Explore";
import Landing from "../components/Landing";
import bg from "../assets/images/bg.png";

export default function HomePage() {
  const [isClassify, setIsClassify] = useState(false);
  const [isExplore, setIsExplore] = useState(false);
  const [selectedWaste, setSelectedWaste] = useState(null);

  useEffect(() => {
    if (selectedWaste) {
      setIsClassify(false);
      setIsExplore(true);
    }
  }, [selectedWaste]);

  return (
    <div className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-14 h-full flex flex-col justify-start items-center bg-gradient-to-b from-[#0C9AF3] to-[#002459] pt-5">
        <img src={bloobin} alt="bg" className="w-7 h-auto" />
      </div>
      <div className="w-full h-full relative">
        <div className="w-full h-full relative">
          <img src={bg} alt="bg" className="w-full h-full" />
          <motion.div
            layout
            className="z-10 absolute top-0 w-full h-full"
            animate={{
              top: isExplore ? 144 : 0,
              scale: isExplore ? 1.9 : 1,
              left: isExplore || isClassify ? "25%" : 0,
            }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 1,
            }}
          >
            <spline-viewer url="https://prod.spline.design/378qG2pHeQuxFSdZ/scene.splinecode"></spline-viewer>
          </motion.div>
        </div>

        <Explore
          isExplore={isExplore}
          selectedWaste={selectedWaste}
          onBack={() => {
            setIsExplore(false);
            setTimeout(async () => {
              setSelectedWaste(null);
            }, 300);
          }}
        />

        <Classify
          isClassify={isClassify}
          onBack={() => setIsClassify(false)}
          onSelectWaste={(waste) => setSelectedWaste(waste)}
        />

        <Landing
          isClassify={isClassify}
          selectedWaste={selectedWaste}
          onClassify={() => setIsClassify(true)}
          onSelectWaste={(waste) => setSelectedWaste(waste)}
        />
      </div>
    </div>
  );
}
