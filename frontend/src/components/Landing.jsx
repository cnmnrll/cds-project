import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { wastes } from "../static/enums";
import Arrow from "../assets/svgs/Arrow";

export default function Landing(props) {
  const { isClassify, selectedWaste, onClassify, onSelectWaste } = props;

  return (
    <motion.div
      className="z-20 absolute top-0 left-0 w-full h-full grid grid-cols-4 px-24"
      initial={{ opacity: 1 }}
      animate={{
        opacity: isClassify || selectedWaste ? 0 : 1,
        zIndex: isClassify || selectedWaste ? 20 : 30,
      }}
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
            Every day, waste suffocates ecosystems, pollutes waterways, and devastates 
            habitats, posing a dire threat to biodiversity and ecological balance. 
            Annually, mountains of garbage overwhelm landfills, leaching harmful toxins 
            into the soil and water.<br/> <br/>
            Our web application offers a powerful solution to address the pressing issue 
            of waste management and sustainability. With intuitive interfaces and harnessing 
            machine learning technology, our platform empowers users to make informed decisions 
            about waste categories and recycling methods.
          </p>
        </div>
        <button
          className="pressable flex flex-row justify-center items-center space-x-7 py-4 px-6 bg-white rounded-lg"
          onClick={() => onClassify && onClassify()}
        >
          <p className="text-sm font-medium">TAKE ACTION</p>
          <Arrow className="w-2 h-auto" />
        </button>
      </div>
      <div></div>
      <div></div>
      <div className="w-full h-full flex flex-col items-end space-y-10 py-28 overflow-y-scroll no-scrollbar">
        {wastes.map((waste, index) => (
          <Waste
            key={index}
            waste={waste}
            onClick={(waste) => onSelectWaste && onSelectWaste(waste)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function Waste(props) {
  const { waste, onClick } = props;
  return (
    <button
      className="pressable w-full flex flex-row justify-end items-center"
      onClick={() => onClick && onClick(waste)}
    >
      <div className="flex flex-col justify-normal items-end -space-y-2">
        <p className="z-10 text-white text-right text-lg font-semibold -mr-7">
          {waste.title}
        </p>
      </div>
      <div className="w-2/3 relative">
        <img src={waste.image} alt="bg" className="w-full h-auto rounded-lg" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>
    </button>
  );
}

Landing.propTypes = {
  isClassify: PropTypes.any,
  selectedWaste: PropTypes.any,
  onClassify: PropTypes.any,
  onSelectWaste: PropTypes.any,
};

Waste.propTypes = {
  waste: PropTypes.any,
  onClick: PropTypes.any,
};
