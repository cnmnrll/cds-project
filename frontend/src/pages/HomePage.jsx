import { useState } from "react";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import cardboard from "../assets/cardboard.png";
import plastic from "../assets/plastic.png";
import metal from "../assets/metal.png";
import trash from "../assets/trash.png";
import paper from "../assets/paper.png";
import glass from "../assets/glass.png";
import Arrow from "../assets/Arrow";
import bg from "../assets/bg.png";

export default function HomePage() {
  const [isClassify, setIsClassify] = useState(false);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full relative">
        <img src={bg} alt="bg" className="w-full h-full" />
        <motion.div
          layout
          className={`z-10 absolute top-0 w-full h-full ${
            isClassify ? "left-1/4" : "left-0"
          }`}
        >
          <spline-viewer url="https://prod.spline.design/378qG2pHeQuxFSdZ/scene.splinecode"></spline-viewer>
        </motion.div>
      </div>

      <motion.div
        className="z-20 absolute top-0 left-0 w-full h-full grid grid-cols-2 px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isClassify ? 1 : 0, zIndex: isClassify ? 30 : 20 }}
      >
        <div className="w-full h-full flex flex-col justify-center items-start py-28 space-y-5">
          <button
            className="pressable flex flex-row justify-start items-center space-x-4"
            onClick={() => setIsClassify(false)}
          >
            <Arrow className="w-2 h-auto rotate-180 text-white" />
            <p className="text-white text-lg">Back</p>
          </button>
          <div className="w-full p-7 bg-white rounded-md">
            <p className="text-base font-medium">Classify Waste</p>
          </div>
        </div>
        <div></div>
      </motion.div>

      <motion.div
        className="z-20 absolute top-0 left-0 w-full h-full grid grid-cols-4 px-24"
        initial={{ opacity: 1 }}
        animate={{ opacity: isClassify ? 0 : 1, zIndex: isClassify ? 20 : 30 }}
      >
        <div className="w-full h-full flex flex-col justify-between items-start py-28">
          <div className="w-full flex flex-col justify-center items-start space-y-7">
            <div className="w-full flex flex-col justify-center items-start">
              <p className="text-white text-6xl font-semibold tracking-wider">
                Waste
              </p>
              <p className="text-white text-6xl font-semibold tracking-wider">
                Recycling
              </p>
            </div>
            <p className="text-white text-xs">
              Every day, waste suffocates ecosystems, pollutes water, and
              destroys habitats. Annually, mountains of garbage overwhelm
              landfills, poisoning our planet.
            </p>
          </div>
          <button
            className="pressable flex flex-row justify-center items-center space-x-7 py-4 px-6 bg-white rounded-md"
            onClick={() => setIsClassify(true)}
          >
            <p className="text-sm font-medium">TAKE ACTION</p>
            <Arrow className="w-2 h-auto" />
          </button>
        </div>
        <div></div>
        <div></div>
        <div className="w-full h-full flex flex-col items-end space-y-10 py-28 overflow-y-scroll no-scrollbar">
          <Waste title="Glass" image={glass} />
          <Waste title="Paper" image={paper} />
          <Waste title="Cardboard" image={cardboard} />
          <Waste title="Plastic" image={plastic} />
          <Waste title="Metal" image={metal} />
          <Waste title="Trash" image={trash} />
        </div>
      </motion.div>
    </div>
  );
}

function Waste(props) {
  const { title, image } = props;
  return (
    <button className="pressable w-full flex flex-row justify-end items-center">
      <div className="flex flex-col justify-normal items-end -space-y-2">
        <p className="z-10 text-white text-right text-lg font-semibold -mr-7">
          {title}
        </p>
        {title !== "Trash" && (
          <p className="z-10 text-white text-right text-lg font-semibold -mr-7">
            Waste
          </p>
        )}
      </div>
      <div className="w-2/3 relative">
        <img src={image} alt="bg" className="w-full h-auto rounded-md" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>
    </button>
  );
}

Waste.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
};
