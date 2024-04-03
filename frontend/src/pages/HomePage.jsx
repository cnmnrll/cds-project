import axios from "axios";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { useRef, useState } from "react";
import PictureStack from "../assets/PictureStack";
import cardboard from "../assets/cardboard.png";
import plastic from "../assets/plastic.png";
import metal from "../assets/metal.png";
import trash from "../assets/trash.png";
import paper from "../assets/paper.png";
import glass from "../assets/glass.png";
import Loader from "../assets/Loader";
import Arrow from "../assets/Arrow";
import Cross from "../assets/Cross";
import bg from "../assets/bg.png";

export default function HomePage() {
  const uploadRef = useRef(null);
  const IMAGE_ENDPOINT = "http://localhost:5000/classify";
  const [isLoading, setIsLoading] = useState(false);
  const [isClassify, setIsClassify] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleUpload = async (file) => {
    setIsLoading(true);
    var reader = new FileReader();
    reader.onload = function (e) {
      setUploadedPhoto({
        id: 1,
        src: e.target.result,
      });
    };
    reader.readAsDataURL(file);

    try {
      let formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(IMAGE_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error classifying image:", error);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (uploadRef.current) uploadRef.current.value = "";
  };

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

          <div className="w-full flex flex-col space-y-7 p-7 bg-gray-100 rounded-lg">
            <div className="flex flex-row justify-between items-center">
              <p className="text-base font-medium">Classify Waste</p>
            </div>
            {!uploadedPhoto && (
              <div className="w-full grid grid-cols-3">
                <Step step="1" title="Upload" description="PNG or JPG" />
                <Step step="2" title="Classify" description="Type of waste" />
                <Step step="3" title="Recycle" description="How to recycle" />
              </div>
            )}
            <input
              ref={uploadRef}
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => handleUpload(e.target.files[0])}
              className="absolute invisible right-0 pointer-events-none"
            />
            {uploadedPhoto ? (
              <div className="relative">
                <img
                  id={uploadedPhoto.id}
                  src={uploadedPhoto.src}
                  alt=""
                  className="w-full h-72 object-cover object-center rounded-lg"
                />
                {!isLoading && (
                  <button
                    className="pressable absolute w-10 h-10 flex justify-center items-center rounded-full bg-white -top-4 -right-4 drop-shadow-lg"
                    onClick={() => setUploadedPhoto(null)}
                  >
                    <Cross className="w-3 h-auto" />
                  </button>
                )}
              </div>
            ) : (
              <button
                className="w-full h-72 flex flex-col justify-center items-center space-y-4 bg-blue-100 rounded-lg border border-blue-400 border-dotted"
                onClick={() => uploadRef.current.click()}
              >
                <PictureStack className="w-10 h-auto" />
                <p className="font-medium">Upload Photo</p>
              </button>
            )}
            {uploadedPhoto &&
              (isLoading ? (
                <div className="w-full flex flex-row justify-start items-center px-7 py-5 bg-blue-100 rounded-lg">
                  <div className="flex flex-row justify-center items-center space-x-3">
                    <p>Scanning</p>
                    <Loader className="animate-spin" />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col justify-center items-start px-7 py-5 space-y-7 bg-blue-100 rounded-lg">
                  <div className="flex flex-row justify-center items-center space-x-3">
                    <p>
                      {`This picture is classified as `}
                      <span className="font-semibold">{"prediction"}</span>
                    </p>
                  </div>
                  <button className="pressable flex flex-row justify-center items-center space-x-3">
                    <p className="text-zinc-600">Learn more</p>
                    <Arrow className="w-[6px] h-auto text-zinc-600" />
                  </button>
                </div>
              ))}
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
            className="pressable flex flex-row justify-center items-center space-x-7 py-4 px-6 bg-white rounded-lg"
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

function Step(props) {
  const { step, title, description } = props;
  return (
    <div className="w-full h-full flex flex-row justify-start items-center space-x-3">
      <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-400">
        <p className="text-white font-medium text-lg">{step}</p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <p className="font-medium">{title}</p>
        <p className="text-xs text-opacity-90">{description}</p>
      </div>
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
        <img src={image} alt="bg" className="w-full h-auto rounded-lg" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      </div>
    </button>
  );
}

Step.propTypes = {
  step: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
};

Waste.propTypes = {
  title: PropTypes.any,
  image: PropTypes.any,
};
