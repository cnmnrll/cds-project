import bg from "../assets/bg.png";

export default function HomePage() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full relative">
        <img src={bg} alt="bg" className="w-full h-full" />
        <div className="z-10 absolute top-0 left-0 w-full h-full">
          <spline-viewer url="https://prod.spline.design/378qG2pHeQuxFSdZ/scene.splinecode"></spline-viewer>
        </div>
      </div>
      <div className="z-20 absolute top-0 left-0 w-full h-full grid grid-cols-4 px-24">
        <div className="w-full h-full flex flex-col justify-between items-start py-28">
          <div className="w-full flex flex-col justify-center items-start space-y-7">
            <div className="w-full flex flex-col justify-center items-start">
              <p className="text-white text-6xl font-medium">Waste</p>
              <p className="text-white text-6xl font-medium">Recycling</p>
            </div>
            <p className="text-white text-xs">
              Every day, waste suffocates ecosystems, pollutes water, and
              destroys habitats. Annually, mountains of garbage overwhelm
              landfills, poisoning our planet.
            </p>
          </div>
          <button className="pressable py-4 px-6 bg-white rounded-md">
            <p className="text-sm font-medium">TAKE ACTION</p>
          </button>
        </div>
        <div></div>
        <div></div>
        <div className="w-full h-full flex flex-col items-end space-y-10 py-20 overflow-y-scroll no-scrollbar">
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">
              Glass
              <br />
              Waste
            </p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">
              Paper
              <br />
              Waste
            </p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">
              Cardboard
              <br />
              Waste
            </p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">
              Plastic
              <br />
              Waste
            </p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">
              Metal
              <br />
              Waste
            </p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
          <button className="pressable w-full flex flex-row justify-end items-center">
            <p className="z-10 text-white text-right text-lg -mr-7">Trash</p>
            <img src={bg} alt="bg" className="w-2/3 h-auto rounded-md" />
          </button>
        </div>
      </div>
    </div>
  );
}
