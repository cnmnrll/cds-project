import axios from "axios";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { wastes } from "../static/enums";
import { useRef, useState } from "react";
import PictureStack from "../assets/svgs/PictureStack";
import border from "../assets/images/border.png";
import Loader from "../assets/svgs/Loader";
import Arrow from "../assets/svgs/Arrow";
import Cross from "../assets/svgs/Cross";

export default function Classify(props) {
  const { isClassify, onBack, onSelectWaste } = props;

  const IMAGE_ENDPOINT = "http://localhost:5000/classify";
  const uploadRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleUpload = async (file) => {
    setIsLoading(true);

    try {
      let formData = new FormData();
      formData.append("image", file);
      const response = await axios.post(IMAGE_ENDPOINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPrediction(response.data.prediction);

      // display uploaded image
      let reader = new FileReader();
      reader.onload = function (e) {
        setUploadedPhoto({
          id: 1,
          src: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error classifying image:", error);
      alert(`Error classifying image: ${error}`);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (uploadRef.current) uploadRef.current.value = "";
  };

  const getPredictedWasteIndex = (prediction) => {
    const idx = wastes.findIndex(
      (waste) => waste.title.toLowerCase() === prediction.toLowerCase()
    );
    return idx;
  };

  const clearStates = () => {
    setPrediction(null);
    setUploadedPhoto(null);
  };

  return (
    <motion.div
      className="z-20 absolute top-0 left-0 w-full h-full grid grid-cols-2 px-24 overflow-y-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: isClassify ? 1 : 0, zIndex: isClassify ? 30 : 20 }}
    >
      <div className="w-full h-full flex flex-col justify-center items-start py-28 space-y-5">
        <button
          className="pressable flex flex-row justify-start items-center space-x-4"
          onClick={() => {
            clearStates();
            onBack && onBack();
          }}
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
            <div className="w-full flex justify-center items-center">
              <button
                className="w-fit relative"
                onClick={() => uploadRef.current.click()}
              >
                <img src={border} alt="border" className="h-72 w-auto" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-4 bg-blue-200/50 rounded-lg">
                  <PictureStack className="w-10 h-auto" />
                  <p className="font-medium">Upload Photo</p>
                </div>
              </button>
            </div>
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
                    <span className="font-semibold">{prediction}</span>
                  </p>
                </div>
                <button
                  className="pressable flex flex-row justify-center items-center space-x-3"
                  onClick={() => {
                    clearStates();
                    onSelectWaste &&
                      onSelectWaste(wastes[getPredictedWasteIndex(prediction)]);
                  }}
                >
                  <p className="text-zinc-600">Learn more</p>
                  <Arrow className="w-[6px] h-auto text-zinc-600" />
                </button>
              </div>
            ))}
        </div>
      </div>
      <div></div>
    </motion.div>
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

Classify.propTypes = {
  isClassify: PropTypes.any,
  onSelectWaste: PropTypes.any,
  onBack: PropTypes.any,
};

Step.propTypes = {
  step: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
};
