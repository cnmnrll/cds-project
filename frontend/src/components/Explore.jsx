import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import Arrow2 from "../assets/svgs/Arrow2";

export default function Explore(props) {
  const { selectedWaste, onBack } = props;

  return (
    <motion.div
      className="z-20 absolute top-0 left-0 w-full h-full px-24 overflow-y-scroll pb-20"
      initial={{ opacity: 0 }}
      animate={{
        opacity: selectedWaste ? 1 : 0,
        zIndex: selectedWaste ? 30 : 20,
      }}
    >
      <div className="w-full flex flex-col justify-center items-start pt-56 space-y-9">
        <button className="pressable pr-5" onClick={() => onBack && onBack()}>
          <Arrow2 className="w-10 h-auto text-white" />
        </button>
        <p className="text-6xl font-medium text-white tracking-wider">
          {selectedWaste?.display}
        </p>
        <div className="w-full p-12 bg-white rounded-lg">
          <img
            src={selectedWaste?.img}
            alt="waste"
            className=" float-right w-96 h-auto rounded-lg ml-7 mb-7 mt-14"
          />
          <p className="text-base text-justify">
            <span className="font-medium text-lg">About</span>
            <br />
            <br />
            Ullamco qui velit deserunt non sit culpa. Quis ut mollit qui
            incididunt aliqua non sit. Sint ullamco nisi consequat excepteur non
            nisi magna ea tempor elit qui proident magna velit. Laborum
            cupidatat eu voluptate aliquip eu nulla ea incididunt voluptate
            veniam. Amet eu adipisicing proident labore officia est nisi magna
            qui fugiat deserunt eiusmod eu labore.
            <br />
            <br />
            Consectetur culpa cillum aute mollit commodo pariatur nulla aliqua
            exercitation dolore nisi non nostrud. Aute adipisicing proident enim
            aliqua enim et pariatur aliquip est minim exercitation non
            incididunt. Commodo nostrud laboris sunt labore do anim consequat
            sunt tempor. Sit tempor nulla veniam dolor amet exercitation qui
            amet deserunt esse commodo. Consequat dolore incididunt dolor aliqua
            quis dolor aliqua id reprehenderit in.
            <br />
            <br />
            <span className="font-medium text-lg">How to recycle?</span>
            <br />
            <br />
            Ullamco qui velit deserunt non sit culpa. Quis ut mollit qui
            incididunt aliqua non sit. Sint ullamco nisi consequat excepteur non
            nisi magna ea tempor elit qui proident magna velit. Laborum
            cupidatat eu voluptate aliquip eu nulla ea incididunt voluptate
            veniam. Amet eu adipisicing proident labore officia est nisi magna
            qui fugiat deserunt eiusmod eu labore.
            <br />
            <br />
            Consectetur culpa cillum aute mollit commodo pariatur nulla aliqua
            exercitation dolore nisi non nostrud. Aute adipisicing proident enim
            aliqua enim et pariatur aliquip est minim exercitation non
            incididunt. Commodo nostrud laboris sunt labore do anim consequat
            sunt tempor. Sit tempor nulla veniam dolor amet exercitation qui
            amet deserunt esse commodo. Consequat dolore incididunt dolor aliqua
            quis dolor aliqua id reprehenderit in.
            <br />
            <br />
            Culpa in nostrud enim culpa amet eu velit nulla enim occaecat
            aliquip. Ea mollit nisi pariatur sit irure amet nisi aliqua. Qui
            duis nostrud culpa ea officia sunt amet Lorem ex irure elit aliqua.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

Explore.propTypes = {
  selectedWaste: PropTypes.any,
  onBack: PropTypes.any,
};
