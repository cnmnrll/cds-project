import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Classify from "../components/Classify";
import Explore from "../components/Explore";
import Landing from "../components/Landing";
import bg from "../assets/images/bg.png";

export default function HomePage() {
  const [isClassify, setIsClassify] = useState(false);
  const [selectedWaste, setSelectedWaste] = useState(null);

  useEffect(() => {
    if (selectedWaste) {
      setIsClassify(false);
    }
  }, [selectedWaste]);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full relative">
        <img src={bg} alt="bg" className="w-full h-full" />
        <motion.div
          layout
          className="z-10 absolute top-0 w-full h-full"
          animate={{
            top: selectedWaste ? 144 : 0,
            scale: selectedWaste ? 1.9 : 1,
            left: selectedWaste || isClassify ? "25%" : 0,
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
        selectedWaste={selectedWaste}
        onBack={() => setSelectedWaste(null)}
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
  );
}
