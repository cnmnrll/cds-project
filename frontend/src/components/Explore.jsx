import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import Arrow2 from "../assets/svgs/Arrow2";

export default function Explore(props) {
  const { selectedWaste, isExplore, onBack } = props;

  return (
    <motion.div
      className="z-20 absolute top-0 left-0 w-full h-full px-24 overflow-y-scroll pb-20"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isExplore ? 1 : 0,
        zIndex: isExplore ? 30 : 20,
      }}
    >
      <div className="w-full flex flex-col justify-center items-start pt-64 space-y-9">
        <button className="pressable pr-5" onClick={() => onBack && onBack()}>
          <Arrow2 className="w-10 h-auto text-white" />
        </button>
        <p className="text-6xl font-medium text-white tracking-wider">
          {selectedWaste?.fullTitle}
        </p>
        <div className="w-full p-12 bg-white rounded-lg">
          <img
            src={selectedWaste?.image}
            alt="waste"
            className=" float-right w-96 h-auto rounded-lg ml-7 mb-7 mt-14"
          />
          <p className="text-base text-justify">
            <span className="font-medium text-lg">About</span>
            <br />
            <br />
            {selectedWaste?.about}
            <br />
            <br />
            <span className="font-medium text-lg">How to recycle?</span>
            <br />
            <br />
            {selectedWaste?.recycle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

Explore.propTypes = {
  selectedWaste: PropTypes.any,
  isExplore: PropTypes.any,
  onBack: PropTypes.any,
};
